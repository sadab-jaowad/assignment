function feetToMile(feet){
        
        if(feet<0){
            return "INVALID INPUT!";
        }
else{
  
    return feet/5280;;
    }
    
}

var result = feetToMile(5000);
console.log(result + " miles");