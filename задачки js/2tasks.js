a = [1, 2, 3, 4, 5]
b = [-1, -2, -3, -4, -5]
c = [-2, -2, 0, 4]

function sumArr(array) {
    sum = 0
    for (i = 0; i < a.length; i++) {
    sum = sum + array[i]
    }
    return sum
}

console.log(sumArr(a))