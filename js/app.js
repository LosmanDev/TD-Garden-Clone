let landing_button = document.querySelector("#button");
let landing_div = document.querySelector(".wrapper");
let app_background = document.querySelector("#bgbody");
app_background.classList.add("bg-body");

landing_button.addEventListener("click", function () {
  //REMOVES BUTTON ELEMENT/BG IMAGE
  landing_div.remove();
  app_background.classList.remove("bg-body");

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
  let jumbo_h1 = document.createElement("h1");
  let container_div = document.createElement("div");
  let event_select = document.createElement("select");
  let div_row = document.createElement("div");
  let grid_image = document.createElement("img");
  let card_container = document.createElement("div");
  let card_column = document.createElement("div");

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
  jumbo_h1.innerHTML = "<b>UPCOMING</b> EVENTS";
  event_select.innerHTML =
    "<option>All Event Types</option><option>Concerts</option><option>Comedy</option><option>Other</option><option>Family</option><option>Bruins</option> <option>Celtics</option>";

  //CARD STYLING WITH INNERHTML
  card_column.innerHTML = `<div class="card">
  <img class="card-img-top img-fluid" src="images/celtics.jpg" />
  <div class="card-body">
    <p><b>April 15, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Celtics vs. Bulls</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/bruins.jpg" />
  <div class="card-body">
    <p><b>April 17, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Bruins vs. Canadiens</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/celtics1.jpg" />
  <div class="card-body">
    <p><b>April 18, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Bruins vs. Heat</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/bruins1.jpg" />
  <div class="card-body">
    <p><b>April 19, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Bruins vs. Jets</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/celtics2.jpg" />
  <div class="card-body">
    <p><b>April 22, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Celtics vs. Hawks</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/janet.jpg" />
  <div class="card-body">
    <p><b>April 25, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Janet Jackson</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/bruins2.jpg" />
  <div class="card-body">
    <p><b>April 27, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Bruins vs. Penguins</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/chemical.jpg" />
  <div class="card-body">
    <p><b>April 30, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>My Chemical Romance</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/wwe.jpg" />
  <div class="card-body">
    <p><b>May 2, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>WWE SmackDown</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/weekend.jpg" />
  <div class="card-body">
    <p><b>July 11, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>The Weekend</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/bonjovi.jpg" />
  <div class="card-body">
    <p><b>July 16-17, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Bon Jovi</b></h2>
  </div>
</div>
<div class="card">
  <img class="card-img-top img-fluid" src="images/dude perfect.jpg" />
  <div class="card-body">
    <p><b>July 23, 2020</b> @ TBA</p>
    <h3 class="card-title"><b>Dude Perfect</b></h3>
  </div>
</div>`;

  //APPEND ELEMENTS
  nav_div.append(nav);
  nav.append(td_image, garden_h1, nav_button, ham_div);
  ham_div.append(parent_li, search);
  nav_button.append(button_span);
  parent_li.append(nav_li1, nav_li2, nav_li3, nav_li4, nav_li5);
  container_div.append(div_row);
  div_row.append(jumbo_h1, event_select, grid_image);
  card_container.append(card_column);
  document.body.append(nav_div, container_div, card_container);

  //BOOTSTRAP/STYLE ELEMENTS
  td_image.setAttribute("src", "../TD Clone/images/TDLOGO.png");
  grid_image.setAttribute("src", "../TD Clone/images/gridview.png");
  td_image.classList.add("mr-4");
  nav_button.classList.add("navbar-toggler", "toggler-example");
  nav_button.setAttribute("type", "button");
  nav_button.setAttribute("data-toggle", "collapse");
  nav_button.setAttribute("data-target", "#navbarSupportedContent1");
  nav_button.setAttribute("aria-controls", "navbarSupportedContent1");
  nav_button.setAttribute("aria-expanded", "false");
  nav_button.setAttribute("aria-label", "Toggle navigation");
  event_select.setAttribute("id", "select-width");
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
  container_div.classList.add("container", "mt-4");
  div_row.classList.add("row", "align-row-items");
  event_select.classList.add("custom-select", "col-sm", "select-css");
  jumbo_h1.classList.add("col-sm", "jumbo-h1");
  grid_image.classList.add("col-sm-2", "grid-image");
  card_container.classList.add("container");
  card_column.classList.add("card-columns");
});
