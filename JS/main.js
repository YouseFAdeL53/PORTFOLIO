//

let myLis = document.querySelectorAll(".myList li");
let boxes = document.querySelectorAll(".work .box");

myLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    boxes.forEach((box) => {
      box.style.opacity = "0.3";
    });
    document.querySelectorAll(e.target.dataset.filter).forEach((element) => {
      element.style.opacity = "1";
    });
  });
});

let theImages = document.querySelectorAll(".work .box img");
let lightBox = document.querySelector(".lightbox");
let imgLight = lightBox.querySelector("img");
let theClose = document.querySelector(".close");

theImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    // Add class To Light box
    lightBox.classList.add("show");
    imgLight.src = image.src;
  });
});

theClose.addEventListener("click", () => {
  lightBox.classList.remove("show");
});

let settingBox = document.querySelector(".setting-box");
let editIcon = document.querySelector(".edit");

document.addEventListener("click", (e) => {
  if (e.target != settingBox) {
    settingBox.classList.remove("show");
    editIcon.classList.remove("fa-spin")
  }
});

settingBox.addEventListener("click", (e) => {
  e.stopPropagation();
})

editIcon.addEventListener("click", () => {
  editIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("show");
});

let theColors = document.querySelectorAll(".list-color li");

let localColor = localStorage.getItem("pageColor");

if (localColor != null) {
  document.body.style.setProperty("--main-color", localColor);
  theColors.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == localColor) {
      li.classList.add("active");
    }
  });
}

theColors.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    document.body.style.setProperty("--main-color", e.target.dataset.color);
    // Set LocalStorage
    localStorage.setItem("pageColor", e.target.dataset.color);
  });
});

let optionColor = document.querySelector(".option");
let fonts = document.querySelector(".fonts");
let optionName = document.querySelector(".theName");

optionColor.addEventListener("click", () => {
  optionColor.classList.toggle("roteded");
  fonts.classList.toggle("show");
});

let spanFonts = document.querySelectorAll(".fonts span");

let localFont = localStorage.getItem("pageFont");

if (localFont != null) {
  document.body.style.fontFamily = localFont;
  optionName.innerText = localFont;
}

spanFonts.forEach((span) => {
  span.addEventListener("click", (e) => {
    document.body.style.fontFamily = e.target.dataset.value;
    optionName.innerText = e.target.dataset.value;
    fonts.classList.remove("show");
    optionColor.classList.remove("roteded");
    localStorage.setItem("pageFont", e.target.dataset.value);
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".load-parent").classList.add("hide");
  }, 5000)
})


