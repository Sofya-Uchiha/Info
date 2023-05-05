function  average(arr)
{
    if(arr.length === 0)
        return 0;
 
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
 
let k = [4, 7, 2, 9, 5];
console.log(average(k));
