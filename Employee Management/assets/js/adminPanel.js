const goHome = document.querySelector(".buttons .goHome");
const addUser = document.querySelector(".buttons .addUser");
const table = document.querySelector("table");

async function getFetch() {
  const res = await fetch("http://localhost:3000/employee");
  const data = await res.json();
  data.forEach((element) => {
    getData(element.id, element.image, element.name, element.job);
  });
  console.log(data);
}
getFetch();
function getData(id, image, name, job) {
 
  const tr = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdImg = document.createElement("td");
  const tdName = document.createElement("td");
  const tdJob = document.createElement("td");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const tdUpdate = document.createElement("td");
  const tdDelete = document.createElement("td");
  const buttonUpdate = document.createElement("button");
  const buttonDelete = document.createElement("button");
  buttonUpdate.classList.add("updateBtn");
  buttonDelete.classList.add("deleteBtn");
  buttonUpdate.textContent="Update"
  buttonDelete.textContent="Delete"
  tdId.textContent = id;
  tdName.textContent = name;
  tdJob.textContent = job;
  divImg.classList.add("panelImg");
  tdImg.classList.add("tdImg");
  
  img.setAttribute("src", image);

  divImg.appendChild(img);
  tdImg.append(divImg);
  tdDelete.appendChild(buttonDelete)
  tdUpdate.appendChild(buttonUpdate)

  tr.append(tdId, tdImg, tdName, tdJob, tdUpdate, tdDelete);
  table.appendChild(tr)
}


deleteUser = async (id) => {
    let url = `http://localhost:3000/employee/${id}`;
    let resp = await fetch(url, {method: 'DELETE'});
    console.log(resp);
    this.getFetch();
};
const deleteButtons = document.querySelectorAll(".deleteBtn");

// Delete düymələri üçün tətbiq edilmiş funksiya
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    const row = button.parentElement.parentElement;
    const id = row.firstChild.textContent;
    deleteUser(id) // Əlavə edildi
  });
});

