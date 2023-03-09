function findDifference(a, b) {
  let aCubed = a.reduce((acc, c) => acc * c, 1)
  let bCubed = b.reduce((acc, c) => acc * c, 1)
  return aCubed > bCubed ? aCubed - bCubed : bCubed - aCubed
}
