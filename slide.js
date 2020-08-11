
window.load = slide(1);
 
function slide(n) {
    var todasImg = 3;

    document.getElementById('imagemFundo').style.backgroundImage = `url('img/${n}.jpg')`;
    
    if(n == 1) {
        document.getElementById('txtImagem').innerHTML = '<div id="txtImagem">Engagement Ring</div>'
        
        
    } else {
        document.getElementById('txtImagem').innerHTML = '<div id="txtImagem">Modern Woman</div>'
        document.getElementById('circulo').innerHTML = '<a><img src="img/setaBranca.png"></a>'
        document.getElementById('explore').innerHTML = '<a>explore</a>'
    }

    botoes(n, todasImg)
}



// Efeito dos Botoes (1, 2 e 3)

function botoes(n, m) {
    document.getElementById('botoes').innerHTML = "";
    for(a = 1; a <= m; a++) {
        if(a == n) {
            document.getElementById('botoes').innerHTML += `<li id='selec' onclick='slide("${a}")'> ${a} </li>`;
            document.getElementById('botoes').innerHTML += `<li id='anel'></li>`;
        } else {
            document.getElementById('botoes').innerHTML += `<li id='naoselec' onclick='slide("${a}")'>${a}</li>`;
        }
    }
}