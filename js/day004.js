//Sum of positive
function positiveSum(arr) {
    let sum = 0
    arr.forEach(x => {if (x > 0){sum += x}})
    return sum
}

//Return Negative
function makeNegative(num) {
    if (num <= 0) {
      return num
    } else {
      return num * -1
    }
}