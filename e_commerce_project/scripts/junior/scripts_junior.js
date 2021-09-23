const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("/e_commerce_project/Productos/Junior/junior.json");
    const data = await res.json();
    pintarCardsJunior(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCardsJunior = data  => {
    console.log(data)
    data.forEach( producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src',producto.thumbnailUrl )
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}