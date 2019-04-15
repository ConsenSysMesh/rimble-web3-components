import React from "react";
import { configure, shallow, render, mount } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
configure({ adapter: new Adapter() });

import ConnectionBanner from "./ConnectionBanner";

describe("ConnectionBanner", () => {
  it("matches default snapshot", () => {
    const component = render(<ConnectionBanner />);
    expect(component).toMatchSnapshot();
  });
});
