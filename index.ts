type ConvertType =
  | "lowercase"
  | "uppercase"
  | "capitalized"
  | "sentence"
  | string;

export function textParser(target: string, method: ConvertType): string {
  if (target === "") return target;
  let result: string = "";

  switch (method) {
    case "lowercase":
      result = toLowerCase(target);
      break;
    case "uppercase":
      result = toLowerCase(target);
      break;
    case "capitalized":
      result = toCapitalizedCase(target);
      break;
    case "sentence":
      result = toSentenceCase(target);
      break;
    default:
      break;
  }

  return result;
}

const isPunctuation = (char: string) => {
  const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/;
  return punctuationRegex.test(char);
};

const toLowerCase = (target: string): string => target.toLowerCase();

const toUpperCase = (target: string): string => target.toUpperCase();

const toCapitalizedCase = (target: string): string => {
  let result: string = "";
  const stringArray = [...target];

  stringArray.reduce((previousValue, currentValue) => {
    if (
      previousValue === "" ||
      previousValue === " " ||
      isPunctuation(previousValue)
    )
      currentValue = toUpperCase(currentValue);

    result = result.concat(currentValue);
    return currentValue;
  }, "");

  return result;
};

const toSentenceCase = (target: string): string => {
  return target.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, (i) => toUpperCase(i));
};
