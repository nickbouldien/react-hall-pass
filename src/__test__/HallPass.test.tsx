import * as React from "react";
import { configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import HallPass from "../HallPass";

configure({ adapter: new Adapter() });

import {
  fan1,
  employee1
  // employee3,
  // employee4,
  // employee5,
  // specialUser,
  // superAdmin
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

  test("employee with 'PAY_PLAYER' userPermission, requiredPermissions array with 'PAY_PLAYER' && 'SCHEDULE_GAME' ", () => {
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
describe("HallPass with children", () => {
  test("HallPass with <About /> child, no userPermissions, no requiredPermissions", () => {
    const wrapper1 = mount(<About />);
    expect(wrapper1.find("#about-page")).toHaveLength(1);

    const wrapper = mount(
      <HallPass userPermissions={[]} requiredPermissions={[]}>
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });

  test("HallPass with <About /> child, fan1 with no userPermissions, no requiredPermissions ", () => {
    const wrapper1 = mount(<About />);
    expect(wrapper1.find("#about-page")).toHaveLength(1);

    const wrapper = mount(
      <HallPass userPermissions={fan1.permissions} requiredPermissions={[]}>
        <About />
      </HallPass>
    ) as any;

    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find("#about-page")).toHaveLength(1);
  });
});
