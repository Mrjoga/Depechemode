const artigos = [
    { title: "Depeche Mode", url: "index.html" },
    { title: "New Life", url: "New Life.html" },
    { title: "Speak & Spell", url: "Speakspell.html" },
    { title: "Photographic", url: "Photographic.html" },
];

const rascunhos = [
    { title: "Shout!", url: "Shout.html" },
    { title: "Just Can't Get Enough", url: "Justcantgetenough.html" },
    { title: "A Broken Frame", url: "Abrokenframe.html" },
    { title: "A Photograph Of You.html", url: "Aphotographofyou.html" },
    { title: "Love In Itself", url: "Loveinitself.html" },
    { title: "Love In Itself.2 And Live Tracks", url: "Loveinitself2andlivetracks.html" },
];

const listaArtigos = document.getElementById('artigos-list');

artigos.forEach(artigo => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${artigo.url}">${artigo.title}</a>`;
    listaArtigos.appendChild(li);
});

const liRascunhos = document.createElement('li');
liRascunhos.innerHTML = "<strong class='rascunho-title'>Rascunhos</strong>";
listaArtigos.appendChild(liRascunhos);

rascunhos.forEach(rascunho => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${rascunho.url}">${rascunho.title}</a>`;
    listaArtigos.appendChild(li);
});
