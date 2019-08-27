import React from "react";
import { HallPass } from "react-hall-pass";

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

function sheduleGame() {
  alert("you have scheduled a game!");
}

// const Fallback = () => (
//   <div className="fallback-ui" style={fallbackUIStyles}>
//     this is fallback UI that the user will see if they don't have the proper
//     permissions to see the "desired" UI (the button to schedule a game)
//   </div>
// );

const Schedule = () => (
  <main className="schedule">
    <h1 style={{ marginBottom: "10px" }}>Example to show the warnings</h1>

    <div className="employee-1" style={emp1Styles}>
      an example with no children
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={["SCHEDULE_GAME"]}
      >
        {/* no children */}
      </HallPass>
    </div>

    <div className="employee-1" style={emp1Styles}>
      an example with an invalid fallbackUI prop
      <HallPass
        requiredPermissions={["SCHEDULE_GAME"]}
        userPermissions={[]}
        fallbackUI={"adsf"}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>
  </main>
);

export default Schedule;
