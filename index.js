for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio;
    var temp = this.innerHTML;
    makeSound(temp);
    createAnimation(temp);

    // this is the idenitiy of the button that triggered the eventListeners
    // var audio=new Audio('./sounds/tom-1.mp3');
    // audio.play();
  });
 document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event){
    makeSound(event.key);
    createAnimation(event.key);
  })
}
function makeSound(key)
{
  switch (key) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
function createAnimation(currentKey)
{
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

