async function drawCard() {
    var api =  "https://deckofcardsapi.com/api/deck/zmc8p4rsnhqq/";
    var paragrahNum = document.getElementById("card_form").value;
    api = api + "draw/?count=" + paragrahNum;

    alert(api);

    var meat = await fetch(api);
    var meatJSON = await meat.json();

    document.getElementById("raw_text").innerHTML = JSON.stringify(meatJSON);

    var paragrahForm = "";

    for (para in meatJSON) {
        if(paragrahForm === "") {
            paragrahForm += meatJSON[para] + "<br>";
        } else {
            paragrahForm += "<br>" + meatJSON[para] + "<br>";
        }
    }

    document.getElementById("formatted_text").innerHTML = paragrahForm;
}