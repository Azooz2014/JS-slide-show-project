const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;

const sliderLength = images.length;

//Create button divs and adding it to bottom div.
for (i = 0; i < sliderLength; i++) {
  const div = document.createElement("div");
  div.className = "buttons";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".buttons");
buttons[0].style.backgroundColor = "white";

const resetBtnBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

const setActiveBtn = () => {
  resetBtnBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

const setSlide = (number) => {
  slider.style.transform = `translateX(-${number * 800}px)`;
};

//Add click event listener for each button div.
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    // slider.style.transform = `translateX(-${i * 800}px)`;
    setSlide(i);
    slideNumber = i + 1;
    resetBtnBg();
    button.style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  //   slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  setSlide(slideNumber);
  slideNumber++;
  setActiveBtn();
};

const prevSlider = () => {
  //   slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  setSlide(slideNumber - 2);
  slideNumber--;
  setActiveBtn();
};

const getFirstSlide = () => {
  //   slider.style.transform = `translateX(0px)`;
  setSlide(0);
  slideNumber = 1;
  setActiveBtn();
};

const getLastSlide = () => {
  //   slider.style.transform = `translateX(-${(sliderLength - 1) * 800}px)`;
  setSlide(sliderLength - 1);
  slideNumber = sliderLength;
  setActiveBtn();
};

//Right Arrow
right.addEventListener("click", () => {
  slideNumber < sliderLength ? nextSlide() : getFirstSlide();
});

//Left Arrow
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlider() : getLastSlide();
});
