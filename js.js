function stampaPoltrone() {
    let r = document.getElementById("righe").value;
    let c = document.getElementById("colonne").value;
    if (r < 5 || r > 20 || c < 5 || c > 20) {
        alert("Inserisci valori appropriati tra 5 e 20!!!");
        return; 
    }
    document.getElementById('stampaPoltrone').innerHTML = '';
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            createImageElement('img/poltronaNera.png');
        }
        document.getElementById('stampaPoltrone').appendChild(document.createElement('br'));
    }
}
function createImageElement(urlImmagine) {
    var img = document.createElement('img');
    img.src = urlImmagine;
    img.style.width = '40px';
    img.style.height = '40px';

    img.setAttribute('data-color', 'nero');

    img.addEventListener('click', function() {
        cambiaColorePoltrona(img);
    });

    document.getElementById('stampaPoltrone').appendChild(img);
}

function cambiaColorePoltrona(img) {
    var statoCorrente = img.getAttribute('data-color');
    if (statoCorrente === 'nero') {
        img.src = 'img/poltronaRossa.png';
        img.setAttribute('data-color', 'rosso');
    } else {
        img.src = 'img/poltronaNera.png'; 
        img.setAttribute('data-color', 'nero');
    }
}