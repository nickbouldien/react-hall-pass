import * as React from "react";
import { HallPass } from "react-hall-pass";
import { employee1, employee3 } from "../exampleUsers";

/* 
anybody (fans/employees) can get to this route/page, but fans see 
it in "read only mode", while employees see it in "edit mode" 
(they can see and click the button to schedule a game)
*/

function sheduleGame() {
  alert("you have scheduled a game!");
}

const Schedule: React.FC = () => {
  return (
    <div className="schedule">
      <h1>Schedule</h1>
      <p>game on monday vs LA</p>
      <p>game on wednesday vs NY</p>
      <p>game on friday vs London</p>
      <p>game on saturday vs Rio</p>
      <p>game on sunday vs Sydney</p>

      {/* this will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={employee1.permissions}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>

      {/* this _will_ render, as employee3 does have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={employee3.permissions}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>
  );
};

export default Schedule;
