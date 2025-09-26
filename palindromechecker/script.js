let list1 = "";
let list2 = "";
let list3 = "";
let list4 = "";
let word = "";

function checkWord() {
    word = document.getElementById("word_form").value.trim();

    word = sanitize(word);

    if(word ==="") {
        alert("please enter a word")
        return;
    }

    if(document.getElementsByName("list_choice")[0].checked) {
        list1 += word + ": " + palindrome1() + '<br>';
        document.getElementById("list1_text").innerHTML = list1;
    } 
    if(document.getElementsByName("list_choice")[1].checked) {
        list2 += word + ": " + palindrome2() + '<br>';
        document.getElementById("list2_text").innerHTML = list2
    }
    if(document.getElementsByName("list_choice")[2].checked) {
        list3 += word + ": " + palindrome3() + '<br>';
        document.getElementById("list3_text").innerHTML = list3
    }
    if(document.getElementsByName("list_choice")[3].checked) {
        list4 += word + ": " + palindrome4() + '<br>';
        document.getElementById("list4_text").innerHTML = list4
    }
} // checkWord function

function palindrome1() {
    checker = "";
    checker = word.split("").reverse().join("");

    if(word === checker) {
        return true;
    } else {return false;}
} // palindrome1 function - reverses the whole word then check it against itself

function palindrome2() {
    checker = "";
    checker = word;
    let left = 0;
    let right = checker.length - 1;

    while (left < right) {
        if (checker[left] !== checker[right]) {
            return false;
        }
        left++;
        right--;
    }
  return true;
} // palindrome 2 function - drags 2 pointers from the ends of the word to compare each character

function palindrome3() {
    checker = "";
    checker = word.split("").every((char, i) => char === word[word.length - 1 - i]);

    return checker;
} // palindrome 3 function - uses the every() method to check if each character matches the character at its mirrored position

function palindrome4() {
    checker = "";
    checker = word;

    for (let i = 0; i < checker.length / 2; i++) {
        if (checker.charCodeAt(i) !== checker.charCodeAt(checker.length - 1 - i)) {
            return false;
        }
    }
    return true;
} // palindrome 4 function - checks each end of the word usinng the character's ASCII values

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

function clearList4() {
    listElement = document.getElementById("list4_text");
    listElement.innerHTML = "";
    list4 = ""
} // clearList4 function

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