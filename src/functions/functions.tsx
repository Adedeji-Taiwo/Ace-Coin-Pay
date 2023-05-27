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
  const formattedInput = value.replace(/[^0-9]/g, "").slice(0, 37); // Remove non-numeric characters and allow up to 37 character.
  const segments = [];

  for (let i = 0; i < formattedInput.length; i += 4) {
    segments.push(formattedInput.substring(i, i + 4));
  }

  return segments.join("   -   "); //there are 3 whitespace at the rears of the hyphen when added to it makes 7 which is 7x3 = 21 + 16 digits = 37
};

//Needed to be displayed as dummy for card holder
export const randomNames = [
  "Joy Davidson",
  "John Smith",
  "Emma Johnson",
  "Michael Brown",
  "Sophia Davis",
  "Jonathan Micheal",
];
export const randomName =
  randomNames[Math.floor(Math.random() * randomNames.length)]; //return one name from array randomly


 // Allow only digits and limit to number of characters specified
export const characterNumberSpecifier = (value: string, allowableDigits: number) => {
    return value.replace(/[^0-9]/g, "").slice(0, allowableDigits);   
}