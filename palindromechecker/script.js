let list1 = "";
let list2 = "";
let list3 = "";
let word = "";

function checkWord() {
    word = document.getElementById("word_form").value.trim();

    word = sanitize(word);

    if(word ==="") {
        alert("please enter a word")
        return;
    }

    if(document.getElementsByName("list_choice")[0].checked) {
        list1 += word + ": " + palindrome1() +'<br>';
        document.getElementById("list1_text").innerHTML = list1;
    } 
    if(document.getElementsByName("list_choice")[1].checked) {
        list2 += word + '<br>';
        document.getElementById("list2_text").innerHTML = list2
    }
    if(document.getElementsByName("list_choice")[2].checked) {
        list3 += word + '<br>';
        document.getElementById("list3_text").innerHTML = list3
    }
} // checkWord function

function palindrome1 () {
    checker = "";
    checker = word.split("").reverse().join("");
    if(word === checker) {
        return true;
    } else {return false;}
} // palindrome1 function

function clearList1() {
    listElement = document.getElementById("list1_text");
    listElement.innerHTML = "";
    list1 = ""
} // clearList1 function

function clearList2() {
    listElement = document.getElementById("list2_text");
    listElement.innerHTML = "";
    list2 = ""
} // clearList2 function

function clearList3() {
    listElement = document.getElementById("list3_text");
    listElement.innerHTML = "";
    list3 = ""
} // clearList3 function

function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  checking = string.replace(reg, (match)=>(map[match]));
  return checking;
} // sanitze function