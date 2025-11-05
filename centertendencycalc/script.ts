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


}