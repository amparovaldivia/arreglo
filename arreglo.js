//ejercicio 1
function alwaysHungry(arr) {
    var tengo_hambre = true;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] == "comida") {
            console.log("delicioso");
            tengo_hambre = false;
        }
    }
    if (tengo_hambre == true) {
        console.log("tengo hambre");
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

//ejercicio 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > cutoff) {
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


// ejercicio 3
function betterThanAverage(arr) {
    var sum = 0;
    for (var x = 0; x < arr.length; x++) {
        sum = sum + arr[x];

    }
    var promedio = sum / arr.length;
    var count = 0
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > promedio) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

// ejercicio 4
function reverse(arr) {
    arr.reverse();
    return arr;
    //lo encontre en w3schools www.w3schools.com/js/js_array_sort.asp

}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// ejercicio 5
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var y = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(y);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

