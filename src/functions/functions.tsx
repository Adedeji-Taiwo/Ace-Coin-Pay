import { mastercard, verve, visa } from "../assets";

//return card image based on card stating input
export const getCardType = (number: string): string => {
  const firstDigit = parseInt(number.charAt(0));

  if ([1, 8, 9].includes(firstDigit)) {
    return verve;
  } else if ([2, 3, 4].includes(firstDigit)) {
    return visa;
  } else {
    return mastercard;
  }
};

//Needed to add "-" after 4 numbers
export const cardNumberFormatter = (value: string) => {
  const formattedInput = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  const segments = [];

  for (let i = 0; i < formattedInput.length; i += 4) {
    segments.push(formattedInput.substring(i, i + 4));
  }

  return segments.join("-");
};

//Needed to be displayed as dummy for card holder
const randomNames = [
  "Joy Davidson",
  "John Smith",
  "Emma Johnson",
  "Michael Brown",
  "Sophia Davis",
  "Jonathan Micheal",
];
export const randomName =
  randomNames[Math.floor(Math.random() * randomNames.length)]; //return one name from array randomly
