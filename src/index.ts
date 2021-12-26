interface MeanParam {
  value: number;
  multiplier: number;
}
//Reference: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance
const getMeanValue = (lastMean: MeanParam, newValue: MeanParam): MeanParam => {
  const totalVariables = lastMean.multiplier + newValue.multiplier;
  return {
    value:
      lastMean.value +
      (newValue.value - lastMean.value) *
        (newValue.multiplier / totalVariables),
    multiplier: totalVariables
  };
};

const mean: MeanParam = {
  value: 18,
  multiplier: 1
};

const newValue: MeanParam = {
  value: 2,
  multiplier: 5
};

const result = getMeanValue(mean, newValue);
console.info("Mean Result");
console.info(`Mean: ${result.value} | Total: ${result.multiplier}`);
