export type InitiateSessionProps = {
  email: string;
  password: string;
};

export type InitiateSessionResponse = {
  user: GetUserProfileResponse;
  token: string;
};

export type GetUserProfileResponse = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string | null;
  created_at: string;
  updated_at: string;
};
