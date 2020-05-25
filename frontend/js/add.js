const usernameInput = document.querySelector("#formGroupExampleInput");
const emailInput = document.querySelector("#exampleInputEmail1");
const roleInput = document.querySelector("#exampleInputProfessional");

const btn = document.querySelector("#submitForm");

btn.addEventListener("click", () => {
  const data = {
    username: `${usernameInput.value}`,
    email: `${emailInput.value}`,
    job: `${roleInput.value}`,
  };
  if (
    data.username.length !== 0 &&
    data.email.length !== 0 &&
    data.job.length !== 0
  ) {
    fetch("https://incoddebackendd1.herokuapp.com/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status == 409) {
        alert("usuario já existe");
        usernameInput.value = ''
        emailInput.value = ''
        roleInput.value = ''
      } else if (response.status == 201) {
        response.json();

        alert("Criado com sucesso");
      }
      location.reload()
    });

  } else {
    alert("preencha seus dados");
  }
});
