export const displayNumber = (num: number): string => {
  return num.toLocaleString();
};

export const displayAsDate = (num: number): string => {
  const day: Date = new Date(num * 1000);
  const prefix: string =
    day.getTime() < new Date().getTime() ? 'since' : 'until';
  return `${prefix} ${day.toLocaleDateString()}`;
};

export const makeEnthusiasm = (num: number): string => {
  if (num < 10) {
    return '!'.repeat(num);
  }
  if (num < 1e6) {
    return `! ✖️ ${displayNumber(num)}`;
  }
  return ` (🥳-ing ${displayAsDate(num)})`;
};

export const display = (text: string, num: number): string => {
  return `${text}${makeEnthusiasm(num)}`;
};
