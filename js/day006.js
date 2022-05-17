//Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b) => a-b)
      return args[0]
    }
}

//Grasshopper - Summation
var summation = function (num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
      sum += i
    }
    return sum
}