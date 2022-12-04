const body = document.querySelector("body");

function creatDiv() {
  const newCard = document.createElement("div");
  const newNome = document.createElement("h1");
  const newEmail = document.createElement("span");
  const newPhone = document.createElement("strong");

  newCard.className = "card";
  newNome.className = "h1";
  newEmail.className = "span";
  newPhone.className = "strong";

  body.appendChild(newCard);
  newCard.appendChild(newNome);
  newCard.appendChild(newEmail);
  newCard.appendChild(newPhone);
}

let i = 0;
let ind = 0;
let indice = 0;

async function loadData() {
  try {
    const response = await api.get("/users");
    if (response.status === 200) {
      const dataValue = response.data;//armazenando o retorno da api em uma variavel
      dataValue.forEach((element) => {
        creatDiv(); //criando uma div contendo um corpo para cada elemento da api
      });

      const nome = document.querySelectorAll(".card h1");
      nome.forEach((element) => {
        //adicionando nome em cada tag h1 com o retorno da api
        element.textContent = dataValue[i].name;
        i++;
      });
      const email = document.querySelectorAll(".card span");
      email.forEach((element) => {
        //adicionando email em cada tag span com o retorno da api
        element.textContent = dataValue[ind].email;
        ind++;
      });
      const phone = document.querySelectorAll(".card strong");
      phone.forEach((element) => {
        //adicionando telefone em cada tag strong com o retorno da api
        element.textContent = dataValue[indice].phone;
        indice++;
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

loadData();//chamando a função para efetuar a chamada na api
