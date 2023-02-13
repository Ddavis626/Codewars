const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let canTravel = fuelLeft * mpg
  return canTravel >= distanceToPump
};
