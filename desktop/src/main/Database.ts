import * as path from 'path';
import * as Sqlite3 from 'sqlite3';

export class Database {
  private static _connection: Sqlite3.Database;
  private constructor() {}

  public static getConnection(): Sqlite3.Database {
    if (Database._connection) {
      return Database._connection;
    }

    const filePath = path.resolve(process.cwd(), 'users.db');
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
      uuid VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
      first_name VARCHAR(255) NULL,
      last_name VARCHAR(255) NULL,
      dob BIGINT NULL,
      address VARCHAR(255) NULL
    )`;

    Database._connection = new Sqlite3.Database(filePath, err => {
      if (err) {
        console.error(`Cannot connect to ${filePath}, ERROR: ${err.message}`);
      }

      console.log(`Connect to ${filePath} successful`);
    });

    Database._connection.serialize(() => {
      Database._connection.each(createTableQuery, err => {
        if (err) {
          console.error(`Cannot create users table, ERROR: ${err.message}`);
        }
      });
    });

    return Database._connection;
  }

  public static closeConnection() {
    if (Database._connection) {
      Database._connection.close(err => {
        if (err) {
          console.error(`Cannot close Sqlite3 connection, ERROR: ${err.message}`);
        }
      });
    }
  }
}
