import * as Sqlite3 from 'sqlite3';
import { uuid } from 'uuidv4';

import { Database } from './Database';

class Users {
  private db: Sqlite3.Database;

  constructor() {
    this.db = Database.getConnection();
  }

  public getUsers(): Promise<Model.User[]> {
    return new Promise((res, rej) => {
      const selectUsersQuery = `SELECT uuid,first_name as firstName,last_name as lastName,dob,address FROM users`;

      console.log('------> selectUsersQuery: ', selectUsersQuery);

      this.db.serialize(() => {
        this.db.all(selectUsersQuery, [], (err, rows) => {
          if (err) {
            const message = `Cannot select users from table, ERROR: ${err.message}`;

            console.error(message);
            rej(message);
          }

          res(rows);
        });
      });
    });
  }
  public addUser(user: Model.FrontUser): string {
    const userUuid = uuid();
    const addUserQuery = `INSERT INTO users (uuid,first_name,last_name,dob,address) VALUES('${userUuid}', '${user.firstName}', '${user.lastName}', ${user.dob}, '${user.address}')`;

    console.log('------> addUserQuery: ', addUserQuery);

    this.db.serialize(() => {
      this.db.all(addUserQuery, err => {
        if (err) {
          console.error(`Cannot insert user into users table, ERROR: ${err.message}`);
        }

        return userUuid;
      });
    });

    return userUuid;
  }
  public editUser(user: Model.User): void {
    const updateUserQuery = `UPDATE users SET first_name='${user.firstName}',last_name='${user.lastName}',dob=${user.dob},address='${user.address}' WHERE uuid='${user.uuid}'`;

    console.log('------> updateUserQuery: ', updateUserQuery);

    this.db.serialize(() => {
      this.db.all(updateUserQuery, err => {
        if (err) {
          console.error(`Cannot update user in users table, ERROR: ${err.message}`);
        }
      });
    });
  }
  public deleteUser(userUuid: string): void {
    const deleteUserQuery = `DELETE FROM users WHERE uuid='${userUuid}'`;

    console.log('------> deleteUserQuery: ', deleteUserQuery);

    this.db.serialize(() => {
      this.db.all(deleteUserQuery, err => {
        if (err) {
          console.error(`Cannot delete user from users table, ERROR: ${err.message}`);
        }
      });
    });
  }
}

export default new Users();
