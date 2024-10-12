function fibonacci(n) {
  let a = 0;
  let b = 1;
  let finalFibnocci;
  for (let i = 2; i <= n; i++) {
    finalFibnocci = a + b;
      a = b;
      b = finalFibnocci;
  }

  return b;
}


console.log(fibonacci(10)); 
