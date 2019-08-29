export type Permission = string;

function useHallPass(
  userPermissions: Permission | Permission[],
  requiredPermissions: Permission | Permission[],
  exceptions?: Permission | Permission[]
): boolean {
  if (!userPermissions) {
    throw new Error(
      "You must supply an array of user permissions or a single string permission."
    );
  }
  if (!requiredPermissions) {
    throw new Error(
      "You must supply an array of required permissions or a single string permission."
    );
  }

  userPermissions =
    typeof userPermissions === "string" ? [userPermissions] : userPermissions;

  requiredPermissions =
    typeof requiredPermissions === "string"
      ? [requiredPermissions]
      : requiredPermissions;

  if (requiredPermissions.length === 0) {
    // if no permissions are required, the user can see "it"
    return true;
  }

  let exceptionsToCheck: string[] | undefined;

  if (exceptions) {
    exceptionsToCheck =
      typeof exceptions === "string" ? [exceptions] : exceptions;
  }

  let total = 0;
  for (let permission of userPermissions) {
    if (exceptionsToCheck && exceptionsToCheck.includes(permission)) {
      // the user has the exception, so bail out early returning true
      return true;
    }
    if (requiredPermissions.includes(permission)) {
      total++;
    }
  }

  return total === requiredPermissions.length;
}

export default useHallPass;
