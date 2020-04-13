let landing_button = document.querySelector("#button");
let landing_div = document.querySelector(".wrapper");

landing_button.addEventListener("click", function () {
  //REMOVES BUTTON ELEMENT
  landing_div.remove();

  //ADDING NAVBAR ELEMENTS
  let nav_div = document.createElement("div");
  let nav = document.createElement("nav");
  let td_image = document.createElement("img");
  let garden_h1 = document.createElement("h1");
  let parent_li = document.createElement("ul");
  let nav_li1 = document.createElement("li");
  let nav_li2 = document.createElement("li");
  let nav_li3 = document.createElement("li");
  let nav_li4 = document.createElement("li");
  let nav_li5 = document.createElement("li");
  let search = document.createElement("span");
  let nav_button = document.createElement("button");
  let ham_div = document.createElement("div");
  let button_span = document.createElement("span");

  // ADD TEXT TO ELEMENTS

  garden_h1.innerText = "GARDEN";
  nav_li1.innerHTML = "<b>Events <br>& Tickets</b> ";
  nav_li2.innerHTML = "<b>Plan</b> <br>Your Visit";
  nav_li3.innerHTML = "<b>Premium</b><br> Seating";
  nav_li4.innerHTML = "<b>Venue</b><br> Info";
  nav_li5.innerHTML = "<b>Corporate</b><br> INFO";
  search.innerHTML = '<i class="gg-search"></i>';
  button_span.innerHTML =
    '<i class="fas fa-bars fa-1x"><i class="gg-layout-list ml-4"></i></i>';

  //APPEND ELEMENTS
  nav_div.append(nav);
  nav.append(td_image, garden_h1, nav_button, ham_div);
  ham_div.append(parent_li, search);
  nav_button.append(button_span);
  parent_li.append(nav_li1, nav_li2, nav_li3, nav_li4, nav_li5);
  document.body.append(nav_div);

  //BOOTSTRAP/STYLE ELEMENTS
  td_image.setAttribute("src", "../TD Clone/images/TDLOGO.png");
  td_image.classList.add("mr-4");
  nav_button.classList.add("navbar-toggler", "toggler-example");
  nav_button.setAttribute("type", "button");
  nav_button.setAttribute("data-toggle", "collapse");
  nav_button.setAttribute("data-target", "#navbarSupportedContent1");
  nav_button.setAttribute("aria-controls", "navbarSupportedContent1");
  nav_button.setAttribute("aria-expanded", "false");
  nav_button.setAttribute("aria-label", "Toggle navigation");
  ham_div.setAttribute("id", "navbarSupportedContent1");
  nav_div.classList.add("divBg");
  garden_h1.classList.add("gardenh1", "ml-2");
  nav.classList.add("navbar", "navbar-expand-md");
  parent_li.classList.add("nav-ul", "navbar-nav", "mr-auto");
  ham_div.classList.add("collapse", "navbar-collapse");
  nav_div.classList.add("container");
  nav_li1.classList.add("nav-lists", "nav-item", "active");
  nav_li2.classList.add("nav-lists", "nav-item");
  nav_li3.classList.add("nav-lists", "nav-item");
  nav_li4.classList.add("nav-lists", "nav-item");
  nav_li5.classList.add("nav-lists", "nav-item");
  button_span.classList.add("button-color");
});
