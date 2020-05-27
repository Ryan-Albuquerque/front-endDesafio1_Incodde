const buttonDlt = document.querySelector("#dlt")

buttonDlt.addEventListener("click", ()=>{
    const username = document.querySelector(".modal-body h5").textContent

    fetch(`http://localhost:3000/user/delete/${username}`, {
        method: 'DELETE'
    })

    alert("Deletado com sucesso")

    location.reload()

})