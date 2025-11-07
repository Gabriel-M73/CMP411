function getNumber() {
    let minRange: string = (<HTMLInputElement>document.getElementById("min_range")).value;
    let maxRange: string = (<HTMLInputElement>document.getElementById("max_range")).value;
    let number: string = (<HTMLInputElement>document.getElementById("number_form")).value;

    let min: number = parseInt(minRange);
    let max: number = parseInt(maxRange);
    let num: number = parseInt(number);
    
    if(min === 0 || max === 0 || num === 0) {
        alert("please a number for each input");
        return;
    }

    if(min > max || max < min) {
        alert("please enter valid ranges");
        return;
    }

    if(num < min || num > max) {
        alert("please enter a number within the minimum and maximum range");
        return;
    } else if (num >= min || num <= max) {
        (<HTMLInputElement>document.getElementById("number_list")).innerHTML += number + "<br>";
    }

    let mean: number = 0;
    let numbers: number[] = [];
    let numberList: string[] = (<HTMLInputElement>document.getElementById("number_list")).innerHTML.split("<br>");
    for(let i = 0; i < numberList.length - 1; i++) {
        let currentNum: number = parseInt(numberList[i]);
        numbers.push(currentNum);
        mean += currentNum;
    }
    mean = mean / numbers.length;
    (<HTMLInputElement>document.getElementById("mean_text")).innerHTML = "Mean: " + mean;

    let median: number = 0;
    numbers.sort((a, b) => a - b);

    if (numbers.length % 2 === 0) {
        let middle2: number = numbers.length / 2;
        let middle1: number = middle2 - 1;
        (<HTMLInputElement>document.getElementById("median_text")).innerHTML = "Median: " + numbers[middle1] + ", " + numbers[middle2];
    } else {
        median = numbers[Math.floor(numbers.length / 2)];
        (<HTMLInputElement>document.getElementById("median_text")).innerHTML = "Median: " + median;
    }
    

}

function clearNumbers() {
    (<HTMLInputElement>document.getElementById("number_list")).innerHTML = "";
    (<HTMLInputElement>document.getElementById("mean_text")).innerHTML = "Mean: N/A";
    (<HTMLInputElement>document.getElementById("median_text")).innerHTML = "Median: N/A";
}   