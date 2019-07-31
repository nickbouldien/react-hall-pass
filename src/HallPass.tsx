import * as React from "react";
import useHallPass, { Permission } from "./useHallPass";

interface IProps {
  requiredPermissions: Permission[];
  userPermissions: Permission[];
}

const HallPass: React.FC<IProps> = ({
  children,
  requiredPermissions,
  userPermissions
}) => {
  const showChildren = useHallPass(userPermissions, requiredPermissions);
  if (showChildren) {
    if (children) {
      return children as React.ReactElement<any>;
    }
    console.warn("You probably want to supply children to HallPass");
    return null;
  }
  return null;
};

export default HallPass;
