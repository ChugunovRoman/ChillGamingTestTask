export function formatDate(timestamp: number, format: string): string {
  const date = new Date(timestamp);
  let formatedDate = format;

  formatedDate = formatedDate.replace(/\bdd\b/g, `${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`);
  formatedDate = formatedDate.replace(
    /\bmm\b/g,
    `${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}`,
  );
  formatedDate = formatedDate.replace(/\byy\b/g, `${date.getFullYear()}`.substring(0, 2));
  formatedDate = formatedDate.replace(/\byyyy\b/g, `${date.getFullYear()}`);
  formatedDate = formatedDate.replace(/\bHH\b/g, `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}`);
  formatedDate = formatedDate.replace(
    /\bMM\b/g,
    `${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`,
  );
  formatedDate = formatedDate.replace(
    /\bSS\b/g,
    `${date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`}`,
  );

  return formatedDate;
}
