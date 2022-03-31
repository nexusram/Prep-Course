// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
return retorno;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  retorno = {};///objeto clave valor
  for (i = 0; string.length > i; i++) {
    if (!retorno[string[i]]) {
      retorno[string[i]] = 0;
    }
    retorno[string[i]]+=1;
  }
  return retorno;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  caracter = [];
  aux = [];
  for (i = 0; i < s.length; i++) {
    if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
      caracter.push(s.charAt(i));
    } else {
      aux.push(s.charAt(i));
    }
  }
  //caracter.reverse();
  result_2 = union(caracter);
  result_1 = union(aux);
  result_2 = result_2 + result_1;

  function union(valor) {
    aux3 = valor.toString()
    var result = "";

    for (y = 0; aux3.length > y; y++) {
      result = aux3.split(',').join('');
    }
    return result;
  }
  return result_2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = '';
  for (let i = str.length - 1; i >= 0; i--) {
    espejo += str[i];
  };
  return espejo.split(' ').reverse().join(' ');
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if (numero.toString().split('').reverse().join('') === numero.toString()) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  retorno = '';
  y = 0;
  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) !== "a" && cadena.charAt(i) !== "b" && cadena.charAt(i) !== "c") {
      retorno = retorno + cadena[i];
      y++;
    }
  }
  return retorno;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  retorno=[];
  aux='';
  for (i = 0; i < arr.length; i++) {
    aux=arr[i].toString().split(",");
      for(y=0;y<arr.length;y++)
      {
       
      }
  }
return retorno;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  aux = [];
  for (i = 0; arreglo1.length > i; i++) {
    for (y = 0; arreglo2.length > y; y++) {
      if (arreglo2[y] === arreglo1[i]) {
        aux.push(arreglo2[y]);
      }
    }
  }
  return aux;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

