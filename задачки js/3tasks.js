a = [1, 3, 5]/// 9
b = [-4, 27, -5] /// 18
c = [-3, -8, -17] /// -28

function getResult(array){
    sum = 0
    for (i = 0; i < a.length; i++) {
    sum = sum + array[i]
    }
    return sum
}

console.log(getResult([1, 3, 5]))
console.log(getResult([-4, 27, -5]))
console.log(getResult([-3, -8, -17]))