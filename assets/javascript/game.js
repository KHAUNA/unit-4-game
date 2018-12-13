var crystalArr = [10,3,5,7];
var counter = 0;
var wins = 0;
var losses = 0;

function shuffleArr() {

        var currIndex = crystalArr.length
        var randIndex;
        var tempValue;

    while (0 != currIndex) {
        randIndex = Math.floor(Math.random() * currIndex)
        currIndex = currIndex - 1;

        tempValue = crystalArr[currIndex];
        crystalArr[currIndex] = crystalArr[randIndex];
        crystalArr[randIndex] = tempValue;
    }   
    return crystalArr;
}   

$( document ).ready(function() {

    window.onclick = function() {
        winChecker();
    };

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
});
$("#yCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[1])
    $("#totalScoreH1").text(counter )
});
$("#pCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[2])
    $("#totalScoreH1").text(counter )
});
$("#rCrystal").on("click", function score() {
    counter = counter + parseInt(crystalValueArr[3])
    $("#totalScoreH1").text(counter)
});

function winChecker() {
    var targetScore = 53;
    if (counter == targetScore) {
        alert("WINNER!");
        counter = 0;
        wins ++;
        shuffleArr();   
        $("#winCount").text(wins);
        assignCrystalValue();
    } else if (counter > targetScore) {
        alert("Sorry...you lose");
        counter = 0;
        losses ++;
        shuffleArr();
        $("#loseCount").text(losses);
        assignCrystalValue();
    }
};

});