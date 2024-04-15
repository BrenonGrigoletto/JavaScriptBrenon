    const appDiv = document.createElement("div");
    appDiv.classList.add("counter");

    const totalContainer = document.createElement("div");
    totalContainer.innerHTML = "<h1>Total</h1><div class='count' id='contador_total'>0</div>";
    appDiv.appendChild(totalContainer);

    const homemContainer = createGenderContainer("homem", "Homens", "homens.jpg");
    homemContainer.classList.add("gender-container");
    appDiv.appendChild(homemContainer);

    const mulherContainer = createGenderContainer("mulher", "Mulheres", "mulheres.jpg");
    mulherContainer.classList.add("gender-container");
    appDiv.appendChild(mulherContainer);

    const resetButton = document.createElement("div");
    resetButton.classList.add("reset-button");
    resetButton.innerHTML = "&#128260;";
    resetButton.addEventListener("click", reiniciarContagem);
    appDiv.appendChild(resetButton);

    document.body.appendChild(appDiv);
    function createGenderContainer(gender, label, imgSrc) {
        const genderContainer = document.createElement("div");
        genderContainer.innerHTML = `<div class="label"><h1>${label}</h1></div><div class="image-container"><img src="${imgSrc}" alt="${gender}" class="image"><div class="button-group"><button class="button incre" onclick="incrementar('${gender}')">+</button><button class="button decre" onclick="decrementar('${gender}')">-</button></div></div><div class="count" id="cont_${gender}">0</div>`;
        return genderContainer;
    }
    let contHomem = 0;
    let contMulher = 0;
    function contUpdate() {
        document.getElementById('contador_total').textContent = contHomem + contMulher;
        document.getElementById('cont_homem').textContent = contHomem;
        document.getElementById('cont_mulher').textContent = contMulher;
    }
    function incrementar(gender) {
        if (gender === 'homem') {
            contHomem++;
        } else if (gender === 'mulher') {
            contMulher++;
        }
        contUpdate();
    }
    function decrementar(gender) {
        if (gender === 'homem' && contHomem > 0) {
            contHomem--;
        } else if (gender === 'mulher' && contMulher > 0) {
            contMulher--;
        }
        contUpdate();
    }
    function reiniciarContagem() {
        contHomem = 0;
        contMulher = 0;
        contUpdate();
    }
