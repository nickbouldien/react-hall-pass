export type User = {
  name: string;
  permissions: string | string[];
};

export interface Users {
  [s: string]: User;
}

export const fan1: User = {
  name: "josh",
  permissions: []
};

export const employee1: User = {
  name: "rafael",
  permissions: ["PAY_PLAYER"]
};

export const employee2: User = {
  name: "dave",
  permissions: ["PAY_PLAYER", "SCHEDULE_GAME"]
};

export const employee3: User = {
  name: "jorge",
  permissions: ["PAY_PLAYER", "SCHEDULE_GAME", "DRAFT_PLAYER"]
};

export const employee4: User = {
  name: "thiago",
  permissions: "SCHEDULE_GAME"
};

export const employee5: User = {
  name: "carlos",
  permissions: "PAY_PLAYER"
};
