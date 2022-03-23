//typing
let target = document.querySelector("#dynamic");

function randomString() {
  let strArr = ["책임감이 강한", "트랜드를 읽는", "노력하는", "솔직한", "웹퍼블리셔", "프론트앤드 개발자를 꿈꾸는"];
  let slectStr = strArr[Math.floor(Math.random() * strArr.length)];
  let slectStrArr = slectStr.split("");

  return slectStrArr
}

//resetTyping function
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//text print function
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

//cusur effect
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

/*=================aside===================*/
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionToggle();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href");
  document.querySelector(target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href");
    if (target === navList[i].querySelector("a").getAttribute("href")) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

//toggle aside show
const navToggle = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navToggle.addEventListener("click", () => {
  asideSectionToggle();
});
function asideSectionToggle() {
  aside.classList.toggle("open");
  navToggle.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
