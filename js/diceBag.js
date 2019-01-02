//* Ex math.js
// Paado para formaterar mejor un obj de Set
//
//
/**
 * The "mean" is the "average" you're used to, where you add up all the numbers
 * and then divide by the number of numbers.
 *
 * For example, the "mean" of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated average (or mean) value from the specified
 *     numbers.
 */
function mean(numbers) {
  var total = 0, i;
  for (i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
  }
  return total / numbers.length;
}

/**
* The "median" is the "middle" value in the list of numbers.
*
* @param {Array} numbers An array of numbers.
* @return {Number} The calculated median value from the specified numbers.
*/
function median(numbers) {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  var median = 0, numsLen = numbers.length;
  numbers.sort();

  if (
      numsLen % 2 === 0 // is even
  ) {
      // average of two middle numbers
      median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else { // is odd
      // middle number only
      median = numbers[(numsLen - 1) / 2];
  }

  return median;
}

/**
* The "mode" is the number that is repeated most often.
*
* For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
*
* @param {Array} numbers An array of numbers.
* @return {Array} The mode of the specified numbers.
*/
function mode(numbers) {
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [], count = [], i, number, maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
      number = numbers[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
          maxIndex = count[number];
      }
  }

  for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
              modes.push(Number(i));
          }
      }

  return modes;
}

/**
* The "range" of a list a numbers is the difference between the largest and
* smallest values.
*
* For example, the "range" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 5].
*
* @param {Array} numbers An array of numbers.
* @return {Array} The range of the specified numbers.
*/
function range(numbers) {
  numbers.sort();
  return [numbers[0], numbers[numbers.length - 1]];
}
//--- --- o --- ---//


function rand(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function decimalPoint(float,decimal = 2){
  return parseFloat(Math.round(float * 100) / 100).toFixed(decimal);
}

function toLeters(num){
  switch (num) {
    case 1:
    return 'one';
    case 2:
    return 'two';
    case 3:
    return 'three';
    case 4:
    return 'four';
    case 5:
    return 'five';
    case 6:
    return 'six';
    
    default: 'one';
    break;
  }
  
}

function groupDiceRoll(sides,times = 1){
  let rolls = [];
  for (let i = 0; i < times; i++) {
    rolls[i] = rollDie(sides);
  }
  const groupRoll = 
  {
    rolls: rolls,
    mean: decimalPoint(mean(rolls)),
    median: median(rolls),
    mode: mode(rolls),
    range: range(rolls),
    total: rolls.reduce((a, b) => a + b, 0),
    dice: rolls.map((die) => toLeters(die))
  }
  return groupRoll;
}

function setDiceRoll(sides,times,repeats = 1){
  let sets = [];
  let rolls = [];
  for (let i = 0; i < repeats; i++) {
    sets[i] = groupDiceRoll(sides,times);
    rolls[i] = sets[i].rolls
  }
  rolls = [].concat.apply([], rolls);
  const setsGroup = 
  {
    sets: sets,
    rolls: rolls,
    mean: decimalPoint(mean(rolls)),
    median: median(rolls),
    mode: mode(rolls),
    range: range(rolls),
    total: rolls.reduce((a, b) => a + b, 0)
  }
  return setsGroup;
}

//  function dieIcon(type,num) {
//    if(type != 'D6'){
//  
//    } else {
//  
//    }
//  }
//  
//  function dieRoll(sides){
//    const roll = {
//      type: `D${sides}`,
//      minRoll: 1,
//      maxRoll: sides,
//      result: rand(this.minRoll,this.maxRoll),
//      display: dieIcon(this.type,this.result),
//  
//    }
//  }


// OLD V
function rollDie(sides){
  return rand(1,sides);
}

function multiRoll(times,sides){
  let rolls = [];
  for (let i = 0; i < times; i++) {
    rolls[i] = rollDie(sides);
  }
  return rolls;
}

function setRolls(sets,times,sides){
  let set = [];
  for (let i = 0; i < sets; i++) {
    set[i] = multiRoll(times,sides);
  }
  return set;
}
