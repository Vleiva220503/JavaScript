let v = "a",
  leer;

switch (v) {
  case "a":
  case "A":
  case "e":
  case "E":
  case "i":
  case "I":
  case "o":
  case "O":
  case "u":
  case "U":
    leer = `${v} es vocal`;
    break;
  default:
    leer = `${vocal} no es vocal`;
    break;
}

console.log(leer);