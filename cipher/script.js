async function getMeat() {
    var api =  "https://baconipsum.com/api/";
    var paragrahNum = document.getElementById("meat_form").value;
    api = api + "?type=meat&paras=" + paragrahNum;

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