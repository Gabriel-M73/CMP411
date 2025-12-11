let deck = null; // store deck ID globally

// create the deck once
async function setupDeck() {
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/");
    const data = await res.json();
    deck = data.deck_id; // save it
    console.log("Deck created:", deck);
}

async function drawCard() {
    if (!deck) {
        console.error("Deck has not been created yet!");
        return;
    }

    let cardNum = document.getElementById("card_form").value;

    let api = "https://deckofcardsapi.com/api/deck/" + deck + "/draw/?count=" + cardNum;

    alert(api);

    const drawRes = await fetch(api);
    const drawData = await drawRes.json();

    if (!drawData.success || drawData.cards.length === 0) {
        return alert("No cards left in the deck!");
    }


    let player = document.getElementById("draw_source").value;

    // Add drawn cards to the "hand" pile
    const cardCodes = drawData.cards.map(card => card.code).join(",");
    await fetch(
        `https://deckofcardsapi.com/api/deck/${deck}/pile/${player}/add/?cards=${cardCodes}`
    );

    // Get the full hand from the pile
    const pileRes = await fetch(
        `https://deckofcardsapi.com/api/deck/${deck}/pile/${player}/list/`
    );
    const pileData = await pileRes.json();


    const cards = pileData.piles[player].cards;

    // Display as images
    const container = document.getElementById(`${player}_images`);
    container.innerHTML = ""; // clear old images

    cards.forEach(card => {
        const img = document.createElement("img");
        img.src = card.image;
        img.alt = `${card.value} of ${card.suit}`;
        img.width = 120;
        img.style.margin = "10px";
        container.appendChild(img);
    });    
}

async function shuffleDeck() {
    const shuffleRes = await fetch(`https://deckofcardsapi.com/api/deck/${deck}/shuffle/`);
    const shuffleData = await shuffleRes.json();

    document.getElementById("player1_images").innerHTML = "";
    document.getElementById("player2_images").innerHTML = "";

    console.log("Deck shuffled:", shuffleData);
}