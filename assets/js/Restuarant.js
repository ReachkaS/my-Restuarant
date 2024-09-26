let menuLogo = document.querySelector(".menu-logo");
let menuBar = document.querySelector(".menu-bar");
let menuItem = document.querySelector(".menu-item");

let showCart = document.getElementById("showCart");
let showItem = document.querySelector(".showItem");
let topimg = document.getElementById("topimg");
let btnclose = document.getElementById("btnclose");

let delBtn = document.querySelectorAll(".delBtn");

//headmenu
function getLogo() {
  menuLogo.innerHTML += `<a href=""><img src="./assets/images/bg-01.png" alt="" class="w-16 md:w-32 lg:w-48" /><h3>Food&Drink</h3></a> `;
}
getLogo();
function getBar() {
  menuBar.innerHTML += `
  <ul>
    <li><a href="#service">HOME</a></li>
    <li><a href="#aboutus">AboutUs</a></li>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ul>
  `;
}
getBar();
function getItem() {
  menuItem.innerHTML += `
    <ul>
    <li>
      <div id="search-bar">
        <input
          type="search"
          name=""
          id="search-icon "
          placeholder="search"
          
        />
        <a href="#">
          <i class="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>
    </li>
    <li>
      <div class="cart-bar">
        <a href="#"><i class="fa-solid fa-cart-shopping cart-icon"></i></a>
        <div id="countpro"></div>
      </div>
    </li>
    <li>
      <div class="login-bar" >
        <a href="#"><i class="fa-solid fa-user login-icon "data-bs-toggle="modal" data-bs-target="#exampleModal"></i></a>
      </div>
    </li>
  </ul>
  `;
}
getItem();

//topView
let b = 1;
document.querySelector(".cart-bar").addEventListener("click", function () {
  if (b == 1) {
    ((showCart.style.translate = "0%"), (width = "40%")),
      (topimg.style.translate = "-50%");
    b = 0;
  } else {
    (showCart.style.translate = "110%"), (topimg.style.translate = "0");
    b = 1;
  }
  btnclose.addEventListener("click", function () {
    (showCart.style.translate = "110%"), (topimg.style.translate = "0");
  });
  document.getElementById("expand").addEventListener("click", function () {
    if (b == 1) {
      (showCart.style.width = "90%"), (topimg.style.translate = "0");
      b = 0;
    } else {
      showCart.style.width = "40%";
      topimg.style.translate = "-50%";
      b = 1;
    }
  });
});

//serviceView
function getCon() {
  const cont = [
    {
      img: "./assets/images/breads-1867459_640.jpg",
      title: "Bread",
    },
    {
      img: "./assets/images/b1.webp",
      title: "Dissert",
    },
    {
      img: "./assets/images/drink1.webp",
      title: "Drink",
    },
    {
      img: "./assets/images/pasta-1181189_1280.jpg",
      title: "Food",
    },
  ];
  var txt = "";
  for (const c of cont) {
    txt += `
          <div class="box">
              <div class="imgbox"><a href=""><img src="${c.img}" class="w-16 md:w-32 lg:w-48" alt=""/></a></div>
          </div>
      `;
    document.querySelector(".showContent").innerHTML = txt;
    document.querySelectorAll(".imgbox").forEach((b, i) => {
      b.addEventListener("mouseover", function () {
        document.querySelector(".txt").innerHTML =
          "<hr>" + cont[i].title + "<hr>";
      });
      b.addEventListener("mouseleave", function () {
        document.querySelector(".txt").innerHTML = "<hr>Our Service<hr>";
      });
    });
  }
}
getCon();

