let i=0;
let arrayNav=document.querySelectorAll('.element')
arrayNav.forEach( bouton => {
    bouton.addEventListener('click', function(){
        if(this.id=="chaussure"){
            fetch("../js/data/chaussure.json")
   .then(response => response.json())
   .then(data => {
        let stock = 0;
        let content = "";
        for(let produit in data) {
            // Générer un identifiant unique pour chaque bouton
            const boutonId = `${produit}`;
            
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
       // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
                // Récupérer l'identifiant du bouton cliqué
                const boutonClique = this.id;
                
                // Trouver les informations du produit correspondant
                const produitInfo = data[boutonClique];
                
                // Mettre à jour le contenu de la div.infoprod
                document.querySelector('.main').innerHTML = `
                <div class="infoprod">
                    <div class="imgProd">
                        <img src="${produitInfo.image}" alt="">
                    </div>
                    <div class="prodInfo">
                        <div class="titreETprix">
                            <h1>${produitInfo.nom}</h1> <br>
                            <h2 id="price">${produitInfo.price} </h2>
                        </div>
                        <div class="ajoutPanier">
                            <span>Pointure</span>
                            <input id="pointure" type="number" min="12"> <br> <br>
                            <span>Quantite</span>
                            <input id="quantite" type="number" min="0"> <br><br>
                            <button id="ajout">AJOUTER AU PANIER</button>
                        </div>
                        <ul>
                            <li>
                                <img src="./../img/rea_customer_service.png" alt="">
                                <span>Service  client au 06 54 94 19</span>
                            </li>
                            <li>
                                <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                <span>Paiement sécurisé &3x sans frais avec Aima</span>
                            </li>
                            <li>
                                <img src="./../img/rea_pdt_shipping.png" alt="">
                                <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                            </li>
                            <li>
                                <img src="./../img/rea_click_collect.png" alt="">
                                <span>Click et collect à la Grande Motte</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                  `;
                    document.getElementById("ajout").onclick=function(){// clique sur le bouton ajout
                         let pointure=parseFloat(document.getElementById("pointure").value)
                         let quantite=parseFloat(document.getElementById("quantite").value)
                         price=parseFloat(produitInfo.price.split(" ")[0].replace(',','.'))
                         let totalPrice=price*quantite
                         // mise a jour de la page 
                         document.querySelector('.main').innerHTML = `
                         <div class="infoprod">
                             <div class="imgProd">
                                 <img src="${produitInfo.image}" alt="">
                             </div>
                             <div class="prodInfo">
                                 <div class="titreETprix">
                                     <h1>${produitInfo.nom}</h1> <br>
                                     <h2 id="price">${produitInfo.price} </h2>
                                 </div>
                                 <div class="ajoutPanier">
                                     <span>Pointure</span>
                                     <input id="pointure" type="number" min="12"> <br> <br>
                                     <span>Quantite</span>
                                     <input id="quantite" type="number" min="0"> <br><br>
                                     <button id="ajout">AJOUTER AU PANIER</button>
                                 </div>
                                 <ul>
                                     <li>
                                         <img src="./../img/rea_customer_service.png" alt="">
                                         <span>Service  client au 06 54 94 19</span>
                                     </li>
                                     <li>
                                         <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                         <span>Paiement sécurisé &3x sans frais avec Aima</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_pdt_shipping.png" alt="">
                                         <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_click_collect.png" alt="">
                                         <span>Click et collect à la Grande Motte</span>
                                     </li>
                                 </ul>
                             </div>
                              <div class="opacity"></div>
                                <div id="result"></div>
                             </div>
                            
                           `;
                        document.getElementById("result").innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                                                        <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>
                                                        <button class="confirm">CONFIRMER</button>`;
                         document.querySelector('.confirm').onclick=function(){
                            let panier=parseInt(document.getElementById("panierStock").innerText);
                            panier=panier+1;
                            document.getElementById("panierStock").textContent=panier;
                             // A la  case de depart
                              // Mettre à jour le contenu de la div.infoprod
                              document.querySelector('.main').innerHTML =`
                              <div id="PanierRender">
                                 <ul id="panierList">
                 
                                 </ul>
                             </div>
                              <div id="product-list-header">
                              <div class="block-category">
                                  <div id="category-description">
                                      <p>Votre boutique en ligne vous propose l'intégralité de ses produits nouvelles collections. Commandez en ligne et faites vous livrer ou bien profitez de notre service Click&nbsp;and Collect afin de venir récuperer votre commande dans votre boutique de produits bijoux en ligne | Joya le store</p>
                                  </div>
                              </div>
                          </div> 
                          <div id="block_nouveaute">
                              
                          </div>`;
                          for(let produit in data) {
                             // Générer un identifiant unique pour chaque bouton
                             const boutonId = `${produit}`;
                             
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
                         let newelement=document.createElement('li');
                         newelement.innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                         <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>`;
                         let listPan=document.getElementById("panierList");
                         listPan.appendChild(newelement);
 
                        // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
                         document.getElementById("block_nouveaute").innerHTML = content;    }                    
                           } 
            });
        });
    })
   .catch(error => {
        console.error(error);
    });
        }
        else if(this.id=="accessoires"){
            document.querySelector(".special").textContent="Accessoires";
            fetch("../js/data/Accessoire.json")
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
       // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
                // Récupérer l'identifiant du bouton cliqué
                const boutonClique = this.id.split('-')[1];
                
                // Trouver les informations du produit correspondant
                const produitInfo = data[boutonClique];
                
              // Mettre à jour le contenu de la div.infoprod
              document.querySelector('.main').innerHTML = `
              <div class="infoprod">
                  <div class="imgProd">
                      <img src="${produitInfo.image}" alt="">
                  </div>
                  <div class="prodInfo">
                      <div class="titreETprix">
                          <h1>${produitInfo.nom}</h1> <br>
                          <h2 id="price">${produitInfo.price} </h2>
                      </div>
                      <div class="ajoutPanier">
                          <span>Pointure</span>
                          <input id="pointure" type="number" min="12"> <br> <br>
                          <span>Quantite</span>
                          <input id="quantite" type="number" min="0"> <br><br>
                          <button id="ajout">AJOUTER AU PANIER</button>
                      </div>
                      <ul>
                          <li>
                              <img src="./../img/rea_customer_service.png" alt="">
                              <span>Service  client au 06 54 94 19</span>
                          </li>
                          <li>
                              <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                              <span>Paiement sécurisé &3x sans frais avec Aima</span>
                          </li>
                          <li>
                              <img src="./../img/rea_pdt_shipping.png" alt="">
                              <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                          </li>
                          <li>
                              <img src="./../img/rea_click_collect.png" alt="">
                              <span>Click et collect à la Grande Motte</span>
                          </li>
                      </ul>
                  </div>
                  </div>\
                  <div id="block_nouveaute">
                    
                </div>
                `;
                  document.getElementById("ajout").onclick=function(){// clique sur le bouton ajout
                       let pointure=parseFloat(document.getElementById("pointure").value)
                       let quantite=parseFloat(document.getElementById("quantite").value)
                       price=parseFloat(produitInfo.price.split(" ")[0].replace(',','.'))
                       let totalPrice=price*quantite
                       // mise a jour de la page 
                       document.querySelector('.main').innerHTML = `
                       <div class="infoprod">
                           <div class="imgProd">
                               <img src="${produitInfo.image}" alt="">
                           </div>
                           <div class="prodInfo">
                               <div class="titreETprix">
                                   <h1>${produitInfo.nom}</h1> <br>
                                   <h2 id="price">${produitInfo.price} </h2>
                               </div>
                               <div class="ajoutPanier">
                                   <span>Pointure</span>
                                   <input id="pointure" type="number" min="12" required> <br> <br>
                                   <span>Quantite</span>
                                   <input id="quantite" type="number" min="0" required> <br><br>
                                   <button id="ajout">AJOUTER AU PANIER</button>
                               </div>
                               <ul>
                                   <li>
                                       <img src="./../img/rea_customer_service.png" alt="">
                                       <span>Service  client au 06 54 94 19</span>
                                   </li>
                                   <li>
                                       <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                       <span>Paiement sécurisé &3x sans frais avec Aima</span>
                                   </li>
                                   <li>
                                       <img src="./../img/rea_pdt_shipping.png" alt="">
                                       <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                                   </li>
                                   <li>
                                       <img src="./../img/rea_click_collect.png" alt="">
                                       <span>Click et collect à la Grande Motte</span>
                                   </li>
                               </ul>
                           </div>
                            <div class="opacity"></div>
                              <div id="result"></div>
                           </div>
                           <div id="block_nouveaute">
                    
                </div>
                         `;
                      document.getElementById("result").innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                                                      <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>
                                                      <button class="confirm">CONFIRMER</button>`;
                       document.querySelector('.confirm').onclick=function(){
                          let panier=parseInt(document.getElementById("panierStock").innerText);
                          panier=panier+1;
                          document.getElementById("panierStock").textContent=panier;
                           // Mettre à jour le contenu de la div.infoprod
                           document.querySelector('.main').innerHTML =`
                           <div id="PanierRender">
                              <h1>VOTRE PANIER</h1>
                              <ul id="panierList">
              
                              </ul>
                              <button class="element" id="masquer">MASQUER</button>
                          </div>
                           <div id="product-list-header">
                           <div class="block-category">
                               <div id="category-description">
                                   <p>Votre boutique en ligne vous propose l'intégralité de ses produits nouvelles collections. Commandez en ligne et faites vous livrer ou bien profitez de notre service Click&nbsp;and Collect afin de venir récuperer votre commande dans votre boutique de produits bijoux en ligne | Joya le store</p>
                               </div>
                           </div>
                       </div> 
                       <div id="block_nouveaute">
                           
                       </div>`;
                       for(let produit in data) {
                          // Générer un identifiant unique pour chaque bouton
                          const boutonId = `${produit}`;
                          
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
                      let newelement=document.createElement('li');
                      newelement.innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                      <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>`;
                      let listPan=document.getElementById("panierList");
                      listPan.appendChild(newelement);

                     // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
                      document.getElementById("block_nouveaute").innerHTML = content;    }                    
                        } 
          });
      });
  })
 .catch(error => {
      console.error(error);
  });
        }
        else if(this.id=="sac"){
            document.querySelector(".special").textContent="SAC";
            let panier=parseInt(document.getElementById("panierStock").innerText);
     fetch("../js/data/SacPetiteMaroquinerie.json")
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
        //document.getElementById("text2").textContent = "Il existe " + stock + " produits";
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
                // Récupérer l'identifiant du bouton cliqué
                const boutonClique = this.id.split('-')[1];
                
                // Trouver les informations du produit correspondant
                const produitInfo = data[boutonClique];
                
               // Mettre à jour le contenu de la div.infoprod
               document.querySelector('.main').innerHTML = `
               <div class="infoprod">
                   <div class="imgProd">
                       <img src="${produitInfo.image}" alt="">
                   </div>
                   <div class="prodInfo">
                       <div class="titreETprix">
                           <h1>${produitInfo.nom}</h1> <br>
                           <h2 id="price">${produitInfo.price} </h2>
                       </div>
                       <div class="ajoutPanier">
                           <span>Pointure</span>
                           <input id="pointure" type="number" min="12"> <br> <br>
                           <span>Quantite</span>
                           <input id="quantite" type="number" min="0"> <br><br>
                           <button id="ajout">AJOUTER AU PANIER</button>
                       </div>
                       <ul>
                           <li>
                               <img src="./../img/rea_customer_service.png" alt="">
                               <span>Service  client au 06 54 94 19</span>
                           </li>
                           <li>
                               <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                               <span>Paiement sécurisé &3x sans frais avec Aima</span>
                           </li>
                           <li>
                               <img src="./../img/rea_pdt_shipping.png" alt="">
                               <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                           </li>
                           <li>
                               <img src="./../img/rea_click_collect.png" alt="">
                               <span>Click et collect à la Grande Motte</span>
                           </li>
                       </ul>
                   </div>
                   </div>
                 `;
                   document.getElementById("ajout").onclick=function(){// clique sur le bouton ajout
                        let pointure=parseFloat(document.getElementById("pointure").value)
                        let quantite=parseFloat(document.getElementById("quantite").value)
                        price=parseFloat(produitInfo.price.split(" ")[0].replace(',','.'))
                        let totalPrice=price*quantite
                        // mise a jour de la page 
                        document.querySelector('.main').innerHTML = `
                        <div class="infoprod">
                            <div class="imgProd">
                                <img src="${produitInfo.image}" alt="">
                            </div>
                            <div class="prodInfo">
                                <div class="titreETprix">
                                    <h1>${produitInfo.nom}</h1> <br>
                                    <h2 id="price">${produitInfo.price} </h2>
                                </div>
                                <div class="ajoutPanier">
                                    <span>Pointure</span>
                                    <input id="pointure" type="number" min="12" required> <br> <br>
                                    <span>Quantite</span>
                                    <input id="quantite" type="number" min="0" required> <br><br>
                                    <button id="ajout">AJOUTER AU PANIER</button>
                                </div>
                                <ul>
                                    <li>
                                        <img src="./../img/rea_customer_service.png" alt="">
                                        <span>Service  client au 06 54 94 19</span>
                                    </li>
                                    <li>
                                        <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                        <span>Paiement sécurisé &3x sans frais avec Aima</span>
                                    </li>
                                    <li>
                                        <img src="./../img/rea_pdt_shipping.png" alt="">
                                        <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                                    </li>
                                    <li>
                                        <img src="./../img/rea_click_collect.png" alt="">
                                        <span>Click et collect à la Grande Motte</span>
                                    </li>
                                </ul>
                            </div>
                             <div class="opacity"></div>
                               <div id="result"></div>
                            </div>
                          `;
                       document.getElementById("result").innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                                                       <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>
                                                       <button class="confirm">CONFIRMER</button>`;
                        document.querySelector('.confirm').onclick=function(){
                         
                           panier=panier+1;
                          
                           // Mettre à jour le contenu de la div.infoprod
                           document.querySelector('.main').innerHTML =`
                           <div id="PanierRender">
                           <h1>VOTRE PANIER</h1>
                           <ul id="panierList">
           
                           </ul>
                           <button class="element" id="masquer">MASQUER</button>
                          </div>
                           <div id="product-list-header">
                           <div class="block-category">
                               <div id="category-description">
                                   <p>Votre boutique en ligne vous propose l'intégralité de ses produits nouvelles collections. Commandez en ligne et faites vous livrer ou bien profitez de notre service Click&nbsp;and Collect afin de venir récuperer votre commande dans votre boutique de produits bijoux en ligne | Joya le store</p>
                               </div>
                           </div>
                       </div> 
                       <div id="block_nouveaute">
                           
                       </div>`;
                       for(let produit in data) {
                          // Générer un identifiant unique pour chaque bouton
                          const boutonId = `${produit}`;
                          
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
                      let newelement=document.createElement('li');
                      newelement.innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                      <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>`;
                      let listPan=document.getElementById("panierList");
                      listPan.appendChild(newelement);

                     // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
                      document.getElementById("block_nouveaute").innerHTML = content;    }                    
                        } 
           });
       });
   
   })
  .catch(error => {
       console.error(error);
   });

        }
        else if(this.id=="ncollect"){
            document.querySelector(".special").textContent="Nouvelle collection";
            fetch("../js/data/nouvelleCollection.json")
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
        //document.getElementById("text2").textContent = "Il existe " + stock + " produits";
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
                // Récupérer l'identifiant du bouton cliqué
                const boutonClique = this.id.split('-')[1];
                
                // Trouver les informations du produit correspondant
                const produitInfo = data[boutonClique];
                
                // Mettre à jour le contenu de la div.infoprod
                document.querySelector('.main').innerHTML = `
                <div class="infoprod">
                    <div class="imgProd">
                        <img src="${produitInfo.image}" alt="">
                    </div>
                    <div class="prodInfo">
                        <div class="titreETprix">
                            <h1>${produitInfo.nom}</h1> <br>
                            <h2 id="price">${produitInfo.price} </h2>
                        </div>
                        <div class="ajoutPanier">
                            <span>Pointure</span>
                            <input id="pointure" type="number" min="12"> <br> <br>
                            <span>Quantite</span>
                            <input id="quantite" type="number" min="0"> <br><br>
                            <button id="ajout">AJOUTER AU PANIER</button>
                        </div>
                        <ul>
                            <li>
                                <img src="./../img/rea_customer_service.png" alt="">
                                <span>Service  client au 06 54 94 19</span>
                            </li>
                            <li>
                                <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                <span>Paiement sécurisé &3x sans frais avec Aima</span>
                            </li>
                            <li>
                                <img src="./../img/rea_pdt_shipping.png" alt="">
                                <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                            </li>
                            <li>
                                <img src="./../img/rea_click_collect.png" alt="">
                                <span>Click et collect à la Grande Motte</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                  `;
                    document.getElementById("ajout").onclick=function(){// clique sur le bouton ajout
                         let pointure=parseFloat(document.getElementById("pointure").value)
                         let quantite=parseFloat(document.getElementById("quantite").value)
                         price=parseFloat(produitInfo.price.split(" ")[0].replace(',','.'))
                         let totalPrice=price*quantite
                         // mise a jour de la page 
                         document.querySelector('.main').innerHTML = `
                         <div class="infoprod">
                             <div class="imgProd">
                                 <img src="${produitInfo.image}" alt="">
                             </div>
                             <div class="prodInfo">
                                 <div class="titreETprix">
                                     <h1>${produitInfo.nom}</h1> <br>
                                     <h2 id="price">${produitInfo.price} </h2>
                                 </div>
                                 <div class="ajoutPanier">
                                     <span>Pointure</span>
                                     <input id="pointure" type="number" min="12"> <br> <br>
                                     <span>Quantite</span>
                                     <input id="quantite" type="number" min="0"> <br><br>
                                     <button id="ajout">AJOUTER AU PANIER</button>
                                 </div>
                                 <ul>
                                     <li>
                                         <img src="./../img/rea_customer_service.png" alt="">
                                         <span>Service  client au 06 54 94 19</span>
                                     </li>
                                     <li>
                                         <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                         <span>Paiement sécurisé &3x sans frais avec Aima</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_pdt_shipping.png" alt="">
                                         <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_click_collect.png" alt="">
                                         <span>Click et collect à la Grande Motte</span>
                                     </li>
                                 </ul>
                             </div>
                              <div class="opacity"></div>
                                <div id="result"></div>
                             </div>
                           `;
                        document.getElementById("result").innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                                                        <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>
                                                        <button class="confirm">CONFIRMER</button>`;
                         document.querySelector('.confirm').onclick=function(){
                            let panier=parseInt(document.getElementById("panierStock").innerText);
                            panier=panier+1;
                            document.getElementById("panierStock").textContent=panier;
                              // Mettre à jour le contenu de la div.infoprod
                              document.querySelector('.main').innerHTML =`
                              <div id="PanierRender">
                              <h1>VOTRE PANIER</h1>
                              <ul id="panierList">
              
                              </ul>
                              <button class="element" id="masquer">MASQUER</button>
                             </div>
                              <div id="product-list-header">
                              <div class="block-category">
                                  <div id="category-description">
                                      <p>Votre boutique en ligne vous propose l'intégralité de ses produits nouvelles collections. Commandez en ligne et faites vous livrer ou bien profitez de notre service Click&nbsp;and Collect afin de venir récuperer votre commande dans votre boutique de produits bijoux en ligne | Joya le store</p>
                                  </div>
                              </div>
                          </div> 
                          <div id="block_nouveaute">
                              
                          </div>`;
                          for(let produit in data) {
                             // Générer un identifiant unique pour chaque bouton
                             const boutonId = `${produit}`;
                             
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
                         let newelement=document.createElement('li');
                         newelement.innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                         <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>`;
                         let listPan=document.getElementById("panierList");
                         listPan.appendChild(newelement);
 
                        // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
                         document.getElementById("block_nouveaute").innerHTML = content;    }                    
                           }                   
            });
        });
    })
   .catch(error => {
        console.error(error);
    });
        }
        else if(this.id=="bijoux"){
            document.querySelector(".special").textContent="Bijoux";
            fetch("../js/data/Bijoux.json")
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
        //document.getElementById("text2").textContent = "Il existe " + stock + " produits";
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
                // Récupérer l'identifiant du bouton cliqué
                const boutonClique = this.id.split('-')[1];
                
                // Trouver les informations du produit correspondant
                const produitInfo = data[boutonClique];
                
                // Mettre à jour le contenu de la div.infoprod
                document.querySelector('.main').innerHTML = `
                <div class="infoprod">
                    <div class="imgProd">
                        <img src="${produitInfo.image}" alt="">
                    </div>
                    <div class="prodInfo">
                        <div class="titreETprix">
                            <h1>${produitInfo.nom}</h1> <br>
                            <h2 id="price">${produitInfo.price} </h2>
                        </div>
                        <div class="ajoutPanier">
                            <span>Pointure</span>
                            <input id="pointure" type="number" min="12"> <br> <br>
                            <span>Quantite</span>
                            <input id="quantite" type="number" min="0"> <br><br>
                            <button id="ajout">AJOUTER AU PANIER</button>
                        </div>
                        <ul>
                            <li>
                                <img src="./../img/rea_customer_service.png" alt="">
                                <span>Service  client au 06 54 94 19</span>
                            </li>
                            <li>
                                <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                <span>Paiement sécurisé &3x sans frais avec Aima</span>
                            </li>
                            <li>
                                <img src="./../img/rea_pdt_shipping.png" alt="">
                                <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                            </li>
                            <li>
                                <img src="./../img/rea_click_collect.png" alt="">
                                <span>Click et collect à la Grande Motte</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                  `;
                    document.getElementById("ajout").onclick=function(){// clique sur le bouton ajout
                         let pointure=parseFloat(document.getElementById("pointure").value)
                         let quantite=parseFloat(document.getElementById("quantite").value)
                         price=parseFloat(produitInfo.price.split(" ")[0].replace(',','.'))
                         let totalPrice=price*quantite
                         // mise a jour de la page 
                         document.querySelector('.main').innerHTML = `
                         <div class="infoprod">
                             <div class="imgProd">
                                 <img src="${produitInfo.image}" alt="">
                             </div>
                             <div class="prodInfo">
                                 <div class="titreETprix">
                                     <h1>${produitInfo.nom}</h1> <br>
                                     <h2 id="price">${produitInfo.price} </h2>
                                 </div>
                                 <div class="ajoutPanier">
                                     <span>Pointure</span>
                                     <input id="pointure" type="number" min="12"> <br> <br>
                                     <span>Quantite</span>
                                     <input id="quantite" type="number" min="0"> <br><br>
                                     <button id="ajout">AJOUTER AU PANIER</button>
                                 </div>
                                 <ul>
                                     <li>
                                         <img src="./../img/rea_customer_service.png" alt="">
                                         <span>Service  client au 06 54 94 19</span>
                                     </li>
                                     <li>
                                         <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                         <span>Paiement sécurisé &3x sans frais avec Aima</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_pdt_shipping.png" alt="">
                                         <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_click_collect.png" alt="">
                                         <span>Click et collect à la Grande Motte</span>
                                     </li>
                                 </ul>
                             </div>
                              <div class="opacity"></div>
                                <div id="result"></div>
                             </div>
                           `;
                        document.getElementById("result").innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                                                        <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>
                                                        <button class="confirm">CONFIRMER</button>`;
                         document.querySelector('.confirm').onclick=function(){
                            let panier=parseInt(document.getElementById("panierStock").innerText);
                            panier=panier+1;
                            document.getElementById("panierStock").textContent=panier;
                             // Mettre à jour le contenu de la div.infoprod
                             document.querySelector('.main').innerHTML =`
                             <div id="PanierRender">
                             <h1>VOTRE PANIER</h1>
                             <ul id="panierList">
             
                             </ul>
                             <button class="element" id="masquer">MASQUER</button>
                            </div>
                             <div id="product-list-header">
                             <div class="block-category">
                                 <div id="category-description">
                                     <p>Votre boutique en ligne vous propose l'intégralité de ses produits nouvelles collections. Commandez en ligne et faites vous livrer ou bien profitez de notre service Click&nbsp;and Collect afin de venir récuperer votre commande dans votre boutique de produits bijoux en ligne | Joya le store</p>
                                 </div>
                             </div>
                         </div> 
                         <div id="block_nouveaute">
                             
                         </div>`;
                         for(let produit in data) {
                            // Générer un identifiant unique pour chaque bouton
                            const boutonId = `${produit}`;
                            
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
                        let newelement=document.createElement('li');
                        newelement.innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                        <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>`;
                        let listPan=document.getElementById("panierList");
                        listPan.appendChild(newelement);

                       // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
                        document.getElementById("block_nouveaute").innerHTML = content;    }                    
                          }                   
            });
        });
    })
   .catch(error => {
        console.error(error);
    });
        }
        else if(this.id=="homme"){
            document.querySelector(".special").textContent="Homme";
            fetch("../js/data/homme.json")
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
       // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
        document.getElementById("block_nouveaute").innerHTML = content;

        // Ajouter un gestionnaire d'événements à chaque bouton
        document.querySelectorAll('button').forEach(bouton => {
            bouton.addEventListener('click', function() {
                // Récupérer l'identifiant du bouton cliqué
                const boutonClique = this.id.split('-')[1];
                
                // Trouver les informations du produit correspondant
                const produitInfo = data[boutonClique];
                
                // Mettre à jour le contenu de la div.infoprod
                document.querySelector('.main').innerHTML = `
                <div class="infoprod">
                    <div class="imgProd">
                        <img src="${produitInfo.image}" alt="">
                    </div>
                    <div class="prodInfo">
                        <div class="titreETprix">
                            <h1>${produitInfo.nom}</h1> <br>
                            <h2 id="price">${produitInfo.price} </h2>
                        </div>
                        <div class="ajoutPanier">
                            <span>Pointure</span>
                            <input id="pointure" type="number" min="12"> <br> <br>
                            <span>Quantite</span>
                            <input id="quantite" type="number" min="0"> <br><br>
                            <button id="ajout">AJOUTER AU PANIER</button>
                        </div>
                        <ul>
                            <li>
                                <img src="./../img/rea_customer_service.png" alt="">
                                <span>Service  client au 06 54 94 19</span>
                            </li>
                            <li>
                                <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                <span>Paiement sécurisé &3x sans frais avec Aima</span>
                            </li>
                            <li>
                                <img src="./../img/rea_pdt_shipping.png" alt="">
                                <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                            </li>
                            <li>
                                <img src="./../img/rea_click_collect.png" alt="">
                                <span>Click et collect à la Grande Motte</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                  `;
                    document.getElementById("ajout").onclick=function(){// clique sur le bouton ajout
                         let pointure=parseFloat(document.getElementById("pointure").value)
                         let quantite=parseFloat(document.getElementById("quantite").value)
                         price=parseFloat(produitInfo.price.split(" ")[0].replace(',','.'))
                         let totalPrice=price*quantite
                         // mise a jour de la page 
                         document.querySelector('.main').innerHTML = `
                         <div class="infoprod">
                             <div class="imgProd">
                                 <img src="${produitInfo.image}" alt="">
                             </div>
                             <div class="prodInfo">
                                 <div class="titreETprix">
                                     <h1>${produitInfo.nom}</h1> <br>
                                     <h2 id="price">${produitInfo.price} </h2>
                                 </div>
                                 <div class="ajoutPanier">
                                     <span>Pointure</span>
                                     <input id="pointure" type="number" min="12"> <br> <br>
                                     <span>Quantite</span>
                                     <input id="quantite" type="number" min="0"> <br><br>
                                     <button id="ajout">AJOUTER AU PANIER</button>
                                 </div>
                                 <ul>
                                     <li>
                                         <img src="./../img/rea_customer_service.png" alt="">
                                         <span>Service  client au 06 54 94 19</span>
                                     </li>
                                     <li>
                                         <img src="./../img/reassurance-joya-le-store-moyens-paiements.png" alt="">
                                         <span>Paiement sécurisé &3x sans frais avec Aima</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_pdt_shipping.png" alt="">
                                         <span>Livraison offerte avec Mondial Relay à partir de 100 €</span>
                                     </li>
                                     <li>
                                         <img src="./../img/rea_click_collect.png" alt="">
                                         <span>Click et collect à la Grande Motte</span>
                                     </li>
                                 </ul>
                             </div>
                              <div class="opacity"></div>
                                <div id="result"></div>
                             </div>
                           `;
                        document.getElementById("result").innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                                                        <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>
                                                        <button class="confirm">CONFIRMER</button>`;
                         document.querySelector('.confirm').onclick=function(){
                            let panier=parseInt(document.getElementById("panierStock").innerText);
                            panier=panier+1;
                            document.getElementById("panierStock").textContent=panier;
                             // Mettre à jour le contenu de la div.infoprod
                             document.querySelector('.main').innerHTML =`
                             <div id="PanierRender">
                             <h1>VOTRE PANIER</h1>
                             <ul id="panierList">
             
                             </ul>
                             <button class="element" id="masquer">MASQUER</button>
                            </div>
                             <div id="product-list-header">
                             <div class="block-category">
                                 <div id="category-description">
                                     <p>Votre boutique en ligne vous propose l'intégralité de ses produits nouvelles collections. Commandez en ligne et faites vous livrer ou bien profitez de notre service Click&nbsp;and Collect afin de venir récuperer votre commande dans votre boutique de produits bijoux en ligne | Joya le store</p>
                                 </div>
                             </div>
                         </div> 
                         <div id="block_nouveaute">
                             
                         </div>`;
                         for(let produit in data) {
                            // Générer un identifiant unique pour chaque bouton
                            const boutonId = `${produit}`;
                            
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
                        let newelement=document.createElement('li');
                        newelement.innerHTML=`<p>vous avez acheté le produit : ${produitInfo.nom}</p> <br> 
                        <p>De pointure : ${pointure}</p> <br> <p>Quantité : ${quantite}</p> <br> <h2>TOTALPRICE :${totalPrice} €</h2>`;
                        let listPan=document.getElementById("panierList");
                        listPan.appendChild(newelement);

                       // document.getElementById("text2").textContent = "Il existe " + stock + " produits";
                        document.getElementById("block_nouveaute").innerHTML = content;    }                    
                          }                    
            });
        });
    })
   .catch(error => {
        console.error(error);
    });
        }
        else if(this.id=="overview-basket"){
            document.getElementById("PanierRender").style.display="block";
        }
        else if(this.id=="masquer"){
            document.getElementById("PanierRender").style.display="none";
        }
        
})
})