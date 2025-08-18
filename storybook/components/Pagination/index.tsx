import React, { Fragment, useEffect, useState } from "react";
import { Button } from ":/components/Button";
import { Input } from ":/components/Forms/Input";
import { useCunningham } from ":/components/Provider";

export interface PaginationProps {
  /** Current page */
  page: number;
  /** Called when page need to change */
  onPageChange: (page: number) => void;
  /** Total number of pages */
  pagesCount?: number;
  /** Total number of items per page */
  // eslint-disable-next-line react/no-unused-prop-types
  pageSize: number;
  /** Display the goto input */
  displayGoto?: boolean;
}

export const usePagination = ({
  defaultPage = 1,
  defaultPagesCount,
  pageSize = 10,
}: {
  /** Default current page */
  defaultPage?: number;
  /** Default total number of pages */
  defaultPagesCount?: number;
  /** Total number of items per page */
  pageSize?: number;
}) => {
  const [page, setPage] = useState(defaultPage);
  const [pagesCount, setPagesCount] = useState(defaultPagesCount);
  return {
    page,
    setPage,
    onPageChange: setPage,
    pagesCount,
    setPagesCount,
    pageSize,
  };
};

export const Pagination = ({
  page,
  onPageChange,
  pagesCount = 0,
  displayGoto = true,
}: PaginationProps) => {
  const { t } = useCunningham();
  const [gotoValue, setGotoValue] = useState("");

  useEffect(() => {
    setGotoValue(page + "");
  }, [page]);

  if (pagesCount <= 1) {
    return null;
  }

  // Create the default list of all the page numbers we intend to show
  const pageList = [
    1,
    // If there is just one page between first page and currentPage - 2,
    // we can display this page number instead of "..."
    page - 2 === 3 ? page - 3 : -1,
    page - 2,
    page - 1,
    page,
    page + 1,
    page + 2,
    // If there is just one page between maxPage and currentPage + 2,
    // we can display this page number instead of "..."
    page + 3 === pagesCount - 1 ? page + 3 : -1,
    pagesCount,
  ]
    // Filter out page numbers below 1 (when currentPage is 1 or 2)
    .filter((_page) => _page > 0)
    // Filter out page numbers above the max (they do not have anything to display)
    .filter((_page) => _page <= pagesCount)
    // Drop duplicates (this is trivial as our pageList is sorted)
    .filter((_page, index, list) => _page !== list[index - 1]);

  const onPreviousClick = () => {
    onPageChange(Math.max(page - 1, 0));
  };
  const onNextClick = () => {
    onPageChange(Math.min(page + 1, pagesCount));
  };

  const gotoPage = () => {
    let value = +gotoValue;
    if (value < 0 || !value) {
      value = 1;
    }
    if (value > pagesCount) {
      value = pagesCount;
    }
    onPageChange(value);
  };

  const canPrevious = page > 1;
  const canNext = page < pagesCount;

  return (
    <div className="c__pagination">
      <div className="c__pagination__list">
        <Button
          color="tertiary-text"
          aria-label={t("components.pagination.previous_aria")}
          onClick={onPreviousClick}
          disabled={!canPrevious}
          icon={<span className="material-icons">navigate_before</span>}
          size="small"
        />
        {pageList.map((_page, index) => (
          <Fragment key={_page}>
            {/* Prepend a cell with "..." when the page number we're rendering does not follow the previous one */}
            {_page > (pageList[index - 1] || 0) + 1 && <span>...</span>}
            {_page === page ? (
              <Button
                color="tertiary-text"
                active={true}
                aria-label={t("components.pagination.current_page_aria", {
                  page: _page,
                })}
                size="small"
              >
                {_page}
              </Button>
            ) : (
              <Button
                color="tertiary-text"
                aria-label={t("components.pagination.goto_page_aria", {
                  page: _page,
                })}
                onClick={() => onPageChange(_page)}
                size="small"
              >
                {_page}
              </Button>
            )}
          </Fragment>
        ))}
        <Button
          color="tertiary-text"
          aria-label={t("components.pagination.next_aria")}
          onClick={onNextClick}
          disabled={!canNext}
          icon={<span className="material-icons">navigate_next</span>}
          size="small"
        />
      </div>
      {displayGoto && (
        <div className="c__pagination__goto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              gotoPage();
            }}
          >
            <Input
              type="number"
              label={t("components.pagination.goto_label")}
              aria-label={t("components.pagination.goto_label_aria")}
              size={2}
              value={gotoValue}
              onChange={(e) => setGotoValue(e.target.value)}
              min={1}
              max={pagesCount}
              onBlur={() => gotoPage()}
              onFocus={(e) => e.target.select()}
            />
          </form>
        </div>
      )}
    </div>
  );
};
