let sessao = document.getElementById('select')
let setaSelect = document.getElementById('setaSelect')
let personagem = document.querySelectorAll('.personagem')

//Aparecer barra de personagens
sessao.addEventListener('mouseover', function(){
    console.log('Funciona')
    sessao.style.transform = "translateX(0px)";
    setaSelect.style.transform = "rotate(180deg)"
})
sessao.addEventListener('mouseout', () => {
    sessao.style.transform = "translateX(100px)"
    setaSelect.style.transform = "rotate(0deg)"
})

console.info(personagem)

//Seleciona o personagem
personagem.forEach(function(persona){
    console.info(persona)
    persona.addEventListener('click', function(){
        let selecionado = document.getElementsByClassName('selecionado')[0];
        console.info(selecionado)
        console.info("selecionado" + persona)
        selecionado.classList.remove('selecionado');
        persona.classList.add('selecionado');
        addPersona(persona.id)
    });
})

//busca os dados dos personagens
async function dados(nomePersona){
    let arquivos = await fetch("dados.json")
    arquivos = await arquivos.json()
    arquivos = arquivos.personagens

    console.info(arquivos)

    if(nomePersona === "cavaleiroDaLua"){
        console.log('Cavaleiro')
        return arquivos.cavaleiroDaLua[0]
    }else if(nomePersona === "Justiceiro"){
        console.log('Justiceiro')
        return arquivos.justiceiro[0]
    }else if(nomePersona === "Doom"){
        console.log('Doom')
        return arquivos.doom[0]
    }else if(nomePersona === "StarLord"){
        console.log('StarLord')
        return arquivos.starLord[0]
    }
}

//adicona os personagens a tela Principal
async function addPersona(nome){
    let personagem = await dados(nome)
    let back = document.getElementById('background')
    let fotoPers = document.getElementById('FotoPersona')
    let nomePersona = document.getElementById('NomePersonagem')
    let historia = document.getElementById('historia')
    console.info(personagem)

    back.style.background = `url(${personagem.background}) center center no-repeat`
    back.style.backgroundSize = "cover"
    back.classList = []
    back.classList.add(nome)
    console.log(personagem.background)
    nomePersona.innerText = personagem.nome
    historia.innerText = personagem.historia
    favicon(personagem.miniFoto)
}

function favicon(caminho){
    let favicon = document.querySelectorAll('link[type="image/x-icon"]')
    let head = document.head

    console.info(favicon[0])
    if(favicon.length == 1){
        favicon[0].remove()
    }

    head.innerHTML += `<link rel="shortcut icon" href="${caminho}" type="image/x-icon">`
}

addPersona("cavaleiroDaLua")