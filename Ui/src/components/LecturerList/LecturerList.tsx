import React, { FC, useMemo } from "react";
import { ILecturer } from "../../domain/Interfaces";

import "./LecturerList.scss";

interface IListFilter {
  data: ILecturer[];
  children: (item: any) => React.ReactNode;
  filterOptions: { id: string; name: string }[];
}

const LecturerList: FC<IListFilter> = ({
  data,
  children,
  filterOptions = [],
}) => {
  const [filter, setfilter] = React.useState<string>("");

  const filteredData = useMemo(() => {
    if (filter) {
      return data.filter((item) => item.languages.includes(parseInt(filter)));
    }
    return data;
  }, [data, filter]);

  return (
    <div className="lecturer-list-container">
      <div className="lecturer-form-wrapper bg-gray-200">
        <div className="lecturer-form p-5">
          <span className="font-semibold mr-2 text-sm md:text-base">
            Select Language{" "}
          </span>
          <div className="xl:w-1/3 max-w-[200px]">
            <select
              value={filter}
              onChange={(e) => setfilter(e.currentTarget.value)}
              className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Languages"
            >
              <option value="">All</option>
              {filterOptions.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-2 p-5 grid-flow-row grid-col-auto justify-items-center justify-items-stretch sm:justify-items-strech justify-around">
        {filteredData.length ? (
          filteredData.map((item) => children(item))
        ) : (
          <span className="full-grid-item">No Items Found</span>
        )}
      </div>
    </div>
  );
};

export default LecturerList;
