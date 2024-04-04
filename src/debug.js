const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random()* (max - min) + min);
};

const coolnessGauge = (numOfFridges) => {
  return numOfFridges <= 3 ? 'You need more fridges.' : 'You are downright chilly!';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {

  if(numOfFunkoPops <= 30 && numOfFunkoPops > 20) {
      console.log('You need help!');
  } else if (numOfFunkoPops <= 20 && numOfFunkoPops > 10){
      console.log('You have a problem.')
  } else if(numOfFunkoPops <= 10 && numOfFunkoPops >= 1){
      console.log('Only a few? Keep having fun!')
  } else if (numOfFunkoPops === 0){
    console.log('No pops? Maybe try one.')
  } else {
    console.log('You need an intervention!!!');
  }
};

funkoPopAddictionLevel(31)
const getWeatherReport = (temperature) => {
  let weatherReport = ''
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  } else if (temperature === 32){
    weatherReport = 'It\'s not too bad!'
    console.log(weatherReport)
  }
  console.log("And that's your report!");
  return weatherReport;
};

const returnPositiveNegativeZero = (num) => {
  if (num === 0){
    return 'Zero'
  } else if (num > 0){
      return 'Positive'
  } else if (num < 0){
      return 'Negative'
  }
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
