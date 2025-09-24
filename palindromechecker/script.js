let list1 = "";
let list2 = "";
let list3 = "";

function checkWord() {
    let word = document.getElementById("word_form").value.trim();

    if(word ==="") {
        alert("please enter a word")
        return;
    }

    word = sanitize(word)

    if(document.getElementsByName("list_choice")[0].checked) {
        list1 += document.getElementById("word_form").value + '<br>';
        document.getElementById("list1_text").innerHTML = list1;
    } 
    if(document.getElementsByName("list_choice")[1].checked) {
        list2 += document.getElementById("word_form").value + '<br>';
        document.getElementById("list2_text").innerHTML = list2
    }
    if(document.getElementsByName("list_choice")[2].checked) {
        list3 += document.getElementById("word_form").value + '<br>';
        document.getElementById("list3_text").innerHTML = list3
    }
} // checkWord function

function algorithim1 (word) {
    checker = word.reverse()
} // algorithim1 function

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
  return string.replace(reg, (match)=>(map[match]));
} // sanitze function