const Loading = () => {
  return (
    <div className="mx-auto grid w-auto max-w-5xl grid-cols-2 gap-x-8 gap-y-20 ">
      {Array(10)
        .fill(0)
        .map((index) => {
          return (
            <div
              key={index}
              className="relative max-w-5xl  animate-pulse  rounded  "
            >
              <div className="mb-4 flex h-48 items-center justify-center  rounded bg-gray-300 ">
                <svg
                  className="h-[330px] w-10 text-gray-200 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-48 rounded-full bg-gray-200 "></div>
                <div className="flex flex-col">
                  <span className="h-5 w-80 rounded-full bg-gray-200 "></span>
                  <div className="mt-[6px] h-2.5 w-80 rounded-full  bg-gray-200"></div>
                </div>
              </div>
              <div className="absolute right-0 mt-8 h-[50px] w-[50px] rounded-full bg-gray-200"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Loading;
