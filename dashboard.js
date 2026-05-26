const quote = [

{
    text:"Strength does not come from winning. Your struggles develop your strengths.",
    name: "- Arnold Schwarzenegger"
},
{
    text:"Everybody wants to be a bodybuilder, but nobody wants to lift heavy weights.",
    name:"- Ronnie Coleman"
},
{
    text:"The only way to grow is to challenge yourself.",
    name:"- Cbum"
}


];

let index = 0;

setInterval (() => {

    index++;
    if (index >= quote.length){
        index = 0;
    }

    document.querySelector(".quote").innerText =
`"${quote[index].text}"`;

document.querySelector(".quote-name").innerText =
quote[index].name;

},3000);