//feetToMile
function feetToMile(feet) {

    if (feet < 0) {
        return "INVALID INPUT!";
    }
    else {

        return feet / 5280;;
    }

}

var result = feetToMile(5000);
console.log(result + " miles");

//woodCalculator
function woodCalculator(chair, table, bed) {

    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;

    return totalWoodCount;
}

var totalWood = woodCalculator(10, 25, 30);
console.log("Total number of wood is " + totalWood + " cubic feet");

//brickCalculator
function brickCalculator(floor) {
    var brick = 0;
    if (floor <= 10) {
        brick = floor * 15000;
    }
    else if (floor <= 20) {
        var firstFloors = 10 * 15000;
        var remaining = floor - 10;
        var secondFloors = floor * 12000;
        brick = firstFloors + secondFloors;
    }
    else {
        var firstFloors = 10 * 15000;
        var secondFloors = 10 * 12000;
        var remaining = floor - 20;
        var thirdFloors = remaining * 10000;
        brick = firstFloors + secondFloors + thirdFloors;
    }
    return brick;
}



//tinyfriend
var friendName = ["Sadab", "Jaowad", "Kabila", "Kowshik"];
function tinyFriend(name) {
    var smallLength = Infinity;
    var smallestName;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length < smallLength) {
            smallLength = name[i].length;
            smallestName = name[i];
        }
    }
    return smallestName;
}

var names = tinyFriend(friendName);
console.log(names);