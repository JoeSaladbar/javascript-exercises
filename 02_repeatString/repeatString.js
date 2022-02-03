const repeatString = function(phrase, num) {
    let  returnPhrase; 
    returnPhrase = "";

    if(num <0){
        return "ERROR"; 
    }else{
        for (let i = 0; i<num; i++){
            returnPhrase+=phrase; 
        }
        return returnPhrase;
    } 
};

// Do not edit below this line
module.exports = repeatString;
