import { useContext } from "react";
import {
  AceCoinPayContext,
  AceCoinPayContextType,
} from "../../context/aceCoinPay.context";
import { chip, wifi } from "../../assets";
import { getCardType } from "../../functions/functions";

const CreditCard = () => {
  const { formData, username, lastFourDigits } = useContext(
    AceCoinPayContext
  ) as AceCoinPayContextType;

  
  return (
    <div className="relative flex flex-col items-start lg:gap-24 gap-28 font-poppins bg-gradient shadow-custom overflow-hidden md:w-[230px] w-[70%] h-[300px] p-6 rounded-3xl z-20">
      <div className="relative flex items-center justify-between w-full">
        <img
          src={chip}
          alt="card-chip"
          className="w-full h-auto max-w-[30px]"
        />
        <img
          src={wifi}
          alt="card-wifi"
          className="w-full h-auto max-w-[20px]"
        />
      </div>
      <div className="flex flex-col items-start justify-start lg:gap-5 gap-3 text-textDark w-full">
        <div className="flex flex-col items-start justify-start lg:gap-2 gap-1">
          <span className="capitalize font-medium lg:text-base text-sm">
            {username}
          </span>
          <div className="flex items-center lg:gap-4 gap-3">
            {lastFourDigits.length ? (
              <>
                 <div className="flex items-center justify-start gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                </div>
                <span className="font-semibold lg:text-xl text-lg">
                  {lastFourDigits.length >= 31 && lastFourDigits[30]}
                  {lastFourDigits.length >= 32 && lastFourDigits[31]}
                  {lastFourDigits.length >= 33 && lastFourDigits[32]}
                  {lastFourDigits.length >= 34 && lastFourDigits[33]}
                </span>
              </>
            ) : (
              <>
                <div className="flex items-center justify-start gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                </div>
                <span className="font-semibold lg:text-xl text-lg">
                  3456
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="font-medium lg:text-base text-sm">
            {formData.month
              ? `${formData.month}/${formData.year}`
              : "09/22"}
          </span>
          <img
            src={getCardType(formData.cardNumber)}
            alt="card-type"
            className="w-full h-auto max-w-[40px]"
          />
        </div>
      </div>

      <div className="w-[700px] h-[700px] border border-gray-150 rounded-full flex items-center justify-center absolute top-14 left-[-6em] z-[-1]">
        <span className="inline-block w-[570px] h-[570px] border border-gray-150 rounded-full"></span>
      </div>
    </div>
  );
};

export default CreditCard;
