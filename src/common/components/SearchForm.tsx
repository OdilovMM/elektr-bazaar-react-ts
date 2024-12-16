import React from 'react';

interface SearchFormProps {
  placeholder?: string;
  buttonText?: string;
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  placeholder = 'Search...',
  buttonText = 'Search',
  onSearch,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full h-full  ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="search"
          id="default-search"
          className="block ml-0 w-full cursor-pointer p-2.5 pl-5 pr-[95px] text-black  border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-[#e3e4e6] dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2 bottom-[4.8px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
