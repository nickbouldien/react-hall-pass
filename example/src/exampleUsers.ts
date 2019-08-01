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

const users: Users = {
  fan1: {
    name: "josh",
    permissions: []
  },
  employee1: {
    name: "rafael",
    permissions: ["PAY_PLAYER"]
  },
  employee2: {
    name: "dave",
    permissions: ["PAY_PLAYER", "SCHEDULE_GAME"]
  },
  employee3: {
    name: "jorge",
    permissions: ["PAY_PLAYER", "SCHEDULE_GAME", "DRAFT_PLAYER"]
  }
};

export default users;