//showProduct
const productDetail = [
    {
      "img": "./assets/images/b1.webp",
      "title": "Bread1",
      "price": "1 0",
      "code": "#001"
    },
    {
      "img": "./assets/images/9c608a_a5eaf3dd3106463e8d564bc702101b72.webp",
      "title": "Bread2",
      "price": "1 2",
      "code": "#002"
    },
    {
      "img": "./assets/images/breads-1867459_640.jpg",
      "title": "Bread3",
      "price": "1 5",
      "code": "#003"
    },
    {
      "img": "./assets/images/bread4.jpg",
      "title": "Bread4",
      "price": "1 3",
      "code": "#004"
    },
  
    {
      "img": "./assets/images/drink1.webp",
      "title": "Drink1",
      "price": "1 0",
      "code": "#005"
    },
    {
      "img": "./assets/images/drink2.jpg",
      "title": "Drink2",
      "price": "1 2",
      "code": "#006"
    },
    {
      "img": "./assets/images/drink3.jpg",
      "title": "Drink3",
      "price": "1 5",
      "code": "#007"
    },
    {
      "img": "./assets/images/drink4.jpg",
      "title": "Drink4",
      "price": "1 1",
      "code": "#008"
    },
  
    {
      "img": "./assets/images/c837a6_07a8a45350a744f6bc9c6eb90c5fed19~mv2.webp",
      "title": "Dissert1",
      "price": "1 5",
      "code": "#009"
    },
    {
      "img": "./assets/images/c837a6_680019c51a1046b68392f97a7bc16bb7~mv2.webp",
      "title": "Dissert2",
      "price": "1 1",
      "code": "#009"
    },
    {
      "img": "./assets/images/c837a6_bdedac8367364251ab8da1da245bff65~mv2.webp",
      "title": "Dissert3",
      "price": "1 5",
      "code": "#010"
    },
    {
      "img": "./assets/images/dis4.jpg",
      "title": "Dissert4",
      "price": "1 1",
      "code": "#011"
    },
  
    {
      "img": "./assets/images/f1.jpg",
      "title": "Food1",
      "price": "3 0",
      "code": "#012"
    },
    {
      "img": "./assets/images/f2.jpg",
      "title": "Food2",
      "price": "1 1",
      "code": "#013"
    },
    {
      "img": "./assets/images/f3.jpg",
      "title": "Food3",
      "price": "1 8",
      "code": "#014"
    },
    {
      "img": "./assets/images/f4.jpg",
      "title": "Food4",
      "price": "1 5",
      "code": "#015"
    }
  ];
function getProduct() {
  var txt = "";
  for (const pd of productDetail) {
    txt += `
    <div class="probox">
      <div class="proImg">
        <img src="${pd.img}" alt="" class="w-100 rounded-3 object-cover" />
      </div>
      <div class="proDes">
        <h4>${pd.code}</h4>
        <h3>${pd.title}</h3>
        <h4>${pd.price} $</h4>
        <button type="button" id="addCart">AddtoCart</button>
      </div>    
     </div>
    `;
    document.querySelector(".Product").innerHTML = txt;
  }

  //add Product to cart
  let addData = document.querySelector(".data");
  document.querySelectorAll("#addCart").forEach((add, i) => {
    var num = 2;
    var i;
    add.addEventListener("click", function () {
      addData.innerHTML += `
      <tr id="row">
        <td>${product[i].code}</td>
        <td>
          <img
            src="${product[i].img}"
            alt=""
            width="50px"
            height="50px";
          />
        </td>
        <td>${product[i].title}</td>
        <td>${product[i].price} $</td>
        <td class="countqty">1</td>
        <td>
          <button type="button" class="addBtn">Add</button><button type="button" class="delBtn">Delete</button>
        </td>
      </tr>
      `;
      i++;
      document.getElementById("countpro").innerHTML++;
      document.querySelector(".addBtn").addEventListener("click", () => {
        document.querySelector(".countqty").innerHTML++;
      });
      document.querySelector(".delBtn").addEventListener("click", () => {
        document.querySelector("#row").remove();
        document.getElementById("countpro").innerHTML--;
      });
    });
  });
}
getProduct();

//purchase
document.getElementById("btnbuy").addEventListener("click", () => {
  alert("Thank you for entrust our service!");
});

document.querySelector(".showImg2").addEventListener("mouseover", function () {
  // document.querySelector(".showIcon").style.display = "flex";
  document.querySelector("img").style.scale = "0.9";
});
document.querySelector(".showImg2").addEventListener("mouseleave", function () {
  // document.querySelector(".showIcon").style.display = "none";
  document.querySelector("img").style.scale = "1";
});
