let elCHess = document.querySelector(".chess");
let elDiv;
let textArr = ["a","b","c","d","e","f","g","h"];
let index = 0;
let elFigursBox = document.querySelector(".figures");

elFigursBox.innerHTML = ` <button class="figures__btn" id="4a"><img class="chess__figures" src="img/4a.svg" alt="4a"></button><button class="figures__btn" id="feruz"><img class="chess__figures" src="img/feruz.svg" alt="feruz"></button><button class="figures__btn" id ="ot"><img class="chess__figures" src="img/ot.svg" alt="ot"></button><button class="figures__btn" id="fil"><img class="chess__figures" src="img/fil.svg" alt="fil"></button>`;

createObjArr.forEach(item => {
    elDiv = document.createElement("div");
    elDiv.className = "box";
    elDiv.id = `${item.id}`;
    elDiv.style.background = `${item.color}`;

    if(item.id >= 57 && item.id <= 65){
        elDiv.textContent = textArr[index];
        index++;
        if(item.id % 2 == 0)elDiv.style.color = "#b58863";
        else elDiv.style.color = "#f0d9b5";
        elDiv.backgroundSize = "10px 10px";
    }
    elCHess.appendChild(elDiv);
})


function targetItem(imgLink,figure){
    let block = elCHess.querySelectorAll(".box");
    block.forEach(div => {
        div.addEventListener("click", e => {
            e.target.style.backgroundImage = `url(${imgLink})`;
        })
    })
}

elFigursBox.querySelectorAll(".figures__btn").forEach(figure => {
    figure.addEventListener("click", e => {
        let targetBg = e.target.querySelector(".chess__figures").src;
        let figureArr = [];
        figureArr.push(e.target)
        targetItem(targetBg,figureArr);
    })
})
