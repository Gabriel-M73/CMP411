async function getMeat() {
    let api =  "https://baconipsum.com/api/";
    let meatFiller = document.getElementById("filler_form").value;
    let paragrahNum = document.getElementById("meat_form").value;
    let loremStart = document.getElementById("lorem_form").value;
    api = api + "?type=" + meatFiller +"&paras=" + paragrahNum + "&start-with-lorem=" + loremStart;

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

    
    const all_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const dict = {};
    const key = 7;

    for (let i = 0; i < all_letters.length; i++) {
        dict[all_letters[i]] = all_letters[(i + key) % all_letters.length];
    }

    const plainText = paragrahForm;
    
}