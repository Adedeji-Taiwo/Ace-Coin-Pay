import { useContext } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import {
  AceCoinPayContext,
  AceCoinPayContextType,
} from "../context/aceCoinPay.context";

const CountdownTimer = () => {
  const { showForm, setShowForm } = useContext(
    AceCoinPayContext
  ) as AceCoinPayContextType;

  // Renderer callback with condition
  const renderer: CountdownRendererFn = ({
    minutes,
    seconds,
    completed,
  }) => {
    if (!showForm) {
      return null; // Stop rendering the countdown if showForm is false
    }

    if (completed) {
      setShowForm(false);
      return null; // Return null when the countdown is completed
    } else {
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      const totalSeconds = minutes * 60 + seconds;
      const isTwentySecondsRemaining = totalSeconds <= 20;

      return (
        <div className="flex items-center justify-end w-full">
          {formattedMinutes.split("").map((digit, index) => (
            <span
              key={index}
              className={`${
                isTwentySecondsRemaining
                  ? "text-red-400"
                  : "text-white"
              } bg-secondary lg:text-xl md:text-base text-sm lg:h-10 lg:w-7 h-8 w-6 font-medium inline-flex items-center justify-center rounded ml-1`}
            >
              {digit}
            </span>
          ))}
          <span className="ml-1 font-bold lg:text-xl text-secondary">
            :
          </span>
          {formattedSeconds.split("").map((digit, index) => (
            <span
              key={index}
              className={`${
                isTwentySecondsRemaining
                  ? "text-red-400"
                  : "text-white"
              } bg-secondary lg:text-xl md:text-base text-sm lg:h-10 lg:w-7 h-8 w-6 font-medium inline-flex items-center justify-center rounded ml-1`}
            >
              {digit}
            </span>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      {showForm && (
        <Countdown
          date={Date.now() + 120000}
          renderer={renderer}
          onComplete={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default CountdownTimer;
