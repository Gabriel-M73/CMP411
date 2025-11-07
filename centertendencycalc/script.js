function getNumber() {
    var minRange = document.getElementById("min_range").value;
    var maxRange = document.getElementById("max_range").value;
    var number = document.getElementById("number_form").value;
    var min = parseInt(minRange);
    var max = parseInt(maxRange);
    var num = parseInt(number);
    if (min === 0 || max === 0 || num === 0) {
        alert("please a number for each input");
        return;
    }
    if (min > max || max < min) {
        alert("please enter valid ranges");
        return;
    }
    if (num < min || num > max) {
        alert("please enter a number within the minimum and maximum range");
        return;
    }
    else if (num >= min || num <= max) {
        document.getElementById("number_list").innerHTML += number + "<br>";
    }
    var mean = 0;
    var numbers = [];
    var numberList = document.getElementById("number_list").innerHTML.split("<br>");
    for (var i = 0; i < numberList.length - 1; i++) {
        var currentNum = parseInt(numberList[i]);
        numbers.push(currentNum);
        mean += currentNum;
    }
    mean = mean / numbers.length;
    document.getElementById("mean_text").innerHTML = "Mean: " + mean;
}
function clearNumbers() {
    document.getElementById("number_list").innerHTML = "";
    document.getElementById("mean_text").innerHTML = "Mean: N/A";
    document.getElementById("median_text").innerHTML = "Median: N/A";
}
