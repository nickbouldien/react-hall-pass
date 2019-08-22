import useHallPass from "../useHallPass";
import { fan1, employee1, employee3 } from "./data";

const emptyRequiredPermissions: string[] = [];

const requiredPermissions1 = ["PAY_PLAYER"];

const requiredPermissions2 = ["DRAFT_PLAYER"];

const requiredPermissions3 = ["PAY_PLAYER", "SCHEDULE_GAME"];

const requiredPermissions4 = ["PAY_PLAYER", "SCHEDULE_GAME", "DRAFT_PLAYER"];

const stringPermission = "PAY_PLAYER";

/* empty requiredPermissions */
test("useHallPass returns true for empty array of requiredPermissions - employee", () => {
  const result = useHallPass(employee1.permissions, emptyRequiredPermissions);
  expect(result).toBe(true);
});

test("useHallPass returns true for empty array of requiredPermissions - fan", () => {
  const result = useHallPass(fan1.permissions, emptyRequiredPermissions);
  expect(result).toBe(true);
});

/* single requiredPermission */
test("useHallPass returns false for array of one requiredPermission that the user does not have", () => {
  const result = useHallPass(employee1.permissions, requiredPermissions2);
  expect(result).toBe(false);
});

test("useHallPass returns true for array of one requiredPermission that the user does have - 1", () => {
  const result = useHallPass(employee1.permissions, requiredPermissions1);
  expect(result).toBe(true);
});

test("useHallPass returns true for array of one requiredPermission that the user does have - 2", () => {
  const result = useHallPass(employee3.permissions, requiredPermissions1);
  expect(result).toBe(true);
});

test("useHallPass returns true for array of one requiredPermission that the user does have - 3", () => {
  const result = useHallPass(employee3.permissions, requiredPermissions2);
  expect(result).toBe(true);
});

/* single permission string (not an array) */
test("useHallPass returns true for a string of one userPermission that is in the required permissions array", () => {
  const result = useHallPass(stringPermission, requiredPermissions1);
  expect(result).toBe(true);
});

test("useHallPass returns false for a string of one userPermission that is not in the required permissions array", () => {
  const result = useHallPass(stringPermission, requiredPermissions2);
  expect(result).toBe(false);
});

/* multiple requiredPermissions */
test("useHallPass returns false for array of multiple requiredPermission that the user does not have - 1", () => {
  const result = useHallPass(employee1.permissions, requiredPermissions3);
  expect(result).toBe(false);
});

test("useHallPass returns false for array of multiple requiredPermission that the user does not have - 2", () => {
  const result = useHallPass(employee1.permissions, requiredPermissions4);
  expect(result).toBe(false);
});

test("useHallPass returns true for array of multiple requiredPermission that the user does have - 1", () => {
  const result = useHallPass(employee3.permissions, requiredPermissions3);
  expect(result).toBe(true);
});

test("useHallPass returns true for array of multiple requiredPermission that the user does have - 2", () => {
  const result = useHallPass(employee3.permissions, requiredPermissions4);
  expect(result).toBe(true);
});
