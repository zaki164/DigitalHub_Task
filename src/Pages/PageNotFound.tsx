import Lottie from "lottie-react";
import NotFound from "./404.json";

const PageNotFound = () => {
  return (
    <section className={`loader_cont`}>
      <div className="max-w-[450px]">
        <Lottie animationData={NotFound} loop={true} />
      </div>
    </section>
  );
};

export default PageNotFound;
