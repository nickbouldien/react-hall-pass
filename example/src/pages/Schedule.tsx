import * as React from "react";
import { HallPass } from "react-hall-pass";
import { employee1, employee3 } from "../exampleUsers";
import { sheduleGame } from "../utils";

/* 
anybody (fans/employees) can get to this route/page, but fans see 
it in "read only mode", while employees see it in "edit mode" 
(they can see and click the button to schedule a game)
*/

// TODO - use something else for styling
const emp1Styles = {
  backgroundColor: "lightgray",
  marginBottom: "10px",
  minHeight: "30px",
  padding: "10px",
  width: "50%"
};

const fallbackUIStyles = {
  ...emp1Styles,
  backgroundColor: "salmon",
  marginTop: "10px",
  width: "80%"
};

const emp3Styles = {
  ...emp1Styles,
  backgroundColor: "skyblue"
};

const noteSectionStyles = {
  color: "#282c34",
  marginBottom: "10px"
};

const scheduleSectionStyles = {
  color: "#282c34",
  marginBottom: "10px"
};

const Fallback = () => (
  <div className="fallback-ui" style={fallbackUIStyles}>
    this is fallback UI that the user will see if they don't have the proper
    permissions to see the "desired" UI (the button to schedule a game)
  </div>
);

const Schedule: React.FC = () => (
  <main className="schedule">
    <h1 style={{ marginBottom: "10px" }}>Schedule</h1>
    <div style={noteSectionStyles}>
      <small>these examples use arrays of permissions</small>
      <br />
      <small>
        NOTE: anybody (fans/employees) can get to this route/page, but fans see
        it in "read only mode", while employees see it in "edit mode" (they can
        see and click the button to schedule a game)
      </small>
    </div>

    <div style={scheduleSectionStyles}>
      <h2>team schedule</h2>
      <p>game on monday vs LA</p>
      <p>game on wednesday vs NY</p>
      <p>game on friday vs London</p>
      <p>game on saturday vs Rio</p>
      <p>game on sunday vs Sydney</p>
    </div>

    <div className="employee-1" style={emp1Styles}>
      <strong>Employee 1</strong> (the button will not render)
      {/* this will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={employee1.permissions}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>

    <div className="employee-3" style={emp3Styles}>
      <strong>Employee 3</strong>
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

    <div className="employee-1" style={emp1Styles}>
      <strong>Employee 1</strong> (the button will not render), but there will
      be fallback UI to display
      {/* the desired UI (the button) will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={employee1.permissions}
        fallbackUI={<Fallback />}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>

    <div className="employee-1" style={emp1Styles}>
      <strong>Employee 1</strong> (the button will not render), but there will
      be fallback UI to display
      {/* the desired UI (the button) will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={employee1.permissions}
        fallbackUI={<Fallback />}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>
  </main>
);

export default Schedule;
