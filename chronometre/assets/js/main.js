function meuScoop() {
    const container = document.querySelector(".container");
    const relo = container.querySelector(".relo");
    let segundos = 0;
    let timer;

    document.addEventListener("click", function (e) {
        const el = e.target;
        if (el.classList.contains("reinitialiser")) {
            clearInterval(timer);
            relo.classList.remove("enPause");
            segundos = 0;
            relo.innerHTML = "00:00:00";
        }
        if (el.classList.contains("pause")) {
            clearInterval(timer);
            relo.classList.add("enPause");
        }
        if (el.classList.contains("commencer")) {
            relo.classList.remove("pausado");
            clearInterval(timer);
            iniciaRelogio()
        }
    })

    function iniciaRelogio() {
        timer = setInterval(function () {
            called = true;
            segundos++
            relo.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "GMT"
        })
    }
}

meuScoop();