export type Permission = string;

function useHallPass(
  userPermissions: Permission | Permission[],
  requiredPermissions: Permission | Permission[]
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

  return (
    userPermissions.filter(permission =>
      requiredPermissions.includes(permission)
    ).length === requiredPermissions.length
  );
}

export default useHallPass;
