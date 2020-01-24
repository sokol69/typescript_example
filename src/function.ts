const getAverage = (a: number, b: number, c: number): number => {
  const avg: number = (a + b + c) / 3;

  return avg;
};

getAverage(1);
getAverage(1, 2);
getAverage(1, 2, 3);

