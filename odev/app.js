const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "./images/tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "./images/chickenRamen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "./images/bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "./images/dandanMian.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "./images/yangzhouFriedRice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "./images/onigiri.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "./images/yangzhouFriedRice.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "./images/jajangmyeon.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];



//ilk başta filter butonlarını oluşturuyorum.

const container = document.querySelector(".btn-container")  //Filtre kısmını çağırdım, tanımladım.



const buttonAll = document.createElement("button")   //Button elementini oluşturdum
buttonAll.textContent = "All" // Butona isim verdim
buttonAll.classList.add("btn", "btn-outline-danger", "btn-item") //Buton classını tanımladım.
buttonAll.setAttribute("type","button") //type özelliği ve button özelliği atandı.
container.appendChild(buttonAll)


const buttonKorea = document.createElement("button")   //Button elementini oluşturdum
buttonKorea.textContent = "Korea" // Butona isim verdim
buttonKorea.classList.add("btn", "btn-outline-danger", "btn-item") //Buton classını tanımladım.
buttonKorea.setAttribute("type","button") //type özelliği ve button özelliği atandı.
container.appendChild(buttonKorea)


const buttonJapan = document.createElement("button")   //Button elementini oluşturdum
buttonJapan.textContent = "Japan" // Butona isim verdim
buttonJapan.classList.add("btn", "btn-outline-danger", "btn-item") //Buton classını tanımladım.
buttonJapan.setAttribute("type","button") //type özelliği ve button özelliği atandı.
container.appendChild(buttonJapan)

const buttonChina = document.createElement("button")   //Button elementini oluşturdum
buttonChina.textContent = "China" // Butona isim verdim
buttonChina.classList.add("btn", "btn-outline-danger", "btn-item") //Buton classını tanımladım.
buttonChina.setAttribute("type","button") //type özelliği ve button özelliği atandı.
container.appendChild(buttonChina)


// Filter kısmındaki butonları oluşturdum.



// Filtreleme tanımlandı
const filterCategory = (category) =>{  // filterCategory adında bir arrow function tanımlanır. Bu fonksiyon, kategoriye göre menüyü filtrelemek için kullanılır.

  if (category === "All") return menu
  return menu.filter((item) => item.category === category)
}


const menuContainer = document.querySelector("#menu-container") //menuContainer adında bir element seçilir. Bu element, filtrelenmiş menü öğelerinin gösterileceği alanı temsil eder.
const showMenu = (menuList) => {

  menuContainer.innerHTML ="";
  menuList.forEach(item =>{
    const menuItem = document.createElement("div") // Her menü öğesi için bir div elementi oluşturulur (menuItem).
    menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12") // Oluşturulan menuItem elementine ilgili sınıflar eklenir.
    menuItem.innerHTML= `
    <img src="${item.img}" alt="${item.title}" class=photo>
    <div class="menu-info">
    <div class="menu-title">
      <h4>${item.title}</h4>
      <h4>${item.price}</h4>
    </div>
    <p class="menu-text">${item.desc}</p>
    </div>
    `
    menuContainer.appendChild(menuItem)
  })
}

// butondan gelen kategori return'ü filterCategory fonksiyonunun parametresi oluyor.
// filterCategory fonksiyonunun returnu ise showMenu fonksiyonunun parametresi oluyor.
// son olarak da showMenu fonksiyonu bize menüyü gösteriyor.

const eventHandler = (filterText) => {
  showMenu(filterCategory(filterText))

}

// Hangi butona tıklandığ8ının bilgisini al ve eventhandler fonksiyonunu bu değerle çağır.
buttonAll.addEventListener("click", () => eventHandler("All"))
buttonJapan.addEventListener("click", () => eventHandler("Japan"))
buttonKorea.addEventListener("click", () => eventHandler("Korea"))
buttonChina.addEventListener("click", () => eventHandler("China"))

// Sitemiz ilk açıldığında boş ekranla karşılaşılmaması için de çağırıyoruz ki menünün tamamı görünsün.
window.addEventListener ("DOMContentLoaded", () => {
  eventHandler("All")
})