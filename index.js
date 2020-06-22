var kittens = ["Milo", "Otis", "Garfield"]
var kittens2 = ["Cat", "Cattius", "Catastrophic"]


function functiondestructivelyAppendKitten(array,element){
  array.push(element)
}

function destructivelyRemoveLastKitten(array){
  console.log(array.slice(0,2))
}

function combineArrays(array1, array2){
  kitten3 = array.concat(array2)
  return kitten3
}