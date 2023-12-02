// Logica para el arbol de navidad

let leafs = "";

[10, 2].forEach(row => {
    new Array(row).fill('').forEach((v, i) => {
        leafs += ([
            ...Array(9 - i).fill("<span> <span>"),
            ...Array(1 + i * 2).fill("<span class='rojo'>*<span>"),
            ...Array(9 - i).fill("<span> <span>"),
        ].join(''))
        leafs += '<br>';
    })
})
document.getElementById("tree").innerHTML = leafs;

let animacion = document.querySelectorAll(".rojo");

function animar() {
    for (let i = 0; i < animacion.length; i++) {
        let time = i / 20 + 1;
        animacion[i].style.animation = "colores " + time + "s infinite";
    }
}
window.addEventListener('load', animar);

// Logica para el copo de nieve

function createSnowflake() {
    const snowflake = document.createElement('img');
    snowflake.classList.add('snowflake');
    snowflake.src = './copito.png';
    snowflake.style.width = '30px';
    snowflake.style.height = '20px';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);
