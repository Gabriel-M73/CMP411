async function getMeat() {
    let api =  "https://baconipsum.com/api/";
    let meatFiller = document.getElementById("filler_form").value;
    let paragrahNum = document.getElementById("meat_form").value;
    api = api + "?type=" + meatFiller +"&paras=" + paragrahNum;

    alert(api);

    let meat = await fetch(api);
    let meatJSON = await meat.json();

    document.getElementById("raw_text").innerHTML = JSON.stringify(meatJSON);

    let paragrahForm = "";

    for (para in meatJSON) {
        if(paragrahForm === "") {
            paragrahForm += meatJSON[para] + "<br>";
        } else {
            paragrahForm += "<br>" + meatJSON[para] + "<br>";
        }
    }

    document.getElementById("formatted_text").innerHTML = paragrahForm;
}