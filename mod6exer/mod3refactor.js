var listOne = "";
var listTwo = "";
function addWord() {
    var word = document.getElementById("word_form").value.trim();
    if (word === "") {
        alert("please enter a word");
        return;
    }
    if (document.getElementsByName("list_choice")[0].checked) {
        listOne += document.getElementById("word_form").value + '<br>';
        document.getElementById("list1_text").innerHTML = listOne;
    }
    else if (document.getElementsByName("list_choice")[1].checked) {
        listTwo += document.getElementById("word_form").value + '<br>';
        document.getElementById("list2_text").innerHTML = listTwo;
    }
} // addWord function
function clearList1() {
    var listElementOne = document.getElementById("list1_text");
    listElementOne.innerHTML = "";
    listOne = "";
} // clearList1 function
function clearList2() {
    var listElementTwo = document.getElementById("list2_text");
    listElementTwo.innerHTML = "";
    listTwo = "";
} // clearList2 function
