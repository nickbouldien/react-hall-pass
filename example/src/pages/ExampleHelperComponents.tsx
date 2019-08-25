import * as React from "react";
import { employee1, employee3 } from "../exampleUsers";
import {
  PayPlayerUser,
  PayPlayerScheduleGameUser
} from "../components/HallPassHelpers";

function onClick(permission: string) {
  alert(`you clicked the button for ${permission}!`);
}

const ExampleUserHelper: React.FC = () => (
  <div className="helper-components">
    <h1>Helper Components</h1>
    <p>
      this is an example of using helper components for commonly used
      combinations of required permissions
    </p>

    <div className="employee-1">
      Employee 1:
      {/* this _will_ render, as employee1 has the correct permissions ("PAY_PLAYER") */}
      <PayPlayerUser userPermissions={employee1.permissions}>
        <div>
          <button onClick={() => onClick("PAY_PLAYER")}>pay player</button>
        </div>
      </PayPlayerUser>
    </div>

    <div className="employee-3">
      Employee 3:
      {/* this _will_ render, as employee3 has the correct permissions ("PAY_PLAYER") */}
      <PayPlayerUser userPermissions={employee3.permissions}>
        <div>
          <button onClick={() => onClick("PAY_PLAYER")}>pay player</button>
        </div>
      </PayPlayerUser>
    </div>

    <hr />

    <div className="employee-1">
      Employee 1:
      {/* this _will not_ render, as employee1 does not have the correct permissions ("PAY_PLAYER" && "SCHEDULE_GAME") */}
      <PayPlayerScheduleGameUser userPermissions={employee1.permissions}>
        <div>
          <button onClick={() => onClick("PAY_PLAYER, SCHEDULE_GAME")}>
            pay player / schedule game
          </button>
        </div>
      </PayPlayerScheduleGameUser>
    </div>

    <div className="employee-3">
      Employee 3:
      {/* this _will_ render, as employee3 has the correct permissions ("PAY_PLAYER" && "SCHEDULE_GAME")*/}
      <PayPlayerScheduleGameUser userPermissions={employee3.permissions}>
        <div>
          <button onClick={() => onClick("PAY_PLAYER, SCHEDULE_GAME")}>
            pay player / schedule game
          </button>
        </div>
      </PayPlayerScheduleGameUser>
    </div>
  </div>
);

export default ExampleUserHelper;
