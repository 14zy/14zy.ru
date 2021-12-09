const db = new GoogleSpreadsheetsDb(
    'AIzaSyBdjsu_0mERhpzaz79MxeFzhcyqsiniImc',
    '13diJ_0dKecvRbLj9AsEnNQ4WEhZpivq11KWK9gLEWz0'
);

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

var query = getQueryParams(document.location.search);
 
  if (query.meme) {
      console.log(query.meme);
    
    db.getAll('Memes!A1:H55', (err, rows) => {
        meme = rows[parseInt(query.meme) -1];
        console.log(meme);

        window.memeTitle.innerHTML = "Видео с мемом №" + meme["Card Number"] + " – " +  meme["Card Name"];
        // window.memeId.innerHTML = 
        // window.memeName.innerHTML = 

        console.log( getId(meme["Card Video"]) );
        yotubeID = getId(meme["Card Video"]);

        iframeMarkup = '<iframe width="100%" height="400px" src="//www.youtube.com/embed/' 
        + yotubeID + '" frameborder="0" allowfullscreen></iframe>';

        console.log(iframeMarkup);

        window.memeVideo.innerHTML = iframeMarkup;
    });

 }



//   <iframe id="memeVideo" width="100%" height="400px" src="https://www.youtube.com/embed/hkzMaRLIIzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe