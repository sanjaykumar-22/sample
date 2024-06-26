import { Connection } from 'oracledb';
import { connectDb } from "../config/dbConfig";

interface BindParameters {
  [key: string]: any;
}

interface ResultMetaData {
  name: string;
}

interface QueryResult {
  rows: any[];
  metaData: ResultMetaData[];
}

const functionSelect = async (sql: string, bind: BindParameters, db: string): Promise<any[]> => {
  let connection: Connection | undefined;
  console.log(sql, bind);
  try {
    switch (db) {
      case "devuser":
        connection = await connectDb.connectDb_dev();
        break;
      case "hisLive":
        connection = await connectDb.connectDb_live();
        break;
      case "PHAR":
        connection = await connectDb.connectDb_devpharm();
        break;
      case "TRS":
        connection = await connectDb.connectDb_TRS();
        break;
      case "HMS":
        connection = await connectDb.connectDb_dev_hms();
        break;
      default:
        throw new Error("Invalid database name");
    }

    if (sql && bind) {
      const result: QueryResult = await connection.execute(sql, bind);
      const rows = result.rows;

      const keys = result.metaData.map((column) => column.name);
      const transformedData = rows.map((row) => {
        const obj: { [key: string]: any } = {};
        keys.forEach((key, index) => {
          obj[key] = row[index];
        });
        return obj;
      });

      return transformedData;
    } else {
      throw new Error("Invalid SQL or binds");
    }
  } catch (error) {
    console.error("Error in functionSelect:", error);
    throw error;
  } finally {
    // Close the connection when done
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error("Error closing the database connection:", error);
      }
    }
  }
};

export { functionSelect };
