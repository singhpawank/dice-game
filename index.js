

function refresh(){
    const randomNumber1 = Math.floor(Math.random()*6+1);
    const randomNumber2 = Math.floor(Math.random()*6+1);

    const img1 = `dice${randomNumber1}.png`;
    const img2 = `dice${randomNumber2}.png`;
    const pathToImage = "/images/"

    document.querySelector(".img1").setAttribute("src", `${pathToImage}${img1}`);
    document.querySelector(".img2").setAttribute("src", `${pathToImage}${img2}`);

    const heading = document.querySelector("h1");

    if(randomNumber1>randomNumber2){
        heading.innerHTML = "🚩Player 1 wins!";
    }else if(randomNumber1<randomNumber2){
        heading.innerHTML = "Player 2 wins! 🚩";
    }else{
        heading.innerHTML = "Draw!";
    }
}

refresh();