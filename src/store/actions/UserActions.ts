type UserActionsNames = "LOGIN" | "LOGOUT";

interface UserActions {
  type: UserActionsNames;
  [extraProps: string]: any
}

export const doLogin = (id: number, name: string): UserActions => ({
  type: "LOGIN", id, name
});

export const doLogout = (): UserActions => ({ type: "LOGOUT" });

export default UserActions;