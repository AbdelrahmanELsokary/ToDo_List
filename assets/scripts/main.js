let text = "";
let input = document.getElementById("text");
let btn = document.getElementById("add");
let ol = document.getElementById("order_task");

btn.onclick = () => {
  if (input.value === "") {
    return;
  }
  text += `
  <li>${input.value}</li>
  `;
  ol.innerHTML = text;
  input.value = "";
};
