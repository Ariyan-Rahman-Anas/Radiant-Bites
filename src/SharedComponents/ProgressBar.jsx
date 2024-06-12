
const ProgressBar = ({value}) => {
     const ProgressNumber = value;
    return (
      <div className="flex flex-col w-full mx-auto gap-2">
        <div className="mt-3">
          <div className="flex items-center justify-between ">
            <h1>0%</h1>
            <h1>{value}%</h1>
          </div>
          <div
            className={`flex h-1.5 w-full  items-center justify-center rounded-full bg-primary`}
          >
            <div
              style={{ width: `${ProgressNumber}%` }}
              className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-green-700 duration-500`}
            >
              {/* <span className="font-medium  text-center text-white">
                {ProgressNumber} %
              </span> */}
            </div>
          </div>
        </div>
      </div>
    );
};
export default ProgressBar;