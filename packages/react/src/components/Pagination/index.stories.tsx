import { Meta } from "@storybook/react";
import React, { useEffect, useMemo, useState } from "react";
import { Pagination, usePagination } from ":/components/Pagination/index";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

export const Basic = () => {
  const pagination = usePagination({
    defaultPagesCount: 100,
    defaultPage: 50,
  });
  return <Pagination {...pagination} />;
};

export const List = () => {
  // Numbers from 0 to 99.
  const database = useMemo(() => Array.from(Array(100).keys()), []);
  // Items to display on the current page.
  const [items, setItems] = useState<number[]>([]);
  const pagination = usePagination({ pageSize: 10 });

  // On page change.
  useEffect(() => {
    // Simulate a HTTP request delay.
    const timeout = setTimeout(() => {
      // Sets the number of pages based on the number of items in the database.
      pagination.setPagesCount(
        Math.ceil(database.length / pagination.pageSize)
      );
      // Sets the items to display on the current page.
      setItems(
        database.slice(
          (pagination.page - 1) * pagination.pageSize,
          pagination.page * pagination.pageSize
        )
      );
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [pagination.page]);

  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="p-t bg-neutral-tertiary mb-t" key={item}>
            {item}
          </div>
        ))}
      </div>
      <Pagination {...pagination} />
    </div>
  );
};

export const ForcePage = () => {
  const pagination = usePagination({
    defaultPagesCount: 10,
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      pagination.setPage(5);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <Pagination {...pagination} />;
};

export const WithoutGoto = () => {
  const pagination = usePagination({
    defaultPagesCount: 100,
    defaultPage: 50,
  });
  return <Pagination {...pagination} displayGoto={false} />;
};
