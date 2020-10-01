import React from "react";

export interface User {
  id: number;
  name: string;
}

interface UserContext {
  user?: User;
  logout: () => void;
}

export default React.createContext<UserContext>({} as UserContext);