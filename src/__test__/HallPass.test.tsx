import * as React from "react";
import { configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import HallPass from "../HallPass";

configure({ adapter: new Adapter() });

import {
  fan1,
  employee1,
  employee3,
  employee4,
  employee5,
  // specialUser,
  superAdmin
} from "./data";

const About = () => <div id="about-page">You are on the about page</div>;

/* no children */
describe("HallPass with no children", () => {
  test("no userPermissions, no requiredPermissions", () => {
    const component = mount(
      <HallPass userPermissions={[]} requiredPermissions={[]} />
    );
    expect(component.children()).toHaveLength(0);
  });

  test("fan with no userPermissions, no requiredPermissions", () => {
    const component = mount(
      <HallPass userPermissions={fan1.permissions} requiredPermissions={[]} />
    );
    expect(component.children()).toHaveLength(0);
  });

  test("employee with 'PAY_PLAYER' userPermission, no requiredPermissions", () => {
    const component = mount(
      <HallPass
        userPermissions={employee1.permissions}
        requiredPermissions={[]}
      />
    );
    expect(component.children()).toHaveLength(0);
  });

  test("employee with 'PAY_PLAYER' userPermission, 'PAY_PLAYER' requiredPermission", () => {
    const component = mount(
      <HallPass
        userPermissions={employee1.permissions}
        requiredPermissions={["PAY_PLAYER"]}
      />
    );
    expect(component.children()).toHaveLength(0);
  });

  test("employee with 'PAY_PLAYER' userPermission, requiredPermissions array with 'PAY_PLAYER' && 'SCHEDULE_GAME' ", () => {
    const component = mount(
      <HallPass
        userPermissions={employee1.permissions}
        requiredPermissions={["PAY_PLAYER", "SCHEDULE_GAME"]}
      />
    );
    expect(component.children()).toHaveLength(0);
  });

  test("employee with 'PAY_PLAYER' userPermission, requiredPermissions array with 'PAY_PLAYER' && 'SCHEDULE_GAME'", () => {
    const component4 = mount(
      <HallPass
        userPermissions={employee1.permissions}
        requiredPermissions={["PAY_PLAYER", "SCHEDULE_GAME"]}
      />
    );
    expect(component4.children()).toHaveLength(0);
  });
});

/* with children */
describe("HallPass with children - positive (children render)", () => {
  test("HallPass with <About /> child, no userPermissions, no requiredPermissions", () => {
    const wrapper = mount(
      <HallPass userPermissions={[]} requiredPermissions={[]}>
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });

  test("HallPass with <About /> child, fan1 with no userPermissions, no requiredPermissions", () => {
    const wrapper = mount(
      <HallPass userPermissions={fan1.permissions} requiredPermissions={[]}>
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });

  test("HallPass with <About /> child, employee1 with 'PAY_PLAYER' userPermission, no requiredPermissions", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee1.permissions}
        requiredPermissions={[]}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });

  test("HallPass with <About /> child, employee1 with 'PAY_PLAYER' userPermission, requiredPermissions array of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee1.permissions}
        requiredPermissions={["PAY_PLAYER"]}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });

  test("HallPass with <About /> child, employee1 with 'PAY_PLAYER', 'SCHEDULE_GAME', 'DRAFT_PLAYER' userPermissions, requiredPermissions array of 'PAY_PLAYER', 'SCHEDULE_GAME'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee3.permissions}
        requiredPermissions={["PAY_PLAYER", "SCHEDULE_GAME"]}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });
});

/* string permissions */
describe("HallPass with string permissions", () => {
  test("negative - HallPass with child, employee4 with string permission 'SCHEDULE_GAME' userPermission, requiredPermissions string of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee4.permissions}
        requiredPermissions={"PAY_PLAYER"}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(0);
    expect(wrapper.find("#about-page")).toHaveLength(0);
  });

  test("positive - HallPass with child, employee5 with string permission 'PAY_PLAYER' userPermission, requiredPermissions string of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee5.permissions}
        requiredPermissions={"PAY_PLAYER"}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });

  /* no children */
  test("HallPass with no child, employee5 with string permission 'PAY_PLAYER' userPermission, requiredPermissions string of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee5.permissions}
        requiredPermissions={"PAY_PLAYER"}
      />
    ) as any;

    expect(wrapper.children()).toHaveLength(0);
    expect(wrapper.find("#about-page")).toHaveLength(0);
  });

  test("HallPass with no child, employee4 with string permission 'SCHEDULE_GAME' userPermission, requiredPermissions string of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee4.permissions}
        requiredPermissions={"PAY_PLAYER"}
      />
    ) as any;

    expect(wrapper.children()).toHaveLength(0);
    expect(wrapper.find("#about-page")).toHaveLength(0);
  });
});

/* exceptions */
describe("HallPass with exceptions", () => {
  test("negative - HallPass with child, employee4 with string permission 'SCHEDULE_GAME' userPermission, requiredPermissions string of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={employee4.permissions}
        requiredPermissions={"PAY_PLAYER"}
        exceptions={"SUPER_ADMIN"}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(0);
    expect(wrapper.find("#about-page")).toHaveLength(0);
  });

  test("positive - HallPass with child, employee5 with string permission 'PAY_PLAYER' userPermission, requiredPermissions string of 'PAY_PLAYER'", () => {
    const wrapper = mount(
      <HallPass
        userPermissions={superAdmin.permissions}
        requiredPermissions={"PAY_PLAYER"}
        exceptions={"SUPER_ADMIN"}
      >
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });
});
