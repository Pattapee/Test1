let main = async () => {
  let compareNumber = async (num, max) => {
    return num > max ? num : max;
  };

  let fnfindnummax = async arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      let nummax = 0;
      for (let y = 0; y < arr[i].length; y++) {
        nummax = await compareNumber(arr[i][y], nummax);
      }
      result += nummax;
    }
    return result;
  };
  let arr = [
    [59],
    [73, 41],
    [52, 40, 9],
    [26, 53, 6, 34],
    [10, 51, 87, 86, 81],
    [61, 95, 66, 57, 25, 68],
    [90, 81, 80, 38, 92, 67, 73],
    [30, 28, 51, 76, 81, 18, 75, 44],
    [84, 14, 95, 87, 62, 81, 17, 78, 58],
    [21, 46, 71, 58, 2, 79, 62, 39, 31, 9]
  ];
  const result = await fnfindnummax(arr);
  console.log(result);
};
main();
