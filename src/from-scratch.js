const measureRain = (inches) => {
  if(inches>=6){
    console.log('flood')
  } else if (inches === 0){
    console.log('drought')
  } else if (inches < 2){
    console.log('dry')
  } else if (inches < 4){
    console.log('average')
  } else if (inches < 6){
    console.log('rainy')
  }
};
/** FEEDBACK: Great job! Love that you are using nesting conditional statements as it shows a deep understanding of concepts and a sense of organization/pattern recognition however I do want to note that we typically do not want nested conditions as it makes it a little harder to read. */
const happyBirthdayPet = (breed, age) => {
  if(breed === 'snake'){
     console.log('Hiss hiss!')
  } else if(breed === 'cat'){
    if (age<5){
      console.log('Mew mew!')
    } else {
      console.log('Meow meow!')
    }
  } else if (breed === 'dog'){
    if (age<5){
      console.log('Arf arf!')
    } else if (age>=5 && age<10){
      console.log('Woof woof!')
    } else {
      console.log('Boof!')
    }
  } else {
    console.log('Happy birthday!')
  }
};

const funTypes = (jsType) => {
  let type = typeof jsType
    if(type === 'string'){
      console.log('That\'s just some text.')
    } else if (Number.isNaN(jsType)){
      console.log('Well, now you\'re just showing off.')
    } else if (type === 'number'){
      console.log('That\'s a good number.')
    }  else if (type === 'boolean'){
      console.log('To bool, or not to bool?')
    } else if (type === 'undefined'){
      console.log('Nothing, but I didn\'t set that.')
    } else if (jsType === null){
      console.log('Nothing, and I did set that.')
    } else if (Array.isArray(jsType)){
      console.log('I order you to be indexed.')
    } else if (type === 'object'){
      console.log('Anybody got the key?')
    }
};

const rounder = (float, roundingSetting) => {
  if(roundingSetting === 'up'){
    return Math.ceil(float)
  } else if (roundingSetting === 'down'){
    return Math.floor(float)
  } else {
    return Math.round(float)
  }
};
console.log(rounder(7.9,'honest'))
const fizzBuzzish = (num) => {
  /** FEEDBACK: Make sure to add spaces to make your code more readable like in between num and the %! */
  if( num%3===0 && num%5===0){
      console.log('fizzBuzz!')
  } else if(num%3===0) {
     console.log('fizz')
  }
    else if (num%5===0){
      console.log('buzz')
    } else {
      console.log(num);
  }
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
