let caixa = document.getElementById('caixa_principal')

function nivel(){
    let estado = ''
    if (resultado < 4){
        estado = 'triste'
    }

    if (resultado >= 4 && resultado < 6){
        estado = 'neutro'
    }

    if (resultado >= 6 && resultado < 9){
        estado = 'feliz'
    }

    if (resultado > 9){
        estado = 'muito feliz'
    }
    return estado
}

function cria_questionario(){
    if (num < questionario.length){
        let quant = 0
        var ind = 1
        let mm = 0
        
        for(let q = 0; q < questionario[num].length ; q++){
            quant = q
        }
        
        caixa.innerHTML += `
        <img src="pexels-febe-vanermen-17827719.jpg" alt="dfgh">
        <h2>`+ questionario[num][0] +`</h2>
        `
        while(quant >= ind){
            if(mm == 0){
                caixa.innerHTML += `
                <a href="#" onclick = "mais()"><p>`+questionario[num][ind]+`</p></a>
                `
                ind ++
                mm ++
            }else{
                caixa.innerHTML += `
                <a href="#" onclick = "menos()"><p>`+questionario[num][ind]+`</p></a>
                `
                ind ++
            }
        }
        num ++
        
    }else{
        let cabecario = document.getElementById('cabecario')
        cabecario.innerHTML = ``
        cabecario.style.display = "none"
        if (resultado < 4){
            caixa.innerHTML += `
            <div id="final">
                <h1>você esta triste</h1>
                <img src="pexels-febe-vanermen-17827719.jpg" alt="fg">
                <p>eu sei que esta dificil mas tente a cada dia melhorar um pouco , tente ver graça nas pequenas coisas da vida</p>
            </div>
            `
        }
    
        if (resultado >= 4 && resultado < 6){
            caixa.innerHTML += `
            <div id="final">
                <h1>neutro</h1>
                <img src="pexels-febe-vanermen-17827719.jpg" alt="fg">
                <p>você anda meio triste mas consegue ver a felicidade nas pequenas coisas, procuri ir por esse caminho da paz e alegria, nos acreditamos em você!</p>
            </div>
            `
        }
    
        if (resultado >= 6 && resultado < 9){
            caixa.innerHTML += `
            <div id="final">
                <h1>você é feliz !</h1>
                <img src="pexels-febe-vanermen-17827719.jpg" alt="fg">
                <p>você já é feliz, mas busque melhorar a cada dia, tenha mais empatia e não se abale quando tiver uma dificuldade.</p>
            </div>
            `
        }
    
        if (resultado > 9){
            caixa.innerHTML += `
            <div id="final">
                <h1>você é muito feliz !!!</h1>
                <img src="pexels-febe-vanermen-17827719.jpg" alt="fg">
                <p>constinui assim, lembre-se de sempre buscar a paz e a felicidade interior!</p>
            </div>
            `
        }
    }
}

function mais() {
    resultado ++
    console.log(resultado)
    caixa.innerHTML = ``
    cria_questionario()
}

function menos() {
    resultado --
    console.log(resultado)
    caixa.innerHTML = ``
    cria_questionario()
}

function quantos (){
    var quant = 0
    for(let q = 0; q < questionario[num].length ; q++){
        quant = q
    }
    return quant
}

const questionario = [
    [
        'voce prefere estar',
        'com pessoas',
        'sozinho' ,
    ],

    [
        'voce se considera',
        'feliz' ,
        'triste',
    ],

    [
        'como se sente agora',
        'alegre',
        'cabisbaixo'
    ],

    [
        'você vê este copo ',
        'meio cheio',
        'meio vazio'
    ],

    [
        'é da sua caracteristica ser ',
        'comprensivo',
        'iguinorante'
    ]
]

var quantidade = 0
var num = 0
let resultado = 5

cria_questionario()
