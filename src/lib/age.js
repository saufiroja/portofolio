export const getAge = () => {
  const date = Date.now() - new Date('2001, 05, 02').getTime();
  const age = new Date(date);
  return Math.abs(age.getUTCFullYear() - 1970);
};
