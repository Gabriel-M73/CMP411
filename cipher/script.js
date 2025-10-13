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

    const plainText = paragrahForm.replace(/(<|&lt;)br\s*\/*(>|&gt;)/gi, ' ');
    // gets rid of the <br> tags in the paragraphForm from above to use as the plain text b/c lazy

    const all_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //string used to both build the dict for algo 1 and to be used to encrypt both algos

    if (document.getElementById("algo_form").value == 1) {
        const dict = {};
        const key = 7;

        for (let i = 0; i < all_letters.length; i++) {
            dict[all_letters[i]] = all_letters[(i + key) % all_letters.length];
        } // populates dict with the alphabet shifted by 7 spaces

        let cipherText1 = "";

        for (let i = 0; i < plainText.length; i++) {
            const char = plainText[i];
            if (all_letters.includes(char)) {
                const temp = dict[char];
                cipherText1 += temp;
            } else {
                cipherText1 += char;
            }
        }
    
        document.getElementById("encrypted_text").innerHTML = cipherText1 + "<br> <br>Algoritim 1";
    }
    
    if (document.getElementById("algo_form").value == 2) {
        const keypad = {
            A: "21",  a: "21",
            B: "22",  b: "22",
            C: "23",  c: "23",
            D: "31",  d: "31",
            E: "32",  e: "32",
            F: "33",  f: "33",
            G: "41",  g: "41",
            H: "42",  h: "42",
            I: "43",  i: "43",
            J: "51",  j: "51",
            K: "52",  k: "52",
            L: "53",  l: "53",
            M: "61",  m: "61",
            N: "62",  n: "62",
            O: "63",  o: "63",
            P: "71",  p: "71",
            Q: "72",  q: "72",
            R: "73",  r: "73",
            S: "74",  s: "74",
            T: "81",  t: "81",
            U: "82",  u: "82",
            V: "83",  v: "83",
            W: "91",  w: "91",
            X: "92",  x: "92",
            Y: "93",  y: "93",
            Z: "94",  z: "94",
        }; // Letters A–Z and a-z —> same number for both upper and lower

        let cipherText2 ="";
        for (let i = 0; i < plainText.length; i++) {
            const char = plainText[i];
            if (all_letters.includes(char)) {
                const temp = keypad[char];
                cipherText2 += temp;
            } else {
                cipherText2 += char;
            }
        }

        document.getElementById("encrypted_text").innerHTML = cipherText2 + "<br> <br>Algoritim 2";
    }
}