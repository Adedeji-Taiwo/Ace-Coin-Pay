import { useContext } from "react";
import { CloseBtn, CardSection, DetailsSection } from "../components";
import {
  AceCoinPayContext,
  AceCoinPayContextType,
} from "../context/aceCoinPay.context";

const AceCoinForm = () => {
  const { showForm } = useContext(
    AceCoinPayContext
  ) as AceCoinPayContextType;

  return (
    <div
      className={`grid lg:grid-cols-6 grid-cols-1 lg:gap-12 gap-y-20 relative lg:w-4/5 md:w-[90%] w-[95%] lg:my-16 my-10 mx-auto font-poppins bg-white shadow-xl lg:px-12 lg:pt-20 px-3 pt-16 transform transition-all ease-in-out duration-700  ${
        showForm ? "scale-[1]" : "scale-0"
      }`}
    >
      <CloseBtn />
      <CardSection />
      <DetailsSection />
    </div>
  );
};

export default AceCoinForm;
