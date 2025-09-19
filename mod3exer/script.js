function addWord() {
    let list1 = "";
    let list2 = "";
    document.getElementById("word_form").addEventListener("add_word", function(event) {
        event.preventDefault();

            let word = document.getElementById("word_form").value.trim();
            if(word === "") {
                alert("please enter a word")
                return;
            }

            let listone = document.getElementById("list1")
            let listtwo = document.getElementById("list2")

            if(document.getElementById("list1_radio") == true) {
                listone.innerHTML = word;
            }

    });
} // add word function