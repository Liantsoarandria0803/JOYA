let objPanier={};
fetch("asset/js/data/pretAporter.json")
   .then(response => response.json())
   .then(data => {
        console.log(data);
        let stock = 0;
        let content = "";
        for(let produit in data) {
            // Générer un identifiant unique pour chaque bouton
            const boutonId = `bouton-${produit}`;
            
            content += `<button id="${boutonId}">
                            <div class="nouveaute">
                                <div class="photo">
                                    <img src="${data[produit].image}" alt="">
                                </div>
                                <div class="details_produit">
                                    <h3 class="nom">${data[produit].nom}</h3>
                                    <h3 class="prix">${data[produit].price}</h3>
                                </div>
                            </div>
                        </button>`;
            
            stock++;
        }
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
             document.querySelector('main').innerHTML=`<h1> VOIR TOUS LES PRODUITS POUR ACHETER </h1>`;          
                         
            });
        });
    })
   .catch(error => {
        console.error(error);
    });
