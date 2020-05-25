const url = 'https://incoddebackendd1.herokuapp.com/';

let cardBody = document.querySelector(".cardsGroup")

fetch(url)
  .then(response => response.json())
  .then(data => {
    cardBody.innerHTML = ""
     if (data.length == 0) {
         let h5 = document.createElement("h5")

         h5.textContent = "No users found"
         cardBody.style.justifyContent = "center"

         cardBody.appendChild(h5)
     } else {
         data.forEach(element => {
             let user = element.username

             const users =
                `
                    <img id="imgPerson" src="./src/person.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user}</h5>
                        <a href="#" class="btn btn-primary" id="detailsInfo" data-toggle="modal" data-target="#details">Details</a>
                    </div>
                ` 

            let userB = document.createElement("div")

            userB.id = "card"
            userB.classList.add("card")
            
            userB.innerHTML = users 
            
            cardBody.appendChild(userB)
         });
     }
  });