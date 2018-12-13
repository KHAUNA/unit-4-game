var crystalArr = [10,3,5,7];
var counter = 0;

// function winChecker() {
//     var targetScore = 53;
//     if (counter == targetScore) {
//         alert("Nice job, you win")
//     } else if (counter > targetScore) {
//         alert("Sorry...you lose")
//     }
// };

$( document ).ready(function() {
// shuffleArr(); come back to shuffle function

// function shuffleArr() {

//     for (i=3; i >= 0; i--) {
//         var currIndex = crystalArr[i];
//         var randIndex = Math.floor(Math.random()*(i+1))

//         crystalArr[randIndex] = crystalArr
//         crystalArr[i] = randIndex;
        
//     } console.log(crystalArr)
// }

function assignCrystalValue () {
    $("#bCrystal").attr("b-crystal-value",crystalArr[0]);
    var bCrystalValue = $("#bCrystal").attr("b-crystal-value");
    $("#yCrystal").attr("y-crystal-value",crystalArr[1]);
    var yCrystalValue = $("#yCrystal").attr("y-crystal-value");
    $("#pCrystal").attr("p-crystal-value",crystalArr[2]);
    var pCrystalValue = $("#pCrystal").attr("p-crystal-value");
    $("#rCrystal").attr("r-crystal-value",crystalArr[3]);
    var rCrystalValue = $("#rCrystal").attr("r-crystal-value");

    crystalValueArr = [bCrystalValue, yCrystalValue, pCrystalValue, rCrystalValue];
    return crystalValueArr;
}
assignCrystalValue();


$("#bCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[0])
    $("#totalScoreH1").text(counter )
})
$("#yCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[1])
    $("#totalScoreH1").text(counter )
})
$("#pCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[2])
    $("#totalScoreH1").text(counter )
})
$("#rCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[3])
    $("#totalScoreH1").text(counter)
})


});