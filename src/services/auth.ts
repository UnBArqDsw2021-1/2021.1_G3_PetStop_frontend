import api from "../api/";

interface User {
  name: string;
  email: string;
  password: string;
  description?: string;
}

export async function signUp(user: User) {
  const res = await api.post("/user", user);
  console.log(res);
}
