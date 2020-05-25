setInterval(() => {
    const dtlBtn = document.querySelectorAll("#detailsInfo")


    dtlBtn.forEach(element => {
        element.addEventListener("click", ()=>{
            const user = element.parentElement.querySelector("h5")

            //modal values
            let username = document.querySelector(".modal-body h5")
            let email = document.querySelector(".modal-body p")
            let job = document.querySelector(".modal-body h6")            

            fetch(`https://incoddebackendd1.herokuapp.com/user/${user.textContent}`)
                .then(response => response.json())
                .then(data=>{
                   username.textContent = data.username
                   email.textContent = data.email
                   job.textContent = data.job
                })
                .catch(erro => console.error(erro))
        })
    });
}, 1000);

