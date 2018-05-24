function destructivelyAppendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.shift();
}
function appendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return [...kittens, name];
}
function prependKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return [name, ...kittens];
}
function removeLastKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(1, kittens.length);
}