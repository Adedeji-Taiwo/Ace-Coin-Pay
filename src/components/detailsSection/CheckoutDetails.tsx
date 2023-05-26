import { slip, apple } from "../../assets";

const CheckoutDetails = () => {
  return (
    <div className="font-poppins flex flex-col gap-8 relative -top-[220px] w-full bg-[#edeff8] divide-y-[1px] divide-dashed divide-textDark rounded-3xl lg:px-8 lg:py-10 px-5 py-8">
      <div className="flex flex-col items-start justify-start gap-3 mt-52">
        <div className="flex items-center justify-between w-full capitalize font-normal lg:text-base text-sm text-textDark">
          <span className="opacity-90">company</span>
          <span className="flex items-center justify-start gap-2">
            <img
              src={apple}
              alt="product-logo"
              className="w-full h-auto max-w-[20px]"
            />
            <span className="font-medium">apple</span>
          </span>
        </div>
        <div className="flex items-center justify-between w-full capitalize font-normal lg:text-base text-sm text-textDark">
          <span className="opacity-90">order number</span>
          <span className="value">
            <span className="font-medium">1266201</span>
          </span>
        </div>
        <div className="flex items-center justify-between w-full capitalize font-normal lg:text-base text-sm text-textDark">
          <span className="opacity-90">product</span>
          <span className="value">
            <span className="font-medium">macbook air</span>
          </span>
        </div>
        <div className="flex items-center justify-between w-full capitalize font-normal lg:text-base text-sm text-textDark">
          <span className="opacity-90">VAT (20%)</span>
          <span className="value">
            <span className="font-medium">$100.00</span>
          </span>
        </div>
      </div>

      <div className="relative flex items-center justify-between w-full capitalize font-normal lg:text-base text-sm text-textDark pt-6">
        <span className="absolute lg:-left-11 -left-8 -top-3 w-10 h-5 rotate-90 rounded-t-full bg-white"></span>
        <span className="absolute lg:-right-11 -right-8 -top-3 w-10 h-5 -rotate-90 rounded-t-full bg-white"></span>

        <div className="flex flex-col items-start gap-1">
          <span className="opacity-90">You have to Pay</span>
          <div className="flex items-end gap-2">
            <h1 className="font-bold lg:text-xl text-lg">
              549<sub>.99</sub>
            </h1>
            <span className="opacity-90">USD</span>
          </div>
        </div>
        <img
          src={slip}
          alt="payslip"
          className="w-full h-auto max-w-[20px]"
        />
      </div>
    </div>
  );
};

export default CheckoutDetails;
