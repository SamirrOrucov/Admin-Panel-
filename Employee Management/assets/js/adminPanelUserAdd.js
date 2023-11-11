const getUrl = document.getElementById("image");
const getName = document.getElementById("name");
const getJob = document.getElementById("job");
const addUser = document.querySelector("#addUser");

addUser.addEventListener("click",function () {
  getFetch()
  location.href='./assets/js/adminPanelUserAdd.js'

  
} );
async function getFetch() {
  const res = await fetch("http://localhost:3000/employee", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image: getUrl.value,
      name: getName.value,
      job: getJob.value,
    }),
  });
  // window.location('./assets/js/adminPanelUserAdd.js')
    //   const data = await res.json();
  //   console.log(data);
}