import * as React from "react";
import { HallPass } from "react-hall-pass";
import { employee1, employee3 } from "../exampleUsers";

/* 
anybody (fans/employees) can get to this route/page, but fans see 
it in "read only mode", while employees see it in "edit mode" 
(they can see and click the button to schedule a game)
*/

const emp1Styles = {
  backgroundColor: "lightgray",
  minHeight: "30px",
  width: "40%"
};

const emp3Styles = {
  ...emp1Styles,
  backgroundColor: "skyblue"
};

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

      <div className="employee-1" style={emp1Styles}>
        Employee 1 (the button will not render)
        {/* this will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
        <HallPass
          requiredPermissions={["SCHEDULE_GAME"]}
          userPermissions={employee1.permissions}
        >
          <button onClick={sheduleGame}>schedule a game</button>
        </HallPass>
      </div>

      <div className="employee-3" style={emp3Styles}>
        Employee 3:
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
    </div>
  );
};

export default Schedule;
