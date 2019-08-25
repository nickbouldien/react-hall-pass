import React from "react";
import { HallPass } from "react-hall-pass";

/* 
  if you have common patterns that you keep repeating (using the same 
  userPermissions and requiredPermissions), you can make a "helper component" 
  that can be reused)
*/

interface IProps {
  userPermissions: string[];
}

export const PayPlayerUser: React.FC<IProps> = ({
  children,
  userPermissions
}) => (
  <HallPass
    requiredPermissions={["PAY_PLAYER"]}
    userPermissions={userPermissions}
  >
    {children}
  </HallPass>
);

export const PayPlayerScheduleGameUser: React.FC<IProps> = ({
  children,
  userPermissions
}) => (
  <HallPass
    requiredPermissions={["PAY_PLAYER", "SCHEDULE_GAME"]}
    userPermissions={userPermissions}
  >
    {children}
  </HallPass>
);
