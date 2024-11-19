import React from "react";
import { render } from "@testing-library/react";

import JestTestSolidIcon from "../flags/JestTestIcon";
import { it } from "node:test";

it("Flag icons should have their fill attribute set to currentColor", () => {
    const { container } = render(<JestTestSolidIcon />);

    const svg = container.querySelector("svg");
    expect(svg.getAttribute("fill")).toEqual("currentColor");
});
