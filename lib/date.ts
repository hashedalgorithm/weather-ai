export const formatDateXXXMMMDDYYYY = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export const formatTimeHHMM = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleTimeString("en-GB", options).replace(":", ".");
};
