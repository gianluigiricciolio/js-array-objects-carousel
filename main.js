'use strict';

const images = [
    {
        image: 'img/01.webp',
        // uso i doppi apici così da includere gli apici come carattere e viceversa (backtick nel caso di entrambi)
        title: "Marvel\'s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

// INDICE DELL IMMAGINE CORRENTE
let currentImg = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const img = document.querySelector('.items img');
const title = document.querySelector('.content h2')
const descr = document.querySelector('.content p');


prev.addEventListener('click', pressedPrevious);
next.addEventListener('click', pressedNext);

// INIZIALMENTE L IMMAGINE VISUALIZZATA E QUELLA IN POSIZIONE 0 DELL ARRAY
img.src=images[currentImg].image;
// DEVO ASSEGNARE ANCHE LE ALTRE INFORMAZIONI DELL IMMAGINE SPECIFICA E MODIFICARLE AL CLICK DEI PULSANTI


// FUNCTIONS

function pressedPrevious () {
    console.log('prev');
    // DECREMENTO INDICE E MOSTRO L IMMAGINE A QUELL INDICE CORRENTE
    if(currentImg>0){
        currentImg--;
    // Aggiungere il **ciclo infinito** del carosello
    } else {
        currentImg = images.length-1;
    }
    setCurrentImage();
    
}

function pressedNext () {
    console.log('next');
    // INCREMENTO INDICE E MOSTRO L IMMAGINE A QUELL INDICE CORRENTE
    if(currentImg < images.length-1){
        currentImg++;
    // Aggiungere il **ciclo infinito** del carosello
    } else {
        currentImg = 0;
        setCurrentImage();
    }
    setCurrentImage();
    
}

function setCurrentImage() {
    console.log(currentImg);
    img.src=images[currentImg].image;
    title.innerText = images[currentImg].title;
    descr.innerText = images[currentImg].text;
}