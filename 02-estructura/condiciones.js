let n = 0,
  prin = "";

if (n !== 0) {
  if (n > 0) {
    if (n & (2 === 0)) {
      prin = `El numero ${n} es par positiov`;
    } else {
      prin = `El numero ${n} es impar positivo`;
    }
  } else {
    if (n & (2 === 0)) {
      prin = `El numero ${n} es par negativo`;
    } else {
      prin = `El numero ${n} es impar negativo`;
    }
  }
} else {
  prin = `El numero ${n} es neutro`;
}

console.log(prin);
