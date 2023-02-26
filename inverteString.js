function inverteString(str) {
    let strInvertido = '';
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertido += str[i];
    }
    return strInvertido;
  }
  
const minhaString = 'Target Sistemas';
console.log(inverteString(minhaString)); // resultado: 'sametsiS tegraT'
  