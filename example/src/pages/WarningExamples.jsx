import React from "react";
import { HallPass } from "react-hall-pass";

const emp1Styles = {
  backgroundColor: "lightgray",
  marginBottom: "10px",
  minHeight: "30px",
  padding: "10px",
  width: "50%"
};

const noteSectionStyles = {
  color: "#282c34",
  marginBottom: "10px"
};

function sheduleGame() {
  alert("you have scheduled a game!");
}

const Schedule = () => (
  <main className="schedule">
    <h1 style={{ marginBottom: "10px" }}>Example to show the warnings</h1>

    <div style={noteSectionStyles}>
      <small>(check your console to see the warnings there)</small>
    </div>

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
