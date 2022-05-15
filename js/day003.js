//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return (bool ? "Yes" : "No")
}

//Reversed Strings
function solution(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str.charAt(i)
    }
    return newStr
}