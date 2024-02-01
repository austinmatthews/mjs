//returning values

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

const area = calcArea(5);

console.log(area);

const calcVol = function (area) {
  return area * 2;
};

console.log(calcVol(area));
