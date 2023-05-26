import {
  createContext,
  useState,
  useEffect,
  useMemo,
  ChangeEvent,
  FormEvent,
  useCallback,
} from "react";
import { CreditCardFormData } from "../constants/types";
import { toast } from "react-hot-toast";
import {
  cardNumberFormatter,
  randomName,
} from "../functions/functions";

export interface AceCoinPayContextType {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  countdownKey: number;
  setCountdownKey: React.Dispatch<React.SetStateAction<number>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  lastEightDigits: string;
  setLastEightDigits: React.Dispatch<React.SetStateAction<string>>;
  formData: CreditCardFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<CreditCardFormData>
  >;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
  maxLength: number;
}

export const AceCoinPayContext =
  createContext<AceCoinPayContextType | null>(null);

const initialState = {
  cardNumber: "",
  password: "",
  cvv: "",
  month: "",
  year: "",
};

const AceCoinPayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [username, setUsername] = useState<string>(
    "jonathan micheal"
  );
  const [edit, setEdit] = useState<boolean>(false); //enable input interaction
  const [countdownKey, setCountdownKey] = useState<number>(0);
  const maxLength = 19; // Maximum length of the formatted card number (with dashes)
  const [formData, setFormData] =
    useState<CreditCardFormData>(initialState);
  const [lastEightDigits, setLastEightDigits] = useState<string>("");

  // Update the key to restart the countdown
  useEffect(() => {
    if (!showForm) {
      setCountdownKey((prevKey) => prevKey + 1);
    }
  }, [showForm]);

  //handle change in input event
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      if (name === "cardNumber") {
        const formattedCardNumber = cardNumberFormatter(value);

        const extractedLastEightDigits = formattedCardNumber
          .slice(-9)
          .replace(/-/g, "");
        setLastEightDigits(extractedLastEightDigits); // needed for display on card UI

        //needed to setUsername on card number completion
        if (formattedCardNumber.length <= maxLength) {
          setUsername(randomName);
        }
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: formattedCardNumber,
        }));
      } else if (name === "cvv") {
        const formattedCvv = value.replace(/[^0-9]/g, "").slice(0, 3); // Allow only digits and limit to 3 characters
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: formattedCvv,
        }));
      } else if (name === "password") {
        const formattedPassword = value
          .replace(/[^0-9]/g, "")
          .slice(0, 6); // Allow only digits and limit to 6 characters
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: formattedPassword,
        }));
      } else if (name === "month" || name === "year") {
        const formattedValue = value
          .replace(/[^0-9]/g, "")
          .slice(0, 2); // Allow only digits and limit to 2 characters
        const numericValue = parseInt(formattedValue, 10); //to convert months to number for easy comparison

        if (
          name === "month" &&
          (numericValue < 0 || numericValue > 12)
        ) {
          toast.error(
            <span className="text-textDark xl:text-base lg:text-sm text-xs">
              Invalid month!
            </span>,
            { duration: 2000 }
          );
          return;
        }

        if (
          name === "year" &&
          (formattedValue < "00" || formattedValue > "99")
        ) {
          toast.error(
            <span className="text-textDark xl:text-base lg:text-sm text-xs">
              Invalid year!
            </span>,
            { duration: 2000 }
          );
          return;
        }

        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: formattedValue,
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    },
    []
  );

  //submit function for form data
  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      // Check if any input is empty
      const isFormEmpty = Object.values(formData).some(
        (value) => value.trim() === ""
      );

      if (isFormEmpty) {
        // Display an error toast
        toast.error(
          <span className="text-textDark xl:text-base lg:text-sm text-xs">
            Please fill in all fields!
          </span>,
          { duration: 4000 }
        );
        return;
      }

      //show submitted data
      console.log(formData);

      // Reset the form data to initial values
      setFormData(initialState);
      setLastEightDigits("");

      //notify successful completion
      toast.success(
        <span className="text-blackish xl:text-base lg:text-sm text-xs">
          Card Added Successfully!
        </span>,
        { duration: 4000 }
      );

      //dismiss toast and close form
      setTimeout(() => {
        toast.dismiss()
        setShowForm(false);
      }, 4000);
    },
    [formData]
  );

  const values = useMemo(
    () => ({
      showForm,
      setShowForm,
      edit,
      setEdit,
      countdownKey,
      setCountdownKey,
      formData,
      setFormData,
      handleSubmit,
      handleInputChange,
      maxLength,
      username,
      setUsername,
      lastEightDigits,
      setLastEightDigits,
    }),
    [
      showForm,
      setShowForm,
      edit,
      setEdit,
      countdownKey,
      setCountdownKey,
      formData,
      setFormData,
      handleSubmit,
      handleInputChange,
      maxLength,
      username,
      setUsername,
      lastEightDigits,
      setLastEightDigits,
    ]
  );

  return (
    <AceCoinPayContext.Provider value={values}>
      {children}
    </AceCoinPayContext.Provider>
  );
};

export default AceCoinPayProvider;
