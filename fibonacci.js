function fibonacci(num) {
    if (num === 0 || num === 1) {
      return true;
    }
    
    let a = 0;
    let b = 1;
    let c = 1;
    
    for (let i = 2; c < num; i++) { //começa em 2 pois é o primeiro número possível após a soma dos dois primeiros números (0+1)
      c = a + b;
      a = b;
      b = c;
    }
    
    if (c === num) {
      return true;
    } else {
      return false;
    }
  }
  
  let numero = 55;
  let pertence = fibonacci(numero);
  
  if (pertence) {
    console.log(numero + " pertence à sequência de Fibonacci");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci");
  }
