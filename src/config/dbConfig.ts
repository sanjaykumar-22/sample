import oracledb, { Connection, Result } from 'oracledb';
import * as dotenv from 'dotenv';
import { DbConfig } from '../config/config';
import { env } from 'process';
oracledb.initOracleClient({ libDir: "D:\\instantclient_21_10" });

dotenv.config();

const connectDb_dev = async (): Promise<Connection> => {
  const dbConfig: DbConfig = {
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    connectString: process.env.DB_CONNECTSTRING || '',
  };

  try {
    return await oracledb.getConnection(dbConfig);
  } catch (err) {
    throw new Error(`Failed to connect to the database: ${err.message}`);
  }
};


export const functionSelect = async (sql: string, bind: any[], db: string): Promise<any[]> => {
  let connection: Connection | undefined;

  try {
    connection = await selectConnection(env);

    if (!sql || !bind) {
      throw new Error("Invalid SQL or binds");
    }

    const result: Result<any> = await connection.execute(sql, bind);
    const rows = result.rows || [];
    const keys = result.metaData ? result.metaData.map((column) => column.name) : [];

    const transformedData = rows.map((row) => {
      const obj: { [key: string]: any } = {};
      keys.forEach((key, index) => {
        obj[key] = row[index];
      });
      return obj;
    });

    return transformedData;
  } catch (error) {
    console.error("Error in functionSelect:", error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error("Error closing the database connection:", error);
      }
    }
  }
};

