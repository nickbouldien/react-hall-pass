import * as React from "react";
import { HallPass } from "react-hall-pass";
import { employee3, superAdmin } from "../exampleUsers";

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

const emp3Styles = {
  ...emp1Styles,
  backgroundColor: "skyblue"
};

function sheduleGame() {
  alert("you have scheduled a game!");
}

const Exceptions: React.FC = () => (
  <main className="exceptions">
    <h1 style={{ marginBottom: "10px" }}>Exceptions</h1>

    <div style={noteSectionStyles}>
      <small>these examples use arrays of permissions</small>
      <br />
      <small>
        NOTE: be careful with the exceptions prop as it is powerful and can/will
        override the default behavior. So in general, try not to use it unless
        you actually need it for an exception to the norm. It is mainly meant to
        be an available/accessible escape route
      </small>
    </div>

    <div className="employee-1" style={emp1Styles}>
      <strong>super admin</strong> (the button will render even though the user
      does not have the "SCHEDULE_GAME" permission). The user <i>does</i> have
      the "SUPER_ADMIN" permission which allows this user to see the button
      since "SUPER_ADMIN" is passed to the exceptions prop (as a string)
      {/* this will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME", "PAY_PLAYER"]}
        userPermissions={superAdmin.permissions}
        exceptions={"SUPER_ADMIN"}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>

    <div className="employee-1" style={emp1Styles}>
      <strong>super admin</strong> (the button will render even though the user
      does not have the "SCHEDULE_GAME" permission). The user <i>does</i> have
      the "SUPER_ADMIN" permission which allows this user to see the button
      since "SUPER_ADMIN" is passed to the exceptions prop (as an array)
      {/* this will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
      <HallPass
        requiredPermissions={["SCHEDULE_GAME", "PAY_PLAYER"]}
        userPermissions={superAdmin.permissions}
        exceptions={["SUPER_ADMIN"]}
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
        requiredPermissions={["SCHEDULE_GAME", "PAY_PLAYER"]}
        userPermissions={employee3.permissions}
      >
        <div>
          <button onClick={sheduleGame}>schedule a game</button>
        </div>
      </HallPass>
    </div>
  </main>
);

export default Exceptions;
