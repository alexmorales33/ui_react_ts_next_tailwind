export interface User {
  name: string;
  lastName: string;
  email: string;
  email_verified: boolean;
  active: boolean;
  roles?: string[];
}

export interface UserPostData {
  name: string;
  lastName: string;
  email: string;
  email_verified: boolean;
  active: boolean;
  roles: string[];
}

export interface UserRoleUpdate {
  roles: string[];
}

export interface UserDataUpdate {
  name?: string;
  lastName?: string;
}

export type Users = User[];
