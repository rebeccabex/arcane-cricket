export const chooseFromArray = <T>(array: Array<T>) =>
  array[Math.floor(Math.random() * array.length)];

export const chooseFromArrayWithWeighting = <T>(
  array: readonly T[],
  weightings: Array<number>,
): T => {
  const randomNumber = Math.floor(
    Math.random() *
      weightings.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ),
  );

  let sum = weightings[0];
  let counter = 0;
  while (sum < randomNumber) {
    counter++;
    sum += weightings[counter];
  }
  return array[counter];
};

export const randomiseArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
