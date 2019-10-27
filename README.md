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

### Example site
- [https://react-hall-pass.nickbouldien.now.sh/](https://react-hall-pass.nickbouldien.now.sh/)

### Using the HallPass component

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

### Using the hook directly
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

| param               | type                                       | required |
| ------------------- | ------------------------------------------ | -------- |
| userPermissions     | <code>Array`<string>` &#124; string</code> | `true`   |
| requiredPermissions | <code>Array`<string>` &#124; string</code> | `true`   |
| exceptions          | <code>Array`<string>` &#124; string</code> | `false`  |

*NOTE - currently no parameters have defaults*

## Note about exceptions
Be careful with the exceptions prop as it is powerful and can/will override the default behavior of stricly checking the userPermissions against the requiredPermissions. So in general, try not to use it unless you actually need it for an _exception_ to the norm. It is mainly meant to be an available/accessible escape route.

## About
I started working on this after looking at the afformentioned [react-lever](https://github.com/medipass/react-lever) library that helps with feature flags.  A few weeks into it, I realized that I hadn't really scoped out the landscape of libraries for permissions in react, but decided to continue making this after seeing a few that already existed. 

A few goals I had:
- render inside children (pass whatever you want to the `HallPass` component) - this is the "default" behavior
- expose a hook that allows the developer to use the hook directly and not have to use the `HallPass` component
-  write the library in TypeScript
-  make sure that `HallPass` wasn't too opionated with regards to where it was used.  I've seen a few libraries that make some assumptions on if you're using a certain state management library (ie. redux) or not, etc. (React-Hall-Pass is of course opionated by the fact that you _have_ to pass an array (or string) and not some other custom data structure (though I guess that could change if it could be implemented well enough))
-  make sure the library was well documented (I'm a big fan of well documented things and learning from examples, so I'd like to document this library well and have a decent amount of [examples](https://github.com/nickbouldien/react-hall-pass/tree/master/example) for potential users of the library)

Also, this is one of the first things I've worked on in TypeScript, so feel free to help out if anything seems a bit off.

## Contributing

Thoughts/ideas/problems/fixes welcome. Please create an issue and we can discuss.

## License

MIT © [nickbouldien](https://github.com/nickbouldien)
