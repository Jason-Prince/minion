let eye_ref = document.querySelectorAll(".eye");
let banana = document.getElementsByClassName("banana");
let isClicked = false;

const clicking = (e) => {
  if (e.target.matches(".banana")) {
    isClicked = !isClicked;
  }
};

const move = (e) => {
  if (isClicked == false) return;

  banana[0].style.left = `${e.pageX}px`;
  banana[0].style.top = e.pageY + "px";

  eye_ref.forEach((eye) => {
    let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    var x = e.clientX;
    var y = e.clientY;

    let radian = Math.atan2(x - eyeX, y - eyeY);
    let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
};

document.addEventListener("click", clicking);
document.addEventListener("mousemove", move);
