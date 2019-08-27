# react-hall-pass

> A small React library to help with user permissions. this was largely inspired by [react-lever](https://github.com/medipass/react-lever), a small library to help with feature flags

## Install

with yarn:
```bash
yarn add react-hall-pass
```

or without yarn:
```bash
npm install --save react-hall-pass
```

## Usage

### Using the HallPass component {#component}

```tsx
import * as React from "react";

import { HallPass } from "react-hall-pass";

class Example extends React.Component {
  const user = {
    name: "example user",
    permissions: ["PERMISSION_1", "PERMISSION_2"]
  }
  render() {
    return (
      <>
        <h1>Quick HallPass Example</h1>

        <p>public content for anybody to see</p>

        <HallPass
          requiredPermissions={["PERMISSION_1"]}
          userPermissions={user.permissions}
        >
          <p>
            some content that should only be seen by those with the proper permissions (in this case, users that have the "PERMISSION_1" permission)
          </p>
        </HallPass>
      </>
    );
  }
}
```

### Using the hook directly {#hook}
*this is what the `<HallPass>` component uses under the hood*

```tsx
import * as React from "react";
import { useHallPass } from "react-hall-pass";

const OtherExample: React.FC = () => {
  const user = {
    name: "example user",
    permissions: ["PERMISSION_1", "PERMISSION_2"]
  }

  // const passesChecks = useHallPass(userPermissions, requiredPermissions, exceptions?);
  const passesChecks = useHallPass(user.permissions, ["PERMISSION_1"]);

  if (!passesChecks) {
    return <p>you don't have the correct permissions</p>
  }
  return (
    <div>
      the user has the permissions required to view this content
    </div>
  )
}
```

## parameters

| param               | type                     | required |
| ------------------- | ------------------------ | -------- |
| userPermissions     | `Array<string> | string` | `true`   |
| requiredPermissions | `Array<string> | string` | `true`   |
| exceptions          | `Array<string> | string` | `false`  |

*NOTE - currently no parameters have defaults*

## License

MIT © [nickbouldien](https://github.com/nickbouldien)
