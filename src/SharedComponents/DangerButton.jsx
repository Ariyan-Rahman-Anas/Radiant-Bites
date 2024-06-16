import { Link } from "react-router-dom";

const DangerButton = ({ value, link, onClickFunc }) => {
  return (
    <Link
      to={link}
      onClick={onClickFunc}
      className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-danger border-[.09rem] border-transparent hover:border-danger hover:text-danger hover:bg-white duration-500  "
    >
      {value}
    </Link>
  );
};
export default DangerButton;
