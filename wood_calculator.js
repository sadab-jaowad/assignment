
function woodCalculator(chair,table,bed){

    var chairWoodCount= chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWoodCount= chairWoodCount+tableWoodCount+bedWoodCount;
    
    return totalWoodCount;
}

var totalWood = woodCalculator(10,25,30);
console.log("Total number of wood is "+ totalWood + " cubic feet");