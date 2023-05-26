import { CreditCard, CheckoutDetails } from ".";

const DetailsSection = () => {
  return (
    <div className="col-span-2 relative w-full flex flex-col items-center justify-start">
      <span className="absolute lg:top-[1px] top-[1px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary lg:w-16 lg:h-5 w-12 h-3 z-10 blur-[0.7px]"></span>
      <CreditCard />
      <CheckoutDetails />
    </div>
  );
};

export default DetailsSection;
