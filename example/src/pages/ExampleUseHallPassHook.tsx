import React from "react";
import { useHallPass } from "react-hall-pass";
import { employee1, employee3 } from "../exampleUsers";
import { sheduleGame } from "../utils";

const ExampleUseHallPassHook: React.FC = () => {
  const employee1ScheduleGame = useHallPass(employee1.permissions, [
    "SCHEDULE_GAME"
  ]);

  const employee3ScheduleGame = useHallPass(employee3.permissions, [
    "SCHEDULE_GAME"
  ]);

  return (
    <div className="schedule">
      <h1>Example of the useHallPass hook</h1>
      <p>The `useHallPass` hook is exposed if you would rather use it</p>

      <div className="employee-1">
        Employee 1 (the button will not render)
        <pre>
          <code>
            const employee1ScheduleGame = useHallPass( ["SCHEDULE_GAME"],
            employee1.permissions ); // employee1ScheduleGame === false;
          </code>
        </pre>
        {/* this will not render, as employee1 doesn't have the correct permissions ("SCHEDULE_GAME") */}
        {employee1ScheduleGame && (
          <button onClick={sheduleGame}>schedule a game</button>
        )}
      </div>

      <div className="employee-1">
        Employee 3 (the button will render)
        <pre>
          <code>
            const employee3ScheduleGame = useHallPass( ["SCHEDULE_GAME"],
            employee3.permissions ); // employee1ScheduleGame === true;
          </code>
        </pre>
        {/* this will render, as employee3 has the correct permissions ("SCHEDULE_GAME") */}
        {employee3ScheduleGame && (
          <button onClick={sheduleGame}>schedule a game</button>
        )}
      </div>
    </div>
  );
};

export default ExampleUseHallPassHook;
