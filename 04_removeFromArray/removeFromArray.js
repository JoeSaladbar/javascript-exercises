const removeFromArray = function(mainArr, ...numArr) {

        for(let i = numArr.length - 1; i >= 0; i--){
            let index = mainArr.indexOf(numArr[i]);
    
            if(index == -1){
                continue;
            }
            else{
                mainArr.splice(index, 1);
            }
    
        }
    
      return mainArr; 
    
    }; 

// Do not edit below this line
module.exports = removeFromArray;
