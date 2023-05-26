import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import {
  AceCoinPayContext,
  AceCoinPayContextType,
} from "./context/aceCoinPay.context";
import AceCoinForm from "./pages/AceCoinForm";
import { Button } from "./components";

const App = () => {
  const { showForm, setShowForm } = useContext(
    AceCoinPayContext
  ) as AceCoinPayContextType;

  return (
    <div className="flex items-center justify-center bg-[#94b6d2] bg-main-bg bg-no-repeat bg-left bg-cover w-full min-h-screen">
      <Toaster />
      {showForm ? (
        <AceCoinForm />
      ) : (
        <Button
          type="button"
          className="font-poppins bg-primary relative"
          onClick={() => setShowForm(true)}
        >
          <span className="text-white text-center  font-semibold lg:text-lg text-base">
            Use AceCoinPay
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </Button>
      )}
    </div>
  );
};

export default App;
