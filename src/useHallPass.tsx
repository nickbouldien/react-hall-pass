export type Permission = string;

function useHallPass(
  userPermissions: Permission[],
  requiredPermissions: Permission[]
): boolean {
  if (!userPermissions) {
    throw new Error("You must supply an array of user permissions.");
  }
  if (!requiredPermissions) {
    throw new Error("You must supply an array of required permissions.");
  }

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
