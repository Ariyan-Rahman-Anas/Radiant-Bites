const PageTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-white text-center">
      <h1 className="text-3xl">{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};
export default PageTitle;