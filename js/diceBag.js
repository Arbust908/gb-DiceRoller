function rollDie(sides){
  return rand(1,sides);
}

function rand(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
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