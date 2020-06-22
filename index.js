var kittens = ["Milo", "Otis", "Garfield"]
var kittens2 = ["Cat", "Cattius", "Catastrophic"]


function functiondestructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten()

function combineArrays(array1, array2){
  kitten3 = array.concat(array2)
  return kitten3
}