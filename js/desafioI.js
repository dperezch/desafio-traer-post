//OBTENER DATA
const getPosts = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();
    recorrerPosts(data);
  } catch (error) {
    console.log(error);
  }
};

//RECORRER DATA
const recorrerPosts = (posts) => {
  //obtener elemento contenedor de la lista
  let div = document.querySelector("#post-data");
  //crear elemento ul
  let ul = document.createElement("ul");
  console.log("posts: ", posts);
  posts.forEach((post) => {
    //crear elementos de la lista
    let li = document.createElement("li");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    //rellenar elementos de la lista
    p1.textContent = post.title;
    p1.style.fontWeight = "bold";
    p2.textContent = post.body;
    //agregar elementos a la lista
    li.appendChild(p1);
    li.appendChild(p2);
    ul.appendChild(li);
  });
  //primero limpiar contenedor para no duplicar la lista
  div.innerHTML = "";
  //agregar lista completa al contenedor
  div.appendChild(ul);
};
