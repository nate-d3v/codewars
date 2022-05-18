//Square(n) Sum
function squareSum(numbers){
    return (numbers.reduce((a, b) => a + b * b, 0))
}

//Remove String Spaces
function noSpace(x){
    return x.split(' ').join('')
}