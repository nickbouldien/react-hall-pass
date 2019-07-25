import React from "react";

/* 
anybody (fans/employees) can get to this route/page, but fans see 
it in "read only mode", while employees see it in "edit mode" 
(they can see and click the button to schedule a game)
*/

const Schedule: React.FC = () => {
  return (
    <div className="schedule">
      <h1>Schedule</h1>
      <p>game on wednesday</p>
      <p>game on saturday</p>
      <div>
        {/* not visible to fans */}
        <button>schedule a game</button>
      </div>
    </div>
  );
};

export default Schedule;
