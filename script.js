document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            console.log(
                "Selected category:",
                card.querySelector("h3").textContent
            );
        });
    });

    console.log(
        "Whayne Kristopher Del Moro! " 
    );
});
