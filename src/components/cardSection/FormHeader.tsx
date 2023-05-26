import ace from "./../../assets/ace.png";
import { Countdown } from "../index";

const FormHeader = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start w-full lg:gap-4 gap-3">
        <span className="flex items-center justify-center lg:w-12 lg:h-12 w-9 h-9 bg-primary rounded-full">
          <img
            src={ace}
            alt="ace-logo"
            className="w-full h-auto lg:max-w-[25px] max-w-[20px] -rotate-12"
          />
        </span>
        <h1 className="lg:text-2xl text-xl font-bold text-textDark">
          AceCoin<span className="font-normal">Pay</span>
        </h1>
      </div>
      <Countdown />
    </header>
  );
};

export default FormHeader;
