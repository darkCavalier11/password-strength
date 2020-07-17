// check strength of your password which return a level of security of password
// a password is strong if it has following 5 properties

// 1 length > 8
// 2 contains lowercase characters
// 3 contains uppercase characters
// 4 constains numeric digits
// 5 contains special character
'use strict'
const strength = function (password) {
    const criteria = {
        len: false,
        lowerCase: false,
        upperCase: false,
        numeric: false,
        specialChar: false
        }
    const frequency = []
    for (let j = 0; j <= 200; j++){
        frequency.push(0)
    }
    var level = 0
    if (password.length <= 8){
        return level;
    }
    criteria['len'] = true
    level++
    for(let i = 0; i < password.length; i++){
        const asciiValue = password[i].charCodeAt()
        frequency[asciiValue] += 1
        if (asciiValue >= 97 && asciiValue <= 122){
            if(!criteria['lowerCase']){
            criteria['lowerCase'] = true;
            level ++
            }
            continue;
        }
        else if(asciiValue >= 65 && asciiValue <= 90 && !criteria['upperCase']){
            if(!criteria['upperCase']){
            criteria['upperCase'] = true;
            level ++
            }
            continue;
        }
        else if(asciiValue >= 48 && asciiValue <= 57 && !criteria['numeric']){
            if(!criteria['numeric']){
            criteria['numeric'] = true;
            level ++
            }
            continue;
        }
        else if (!criteria['specialChar']){
            if(!criteria['specialChar']){
            criteria['specialChar'] = true;
            level ++
            }
            continue;
        }
    }
    let max = 0
    for(let j = 0; j < frequency.length; j++){
        if (frequency[j] > max){
            max = frequency[j]
        }
    }
    console.log(criteria)
    if (max == Math.floor(password.length)){
        return 0
    }
    else if (max >= Math.floor(password.length/2)){
        return 1
    }
    else if (max >= Math.floor(password.length/3)){
        return 2
    }

    return level;
}
console.log(strength('anfbsduncousfc'))