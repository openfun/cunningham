import { render, screen } from "@testing-library/react";
import React from "react";
import { faker } from "@faker-js/faker";
import { getAllByRole, queryAllByRole } from "@testing-library/dom";
import { expect } from "vitest";
import { CunninghamProvider } from ":/components/Provider";
import { DataList } from ":/components/DataGrid/DataList";

describe("<DataList/>", () => {
  it("should render a DataList", async () => {
    const rows = Array.from(Array(3)).map((_value, index) => ({
      id: `list key for element ${index}`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    }));
    render(
      <CunninghamProvider>
        <DataList
          columns={[{ field: "firstName" }, { field: "lastName" }]}
          rows={rows}
        />
      </CunninghamProvider>
    );

    const table = screen.getByRole("table");
    expect(queryAllByRole(table, "columnheader")).toEqual([]);

    rows.forEach((row) => {
      const element = screen.getByTestId(row.id);
      const tds = getAllByRole(element, "cell");
      expect(tds.length).toBe(2);
      expect(tds[0].textContent).toEqual(row.firstName);
      expect(tds[1].textContent).toEqual(row.lastName);
    });
  });
});
