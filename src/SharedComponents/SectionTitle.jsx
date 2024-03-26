const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <div className="border-b-[.05rem] border-primary w-fit mx-auto mb-2 ">
        <h1 className="text-primary">{heading}</h1>
      </div>
      <div className="border-b-[.09rem] w-fit mx-auto px-5 ">
        <h2 className="text-3xl">{subHeading}</h2>
      </div>
    </div>
  );
};
export default SectionTitle;
