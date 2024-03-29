import SectionTitle from "./SectionTitle";

const PageHeadBanner = ({ sectionImg, heading, subHeading }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${sectionImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center h-[80vh] "
    >
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
    </div>
  );
};
export default PageHeadBanner;
