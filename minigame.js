const mainDiv$$ = document.querySelector(".game")
const groundImg$$ = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure." +
        "notion-static.com%2F54035cd6-3ff0-4114-a446-cb9e75c5991d%2Fdirt.png?table=bloc" +
        "k&id=0a068803-f8f7-44b5-b475-e7ec99be8adb&spaceId=faede908-2418-4361-917b-a6b0" +
        "d74a558b&width=770&userId=648c0ab0-ce80-4ba6-ac9b-213e7002dd65&cache=v2"

const moleImg$$ = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure." +
        "notion-static.com%2F5f6fe21a-5bec-40e2-a009-d5ae160a1f43%2Fmole.png?table=bloc" +
        "k&id=bf8e1d52-8ba9-4471-adb5-4c1c0b3fa680&spaceId=faede908-2418-4361-917b-a6b0" +
        "d74a558b&width=610&userId=648c0ab0-ce80-4ba6-ac9b-213e7002dd65&cache=v2"

const startButtom = document.querySelector(".startGame")

startButtom.addEventListener("click", () => build());

const build = () => {

    puntuacion = 0;
    let newScore = document.querySelector(".score");
    newScore.textContent = ("score: " + points);

    for (i = 0; i < 9; i++) {
        const gameDiv$$ = document.querySelector(".hole");
        const hole = document.createElement("img");

        hole.addEventListener("click", () => hit(hole));

        hole.setAttribute("src", groundImg$$);
        hole
            .classList
            .add("holes");

        gameDiv$$.appendChild(hole)
    }
    play()
}
    const play = () => {
        const holes = document.querySelectorAll(".holes");

        let timeOut = 1000;

        let before = 0;

        for (let i = 29; i > 0; i--) {

            let random = Math.floor(Math.random() * 9);

            setTimeOut(() => {

                if (i != 0) {
                    const newScore = document.querySelector(".counter");

                    ground[before].setAttribute("src", groundImg$$);
                    ground[before]
                        .classList
                        .replace(".mole", "holes");
                    before = random;

                    if (i < 10) {
                        newScore.textContent = "00:0" + i
                    } else {
                        newScore.textContent = "00:" + i;
                    }
                } else {
                    const newScore = document.querySelector(".counter");
                    holes[random].getAttribute("src", groundImg$$);
                    holes[random].classList.replace("mole", "holes")
                    newScore.textContent = "00:0" + i;
                    
                    check();

                }
            }, timeOut)

            timeOut += 1000;
        }
    }

const hit = (hole) => {
    if (ground.className == "digglet") {

        points += 10;

        let newScore = document.querySelector(".score")
        newScore.textContent = ("score: " + points);
    }
}

const check = () => {
    if( points >= 200){
        mainDiv$$.innerHTML = `you win`
    }
    else{
        mainDiv$$.innerHTML = `you lose`
    }
}