let list1 = "";
let list2 = "";

function addWord() {
    let word = document.getElementById("word_form").value.trim();

    if(word ==="") {
        alert("please enter a word")
        return;
    }

    if(document.getElementsByName("list_choice")[0].checked) {
        list1 += document.getElementById("word_form").value + '<br>';
        document.getElementById("list1_text").innerHTML = list1;
    } else {
        list2 += document.getElementById("word_form").value + '<br>';
        document.getElementById("list2_text").innerHTML = list2
    }
} // addWord function

function clearList(list) {
    listElement = document.getElementById(list);
    listElement.innerHTML = '';
    if(document.getElementsByName("clear_list")[0].checked) {
        alert("here")
        list1 = "";
    } else {
        list2 = "";
    }
} // clearList function