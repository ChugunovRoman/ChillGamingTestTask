declare namespace Model {
  interface FrontUser {
    firstName: string;
    lastName: string;
    address: string;
    dob: number;
  }

  interface User extends FrontUser {
    uuid: string;
  }
}
