var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name){
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
  kittens = name
}

function removeLastKitten(){
  kittens.slice(0,2)
}

function removeFirstKitten(){
  kittens.slice(1)
}