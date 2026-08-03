console.log("Welcome to Nicca Art ✨");


document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(1.05)";

        setTimeout(()=>{

            card.style.transform="";

        },300);

    });

});
