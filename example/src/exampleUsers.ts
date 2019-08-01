export type User = {
  name: string;
  permissions: string[];
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
  permissions: ["DRAFT_PLAYER"]
};

export const employee2 = {
  name: "dave",
  permissions: ["DRAFT_PLAYER", "PAY_PLAYER"]
};

export const employee3 = {
  name: "jorge",
  permissions: ["DRAFT_PLAYER", "PAY_PLAYER", "SCHEDULE_GAME"]
};

const users: Users = {
  fan1: {
    name: "josh",
    permissions: []
  },
  employee1: {
    name: "rafael",
    permissions: ["DRAFT_PLAYER"]
  },
  employee2: {
    name: "dave",
    permissions: ["DRAFT_PLAYER", "PAY_PLAYER"]
  },
  employee3: {
    name: "jorge",
    permissions: ["DRAFT_PLAYER", "PAY_PLAYER", "SCHEDULE_GAME"]
  }
};

export default users;
