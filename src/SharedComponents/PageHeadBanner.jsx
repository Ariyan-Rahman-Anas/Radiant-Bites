import PageTitle from "./PageTitle";

const PageHeadBanner = ({ sectionImg, heading, subHeading }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${sectionImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center h-[80vh] "
    >
      <PageTitle heading={heading} subHeading={subHeading} ></PageTitle>
    </div>
  );
};
export default PageHeadBanner;
