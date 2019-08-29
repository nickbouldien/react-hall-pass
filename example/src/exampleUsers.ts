export type Permission = string;

export type User = {
  name: string;
  permissions: Permission | Permission[];
};

export interface Users {
  [s: string]: User;
}

export const fan1: User = {
  name: "josh",
  permissions: []
};

export const employee1 = {
  name: "rafael",
  permissions: ["PAY_PLAYER"]
};

export const employee2 = {
  name: "dave",
  permissions: ["PAY_PLAYER", "SCHEDULE_GAME"]
};

export const employee3 = {
  name: "jorge",
  permissions: ["PAY_PLAYER", "SCHEDULE_GAME", "DRAFT_PLAYER"]
};

export const employee4 = {
  name: "thiago",
  permissions: "SCHEDULE_GAME"
};

export const employee5 = {
  name: "carlos",
  permissions: "PAY_PLAYER"
};

export const superAdmin = {
  name: "super admin",
  permissions: "SUPER_ADMIN"
};

const users: Users = {
  fan1,
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  superAdmin
};

export default users;
