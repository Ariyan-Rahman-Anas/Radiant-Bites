// import { Link } from "react-router-dom";

// const PrimaryButton = ({ value, link }) => {
//     return <Link to={link}>
//         {value}
//     </Link>;
// };
// export default PrimaryButton;

import { Link } from "react-router-dom";

const PrimaryButton = ({ value, link, onClickFunc }) => {
  return (
    <Link
      to={link} onClick={onClickFunc}
      className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-primary border-[.09rem] border-transparent hover:border-primary hover:text-primary hover:bg-white duration-500">
      {value}
    </Link>
  );
};
export default PrimaryButton;