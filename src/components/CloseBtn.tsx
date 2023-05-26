import { useContext } from "react";
import {
  AceCoinPayContext,
  AceCoinPayContextType,
} from "../context/aceCoinPay.context";

const CloseBtn = () => {
  const { setShowForm } = useContext(
    AceCoinPayContext
  ) as AceCoinPayContextType;

  return (
    <div
      className="absolute z-10 top-0 right-0 lg:p-3 p-2 lg:text-xl text-lg cursor-pointer bg-[#f3f5f6] hover:bg-[#edeff8]"
      onClick={() => setShowForm(false)}
    >
      <svg
        className="lg:h-6 lg:w-6 h-5 w-5 text-textDark"
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
      </svg>
    </div>
  );
};

export default CloseBtn;
