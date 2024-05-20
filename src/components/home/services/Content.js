import ServiceItems from "./ServiceItems";

const Content = ({
  serviceItems,
  content,
  currentCategoryIndex,
  handleCategoryIndex
}) => {
  return (
    <div data-aos="fade-up" className="lg:w-[34.375vw]">
      <h2
        className="text60 f700"
        dangerouslySetInnerHTML={{ __html: content?.title }}
      ></h2>
      <ServiceItems
        serviceItems={serviceItems}
        currentCategoryIndex={currentCategoryIndex}
        handleCategoryIndex={handleCategoryIndex}
      />
    </div>
  );
};

export default Content;
