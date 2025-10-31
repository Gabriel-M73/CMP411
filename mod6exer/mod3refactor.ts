let listOne: string = "";
let listTwo: string = "";

function addWord() {
    let word: string = (<HTMLInputElement>document.getElementById("word_form")).value.trim();

    if(word ==="") {
        alert("please enter a word")
        return;
    }

    if((<HTMLInputElement>document.getElementsByName("list_choice")[0]).checked) {
        listOne += (<HTMLInputElement>document.getElementById("word_form")).value + '<br>';
        (<HTMLInputElement>document.getElementById("list1_text")).innerHTML = listOne;
    } else if((<HTMLInputElement>document.getElementsByName("list_choice")[1]).checked) {
        listTwo += (<HTMLInputElement>document.getElementById("word_form")).value + '<br>';
        (<HTMLInputElement>document.getElementById("list2_text")).innerHTML = listTwo;
    }
} // addWord function

function clearList1() {
    let listElementOne: HTMLElement | null = (<HTMLInputElement>document.getElementById("list1_text"));
    listElementOne.innerHTML = "";
    listOne = ""
} // clearList1 function

function clearList2() {
    let listElementTwo: HTMLElement | null = (<HTMLInputElement>document.getElementById("list2_text"));
    listElementTwo.innerHTML = "";
    listTwo = ""
} // clearList2 function