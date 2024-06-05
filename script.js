document.addEventListener("DOMContentLoaded", () => {
  let closeBtn = document.getElementById("closeBtn");
  let searchBtn = document.getElementById("searchBtn");
  let mobile_Container = document.getElementById("mobile_Container");
  let showMore = document.getElementById("showMore");
  let showBtnContainer = document.getElementById("showBtnContainer");

  let searchText = "oppo";

  searchBtn.addEventListener("click", () => {
    let search = document.getElementById("inputBox");
    mobile_Container.innerText = "";
    searchText = search.value;
    if (searchText == "") {
      searchText = "oppo";
    }
    run();
  });

  async function run() {
    let respose = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    let data = await respose.json();
    let phone = data.data;
    phone.forEach((mobile, index) => {
      if (index < 12) {
        let mobile_card = document.createElement("div");
        mobile_card.classList.add("animate__animated", "animate__bounceIn");
        mobile_card.style.height = "520px";
        mobile_card.style.width = "350px";
        mobile_card.style.display = "flex";
        mobile_card.style.flexDirection = "column";
        mobile_card.style.alignItems = "center";
        mobile_card.style.justifyItems = "space-evenly";
        mobile_card.style.gap = "10px";
        mobile_card.style.borderRadius = "20px";
        mobile_card.style.boxShadow = "0 0 20px rgb(100,25,230)";
        mobile_card.innerHTML = `
            <img class="mt-[20px] w-[250px]" src="${mobile.image}">
            <h2 class="flex gap-1"><span>${mobile.brand}</span><span> ${mobile.phone_name}</span></h2>
            <p id="slug" class="hidden">${mobile.slug}</p>
            <p class="px-4 text-white text-center">Gada Electronics</p>
            <button onclick = "showDescription();" style="text-shadow: rgb(255, 255, 255) 0px 0 8px;" class="px-4 showDetailBtn py-2 rounded-xl bg-[rgb(100,25,230)] text-white">SHOW DETAILS</button>`;
        mobile_Container.append(mobile_card);
      }

      if (index == 12) {
        showMore.style.display = "flex";
      }

      showMore.addEventListener("click", () => {
        showMore.style.display = "none";
        if (index >= 12) {
          let mobile_card = document.createElement("div");
          mobile_card.classList.add("animate__animated", "animate__bounceIn");
          mobile_card.style.height = "520px";
          mobile_card.style.width = "350px";
          mobile_card.style.display = "flex";
          mobile_card.style.flexDirection = "column";
          mobile_card.style.alignItems = "center";
          mobile_card.style.justifyItems = "space-evenly";
          mobile_card.style.gap = "10px";
          mobile_card.style.borderRadius = "20px";
          mobile_card.style.boxShadow = "0 0 20px rgb(100,25,230)";

          mobile_card.innerHTML = `
                    <img class="mt-[20px] w-[250px]" src="${mobile.image}">
                    <h2 class="">${mobile.brand} ${mobile.phone_name}</h2>
                    <p id="slug" class="hidden">${mobile.slug}</p>
                    <p class="px-4 text-white text-center">Gada Electronics</p>
                    <button onclick = "showDescription();" style="text-shadow: rgb(255, 255, 255) 0px 0 8px;" class="px-4 showDetailBtn py-2 rounded-xl bg-[rgb(100,25,230)] text-white">SHOW DETAILS</button>`;
          mobile_Container.append(mobile_card);
        }
      });
    });
  }
  run();
  closeBtn.addEventListener("click", () => {
    showBtnContainer.classList.add("hidden");
  });
});

let phoneName = document.getElementById("phoneName");
let brandName = document.getElementById("brandName");
let phone_discription = document.getElementById("phone_discription");
let image = document.getElementById("image");

async function showDescription(e) {
  e = e || window.event;
  let image = document.getElementById("image");
  let phoneName = document.getElementById("phoneName");
  let brandName = document.getElementById("brandName");
  let phone_discription = document.getElementById("phone_discription");
  image.src = `${e.target.parentNode.children[0].src}`;
  brandName.innerText = `${e.target.parentNode.children[1].children[0].innerText}`;
  phoneName.innerText = `${e.target.parentNode.children[1].children[1].innerText}`;
  let slug = document.getElementById("slug").innerText;
  let response = await fetch(
    `https://openapi.programming-hero.com/api/phone/${slug}`
  );
  let data2 = await response.json();
  phone_discription.classList.add("flex", "flex-col", "items-center");
  phone_discription.innerHTML = `
    <p id = "storage" class="capitalize text-center">storage: ${data2.data.mainFeatures.storage}</p>
    <p id = "displaySize" class="capitalize text-center">Display Size: ${data2.data.mainFeatures.displaySize}</p>
    <p id = "chipset" class="capitalize text-center">chipset: ${data2.data.mainFeatures.chipSet}</p>
    <p id = "memory" class="capitalize text-center">memory:${data2.data.mainFeatures.memory}</p>
    <p id = "sensor" class="capitalize text-center">sensor: ${data2.data.mainFeatures.sensors}</p>`;
  let showDetailBtn = Array.from(document.querySelectorAll(".showDetailBtn"));
  showDetailBtn.forEach((buttons) => {});
  showBtnContainer.classList.remove("hidden");
}
