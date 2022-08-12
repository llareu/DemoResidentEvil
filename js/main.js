const body = document.body;

setInterval(bloodRainerFall, 10);

function bloodRainerFall () {

    bloodDrop = document.createElement('i');

    bloodDrop.classList.add('fa-solid');
    bloodDrop.classList.add('fa-droplet');

    bloodDrop.style.fontSize = Math.random() * 7 + 'px';

    bloodDrop.style.animationDuration = Math.random() * 4 + 's';

    bloodDrop.style.opacity = Math.random() + 0.3;

    bloodDrop.style.right = Math.random() * window.innerWidth + 'px';

    body.appendChild(bloodDrop);

    setTimeout(() => {
        bloodDrop.remove();
    }, 6000);

}