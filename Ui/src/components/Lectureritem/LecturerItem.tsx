import React, { FC } from "react";
import "./LecturerItem.scss";

interface LecturerItemProps {
  img: string;
  title: string;
  email: string;
  className?: string;
}

const LecturerItem: FC<LecturerItemProps> = ({
  img,
  title,
  email,
  className,
}) => {
  return (
    <>
      <div
        className={`${className} flex flex-col justify-center max-w-xs p-3 sm:p-6 shadow-md rounded-xl sm:px-12 bg-gray-600 text-gray-100 `}
      >
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          className="w-16 h-16 sm:w-32 sm:h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
            <p className="text-xs sm:text-base dark:text-gray-400 mr-auto">
              {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LecturerItem;
