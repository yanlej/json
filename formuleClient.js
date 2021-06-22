var giteHurle ="https://raw.githubusercontent.com/yanlej/json/main/fichierjson.json";

var afficheFormules = document.getElementById("afficheFormules");

fetch(giteHurle)
    .then(res => {
            if (res.ok){
                res.json().then(data => {
                    for(i=0;i<data.formules.length;i++){
                        var img = document.createElement("img");
                        img.className = "image";
                        img.src = data.formules[i].image
                        afficheFormules.appendChild(img);
                        var titres = document.createElement("h4");
                        titres.className = "titre";
                        titres.innerHTML = data.formules[i].titre
                        afficheFormules.appendChild(titres);
                        var description = document.createElement("p");
                        description.className = "description";
                        description.innerHTML = data.formules[i].description
                        afficheFormules.appendChild(description);
                    }
                })
            } else {
                document.getElementById("erreur").innerHTML = "Oups :(";
            }
        })