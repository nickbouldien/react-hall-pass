import React from "react";

const AllPermissions: React.FC = () => {
  return (
    <div className="all-permissions">
      <h1>All Permissions</h1>

      <div className="pay-player">
        <button>pay player</button>
      </div>

      <div className="schedule-game">
        <button>schedule a game</button>
      </div>

      <div className="draft-player">
        <button>draft player</button>
      </div>

      <div className="sell-team">
        <button>sell team</button>
      </div>
    </div>
  );
};

export default AllPermissions;
