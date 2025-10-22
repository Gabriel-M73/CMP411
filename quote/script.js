async function fetchQuote() {
    const quoteLength = document.getElementById("quoteLenInp").value;

    let minLength = 0;
    let maxLength = 0;

    if(quoteLength === "short") {
        minLength = 0;
        maxLength = 25;
    } else if(quoteLength === "medium") {
        minLength = 26;
        maxLength = 100;
    } else if(quoteLength === "long") {
        minLength = 101;
        maxLength = 700;
    }

    let quoteAPI = "https://api.quotable.io/quotes/random?minLength=" + minLength + "&maxLength=" + maxLength;
    
    alert(quoteAPI);

    let quoteData = await fetch(quoteAPI);
    let quoteJSON = await quoteData.json();

    document.getElementById("authorText").innerHTML = quoteJSON[0].author + " once said:";
    document.getElementById("quoteText").innerHTML = quoteJSON[0].content;

    return true;
}