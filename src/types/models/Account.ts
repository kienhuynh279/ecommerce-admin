export interface AccountState {
  user: User | null;
}

export interface User {
  user_id: string;
  user_name: string;
  user_email: string;
  user_password: string;
}
