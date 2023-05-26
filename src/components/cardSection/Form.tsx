import { Button, FormInput } from "../index";
import { editPencil, verified, dots } from "../../assets";
import {
  AceCoinPayContext,
  AceCoinPayContextType,
} from "../../context/aceCoinPay.context";
import { useContext } from "react";
import { getCardType } from "../../functions/functions";

const Form = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    edit,
    setEdit,
    maxLength,
  } = useContext(AceCoinPayContext) as AceCoinPayContextType;

  return (
    <form
      className="grid place-items-start grid-cols-1 lg:gap-y-8 lg:gap-x-8 gap-x-6 gap-y-6 w-full"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 items-center justify-start lg:gap-y-8 lg:gap-x-8 gap-x-6 gap-y-6 w-full">
        <label className="flex flex-col items-center justify-start w-full lg:gap-7 gap-5">
          <div className="flex items-center justify-between w-full">
            <p className="flex flex-col items-start justify-start gap-1">
              <span className="font-poppins text-textDark font-semibold lg:text-lg text-base">
                Card Number
              </span>
              <span className="font-poppins text-textDark font-normal lg:text-sm text-xs opacity-90">
                Enter last 16-digit card number on the card
              </span>
            </p>

            <div
              className="flex items-center justify-start gap-2 cursor-pointer"
              onClick={() => setEdit((prev) => !prev)}
            >
              <img
                src={editPencil}
                alt="edit-pencil"
                className="w-full h-auto max-w-[15px]"
              />
              <span className="font-poppins text-primary font-medium lg:text-base text-sm">
                Edit
              </span>
            </div>
          </div>

          <div className="col-span-2 w-full relative flex items-center justify-start">
            <div className="absolute inset-y-0 left-0 flex items-center lg:pl-5 pl-4 pointer-events-none">
              <img
                src={getCardType(formData.cardNumber)}
                alt="card-type"
                className="w-full h-auto max-w-[30px]"
              />
            </div>
            <FormInput
              type="text"
              inputMode="numeric"
              inputType="cardNumber"
              placeholder="5523   -   8545   -   3905   -   2617"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className={`${
                formData.cardNumber.length === maxLength &&
                !edit &&
                "bg-[#f9fafb]"
              } lg:px-16 px-14`}
              disabled={
                formData.cardNumber.length === maxLength && !edit
              }
            />
            <div
              className={`${
                formData.cardNumber.length === maxLength
                  ? "visible"
                  : "invisible"
              } absolute inset-y-0 right-0 flex items-center lg:pr-5 pr-4 pointer-events-none`}
            >
              <img
                src={verified}
                alt="verified-badge"
                className="w-full h-auto lg:max-w-[20px] max-w-[18px]"
              />
            </div>
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 items-center justify-start lg:gap-y-8 lg:gap-x-8 gap-x-6 gap-y-6 w-full">
        <label className="grid md:grid-cols-2 grid-cols-1 items-center justify-start w-full lg:gap-7 gap-5">
          <p className="flex flex-col items-start justify-start gap-1">
            <span className="font-poppins text-textDark font-semibold lg:text-lg text-base">
              CVV Number
            </span>
            <span className="font-poppins text-textDark font-normal lg:text-sm text-xs opacity-90">
              Enter the 3 or 4 digit number on the card
            </span>
          </p>
          <div className="col-span-1 w-full relative flex items-center justify-start">
            <div className="absolute inset-y-0 right-0 flex items-center lg:pr-5 pr-4 pointer-events-none">
              <img
                src={dots}
                alt="3x3-grid-icon"
                className="w-full h-auto lg:max-w-[23px] max-w-[20px]"
              />
            </div>
            <FormInput
              type="text"
              inputMode="numeric"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="423"
              className="text-center"
            />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 items-center justify-start lg:gap-y-8 lg:gap-x-8 gap-x-6 gap-y-6 w-full">
        <label className="grid md:grid-cols-2 grid-cols-1 items-center justify-start w-full lg:gap-7 gap-5">
          <p className="flex flex-col items-start justify-start gap-1">
            <span className="font-poppins text-textDark font-semibold lg:text-lg text-base">
              Expiry Date
            </span>
            <span className="font-poppins text-textDark font-normal lg:text-sm text-xs opacity-90">
              Enter the expiration date of the card
            </span>
          </p>
          <div className="flex items-center justify-between gap-5">
            <FormInput
              type="text"
              inputMode="numeric"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              placeholder="03"
              className="col-span-1 text-center"
            />
            <span className="font-bold lg:text-base text-secondary">
              /
            </span>
            <FormInput
              type="text"
              inputMode="numeric"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="25"
              className="col-span-1 text-center"
            />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 items-center justify-start lg:gap-y-8 lg:gap-x-8 gap-x-6 gap-y-6 w-full">
        <label className="grid md:grid-cols-2 grid-cols-1 items-center justify-start w-full lg:gap-7 gap-5">
          <p className="flex flex-col items-start justify-start gap-1">
            <span className="font-poppins text-textDark font-semibold lg:text-lg text-base">
              Password
            </span>
            <span className="font-poppins text-textDark font-normal lg:text-sm text-xs opacity-90">
              Enter your dynamic password
            </span>
          </p>
          <div className="col-span-1 w-full relative flex items-center justify-start">
            <div className="absolute inset-y-0 right-0 flex items-center lg:pr-5 pr-4 pointer-events-none">
              <img
                src={dots}
                alt="3x3-grid-icon"
                className="w-full h-auto lg:max-w-[23px] max-w-[20px]"
              />
            </div>
            <FormInput
              type="password"
              inputMode="numeric"
              inputType="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder=""
              className="col-span-1"
            />
          </div>
        </label>
      </div>

      <div className="flex items-center justify-start mt-3 w-full">
        <Button
          type="submit"
          className="bg-primary border-transparent w-full"
        >
          <span className="font-poppins font-semibold lg:text-lg text-base text-white">
            Pay Now
          </span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
