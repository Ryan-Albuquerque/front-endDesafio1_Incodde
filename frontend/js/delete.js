const buttonDlt = document.querySelector("#dlt")

buttonDlt.addEventListener("click", ()=>{
    const username = document.querySelector(".modal-body h5").textContent

    fetch(`https://incoddebackendd1.herokuapp.com/user/delete/${username}`, {
        method: 'DELETE'
    })

    alert("Deletado com sucesso")

    location.reload()

})