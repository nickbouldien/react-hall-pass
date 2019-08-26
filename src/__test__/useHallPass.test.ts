import useHallPass from "../useHallPass";
import {
  fan1,
  employee1,
  employee3,
  employee4,
  employee5,
  specialUser,
  superAdmin
} from "./data";

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

/* single permission string (not an array) for userPermissions */
test("useHallPass returns true for a string of one userPermission that is in the required permissions array", () => {
  const result = useHallPass(employee5.permissions, requiredPermissions1);
  expect(result).toBe(true);
});

test("useHallPass returns false for a string of one userPermission that is not in the required permissions array", () => {
  const result = useHallPass(employee4.permissions, requiredPermissions2);
  expect(result).toBe(false);
});

/* single permission string (not an array) for requiredPermissions */
test("useHallPass returns true for a string of one requiredPermission that is in the user's permissions array", () => {
  const result = useHallPass(employee1.permissions, stringPermission);
  expect(result).toBe(true);
});

test("useHallPass returns false for a string of one userPermission that is not in the user's permissions array", () => {
  const result = useHallPass(fan1.permissions, stringPermission);
  expect(result).toBe(false);
});

/* single permission string for both requiredPermissions and userPermissions */
test("useHallPass returns true for a string of one requiredPermission that is the user's one (string) permission", () => {
  const result = useHallPass(employee5.permissions, stringPermission);
  expect(result).toBe(true);
});

test("useHallPass returns false for a string of one requiredPermission that is not the user's one (string) permission", () => {
  const result = useHallPass(employee4.permissions, stringPermission);
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

/* exceptions */
test("useHallPass returns true for a user that has the exception (array)", () => {
  const result = useHallPass(superAdmin.permissions, requiredPermissions3, [
    "SUPER_ADMIN"
  ]);
  expect(result).toBe(true);
});

test("useHallPass returns true for a user that has the exception (string)", () => {
  const result = useHallPass(
    superAdmin.permissions,
    requiredPermissions4,
    "SUPER_ADMIN"
  );
  expect(result).toBe(true);
});

test("useHallPass returns true for a user that has the exception (in an array with other exceptions)", () => {
  const result = useHallPass(superAdmin.permissions, requiredPermissions4, [
    "SUPER_ADMIN",
    "OTHER_EXCEPTION"
  ]);
  expect(result).toBe(true);
});

test("useHallPass returns true for a user that has the exception (array) when the requiredPermissions is an empty array", () => {
  const result = useHallPass(
    superAdmin.permissions,
    [],
    ["SUPER_ADMIN", "OTHER_EXCEPTION"]
  );
  expect(result).toBe(true);
});

test("useHallPass returns false for a user that does NOT have the required permissions nor the exception passed in the array of exceptions - 1", () => {
  const result = useHallPass(superAdmin.permissions, requiredPermissions4, [
    "OTHER_EXCEPTION"
  ]);
  expect(result).toBe(false);
});

test("useHallPass returns false for a user that does NOT have the required permissions nor the exception passed in the array of exceptions - 2", () => {
  const result = useHallPass(employee1.permissions, requiredPermissions4, [
    "OTHER_EXCEPTION"
  ]);
  expect(result).toBe(false);
});

test("useHallPass returns true for a user that doesn't have the exception, but the requiredPermissions array is empty", () => {
  const result = useHallPass(employee1.permissions, [], ["OTHER_EXCEPTION"]);
  expect(result).toBe(true);
});

test("useHallPass returns true for a user that has the required permissions and the exception passed in the array of exceptions", () => {
  const result = useHallPass(specialUser.permissions, requiredPermissions3, [
    "OTHER_EXCEPTION",
    "SUPER_ADMIN"
  ]);
  expect(result).toBe(true);
});
