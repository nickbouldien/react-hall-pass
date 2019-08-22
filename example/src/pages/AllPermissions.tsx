import React from "react";
import { HallPass } from "react-hall-pass";
import exampleUsers, { User } from "../exampleUsers";

class AllPermissions extends React.Component {
  // since this is just a demo, I'm setting the default user
  // to fan1 (who doesn't have any permissions)
  state = {
    user: "fan1"
  };

  onClick = (permission: string) => {
    alert(`you clicked the button for ${permission}!`);
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ user: event.target.value });
  };

  render() {
    const currentUser: User = exampleUsers[this.state.user];

    return (
      <div className="all-permissions">
        <h1>All Permissions</h1>
        <label>
          Select your user:
          <select value={this.state.user} onChange={this.handleChange}>
            {Object.keys(exampleUsers).map(userName => {
              return (
                <option value={userName} key={userName}>
                  {userName}
                </option>
              );
            })}
          </select>
        </label>

        {currentUser.permissions.length === 0 ? (
          <p>select a user with permissions to see the buttons</p>
        ) : (
          <div>
            the selected user's permissions:
            <ul>
              {typeof currentUser.permissions === "string" ? (
                <li>{currentUser.permissions}</li>
              ) : (
                currentUser.permissions.map(permission => (
                  <li key={permission}>{permission}</li>
                ))
              )}
            </ul>
          </div>
        )}

        <HallPass
          requiredPermissions={["PAY_PLAYER"]}
          userPermissions={currentUser.permissions}
        >
          <div className="pay-player">
            <button onClick={() => this.onClick("PAY_PLAYER")}>
              pay player
            </button>
          </div>
        </HallPass>

        <HallPass
          requiredPermissions={["SCHEDULE_GAME"]}
          userPermissions={currentUser.permissions}
        >
          <div className="schedule-game">
            <button onClick={() => this.onClick("SCHEDULE_GAME")}>
              schedule a game
            </button>
          </div>
        </HallPass>

        <HallPass
          requiredPermissions={["DRAFT_PLAYER"]}
          userPermissions={currentUser.permissions}
        >
          <div className="draft-player">
            <button onClick={() => this.onClick("DRAFT_PLAYER")}>
              draft player
            </button>
          </div>
        </HallPass>

        <hr />

        <p>only users with multiple required permissions will see the below</p>

        <div>
          <HallPass
            requiredPermissions={["PAY_PLAYER", "SCHEDULE_GAME"]}
            userPermissions={currentUser.permissions}
          >
            <p>pay player, schedule a game && draft player</p>
            <button onClick={() => this.onClick("PAY_PLAYER, SCHEDULE_GAME")}>
              do it
            </button>
          </HallPass>

          <HallPass
            requiredPermissions={[
              "PAY_PLAYER",
              "SCHEDULE_GAME",
              "DRAFT_PLAYER"
            ]}
            userPermissions={currentUser.permissions}
          >
            <p>pay player, schedule a game && draft player</p>
            <button
              onClick={() =>
                this.onClick("PAY_PLAYER, SCHEDULE_GAME, DRAFT_PLAYER")
              }
            >
              do it all
            </button>
          </HallPass>
        </div>

        <HallPass
          requiredPermissions={["SELL_TEAM"]}
          userPermissions={currentUser.permissions}
        >
          <div className="sell-team">
            <button onClick={() => this.onClick("SELL_TEAM")}>sell team</button>
          </div>
        </HallPass>
      </div>
    );
  }
}

export default AllPermissions;
