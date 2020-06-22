var kittens = ["Milo", "Otis", "Garfield"]


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

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  return concat(name).kittens
}

function removeLastKitten(){
  kittens.slice(0,2)
}
