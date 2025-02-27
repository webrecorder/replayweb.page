export const dateTimeFormatter = new Intl.DateTimeFormat(
  [...navigator.languages],
  {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
);

export const dateFormatter = new Intl.DateTimeFormat([...navigator.languages], {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

export const timeFormatter = new Intl.DateTimeFormat([...navigator.languages], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
