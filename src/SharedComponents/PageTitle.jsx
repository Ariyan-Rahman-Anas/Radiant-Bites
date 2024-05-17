const PageTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-white text-center">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <p className="text-xl">{subHeading}</p>
    </div>
  );
};
export default PageTitle;