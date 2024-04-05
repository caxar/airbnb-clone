import React from "react";

const Search = () => {
  return (
    <div
      className="search-block flex items-center border 
     border-gray-300 rounded-full py-2 px-5 gap-3 
     shadow-sm shadow-gray-200 hover:shadow-md cursor-pointer transition ease-in-out"
    >
      <div className="search-block__item flex gap-2">
        <div className="font-semibold">Искать везде</div>
        <div className="border border-l border-gray-300"></div>
      </div>
      <div className="search-block__item flex gap-2">
        <div className="font-semibold">Неделя</div>
        <div className="border border-l border-gray-300"></div>
      </div>
      <div className="text-gray-500">Кто едет?</div>
      <button className="bg-primary text-white p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
