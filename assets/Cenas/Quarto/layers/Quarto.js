export default function (cama, tv) {
  return {
    cenario: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0],
      [0, 24, -1, -1, -1, 25, 25, 25, 25, 25, 25, 0, 0],
      [0, 24, 50, 51, 52, 25, 25, 25, 25, 25, 25, 24, 0],
      [0, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 24, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 36, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14],
      [24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 26],
      [24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 26],
      [24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 26],
    ],
    moveis: [
      [],
      [],
      [-1, -1, 9, 10, 11, -1, -1, 34, 35],
      [-1, -1, 21, 22, 23, -1, -1, 46, 47],
      [-1, -1, -1, -1, -1, -1, -1, 58, 59],
      [-1, -1, -1, -1, -1, -1, 49, 50, -1, -1],
      [-1, -1, -1, -1, -1, 60, 61, 62, 63, -1, 3, 4],
      [-1, cama["1x1"], cama["1x2"], cama["1x3"], -1, 72, 73, 74, 75, -1, 15, 16],
      [-1, cama["2x1"], cama["2x2"], cama["2x3"], -1, -1, 85, 86, -1, -1, 27, 28],
      [-1, cama["3x1"], cama["3x2"], cama["3x3"], -1, -1, -1, -1, -1, -1, 39, 40],
      [-1, cama["4x1"], cama["4x2"], cama["4x3"], -1, -1, -1, -1, -1, -1, 52, 53],
      [-1, cama["5x1"], cama["5x2"], cama["5x3"], -1, -1, -1, -1, -1, -1, 64, 65],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 76, 77],
    ],
    extras: [
      [],
      [],
      [],
      [],
      [],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, tv["1x1"], tv["1x2"]],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, tv["2x1"], tv["2x2"]],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, tv["3x1"], tv["3x2"]],
    ]
  }
}