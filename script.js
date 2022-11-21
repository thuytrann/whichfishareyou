let initial = 1;
let ticking = false;
let currentSection = 0;

const sections = document.getElementsByClassName('slide');
const landing = document.getElementById('landing');
const scrollDist = document.getElementById('scrollDist');
const bg = document.getElementById('bg-container');
const bgimg = document.getElementById('bg-img');
const fishpic = document.getElementById('fish-pic');
const sliCont = document.getElementById('slide-indicator');
const sliIndi = document.getElementById('num-indi');
const guide = document.getElementById('guide');
var guideText = ['Pop the Bubbles!' , 'Click a fish to enable audio'];
var mute = document.querySelector(".mute");
var audio = document.getElementById("audio");
const fishInfo = document.getElementById('fish-info');



var fishbtns = document.querySelectorAll('.fish-button');
var fishN = ['Red Drum', 'Summer Flounder', 'Spotted Seatrout', 'Striped Bass', 'White Perch'];
var akaA = ['also known as redfish, channel bass, puppy drum,  or spottail bass', 'or fluke is a marine flatfish that is found in the Atlantic Ocean off the East Coast of the United States and Canada', 'also known as speckled trout, is a common estuarine fish', 'also called the Atlantic striped bass, striper, linesider, rock, or rockfish, is an anadromous perciform fish of the family Moronida', 'small silvery, greenish-gray fish with a dark, highly domed back'];
var prefT = ['70°F - 90°F', '55°F - 68°F', '69°F - 80°F', '55°F - 68°F', '75°F - 90°F'];

var selecFish;


for (let i = 0; i < fishbtns.length; i++) {
  clickFish(fishbtns[i], fishN[i]);
  //hoverFish(fishbtns[i], fishN[i], akaA[i], prefT[i]);

}

/*document.addEventListener('mousemove', function(e){
  var x = e.clientX + 30;
  var y = e.clientY + 30;
  if (x < (window.innerWidth/2)){
    x = x + 20;
    y = y + 20;
    fishInfo.style.left = x + 'px';
    fishInfo.style.top = y + 'px';
  }else {
    x = x - 20;
    y = y - 20;
    
    fishInfo.style.left = x + 'px';
    fishInfo.style.top = y + 'px';
  //}

  
});

function hoverFish(fishbtn, fish, aka, pref){
  
  fishbtn.addEventListener('mouseover', function(e){
    fishInfo.style.opacity = "1";
    document.getElementById('fish-info-title').innerHTML = fish;
    document.getElementById('aka').innerHTML = aka;
    document.getElementById('pref-temp').innerHTML = pref;



    

  })
  fishbtn.addEventListener('mouseout', function(){
    fishInfo.style.opacity = "0";
  })

}*/






const length = sections.length
const scrollDown = () => {
  if (currentSection < length - 1) {
    ticking = true
    currentSection += 1

    sections[currentSection - 1].classList.add('scroll-down');
    sections[currentSection - 1].style.transform = "translateY(-160vh)";
    sections[currentSection].style.transform = "translateY(-60vh)";


    console.log('down1')
    pause()
  }
}

const scrollUp = () => {

  if (currentSection !== 0) {


    ticking = true

    currentSection -= 1

    sections[currentSection].classList.remove('scroll-down')

    sections[currentSection].style.transform = "translateY(-60vh)";
    sections[currentSection + 1].style.transform = "translateY(60vh)";


    console.log('up1')

    pause()

  }
}



const handleScroll = (event) => {

  if (!ticking) {
    sliIndi.innerHTML = currentSection + 1;

    if (event.deltaY > 50) {
      scrollDown()

      if (currentSection == 1) {
        bgimg.style.transform = "translateY(50vh)";

      } else if (currentSection == 2) {
        bgimg.style.transform = "translateY(44vh)";
        

      } else if (currentSection == 3) {
        bgimg.style.transform = "translateY(18vh)";

      }else if (currentSection == 4) {
        bgimg.style.transform = "translateY(8vh)";

      }

    } else if (event.deltaY < -50) {
      scrollUp()

      if (currentSection == 0) {
        bgimg.style.transform = "translateY(66vh)";

      } else if (currentSection == 1) {
        bgimg.style.transform = "translateY(50vh)";

      } else if (currentSection == 2) {
        bgimg.style.transform = "translateY(44vh)";

      } else if (currentSection == 3) {
        bgimg.style.transform = "translateY(18vh)";

      } else if (currentSection == 4) {
        bgimg.style.transform = "translateY(8vh)";

      }

    }
  }
}

const pause = () => {
  setTimeout(() => {
    ticking = false
  }, 500)
}

var inst = setInterval(change, 6000);
    var textCount = 0;
    function change() {
      guide.style.animation = "show 6s linear infinite";
      guide.innerHTML = guideText[textCount];
      textCount++;
      if (textCount >= guideText.length) {
        textCount = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
      }
    }

function clickFish(fishbtn, fish) {
  fishbtn.addEventListener("click", function () {
    guideText = ['Scroll down or up', 'Pop the Bubbles!'];

    selecFish = fish;
    audio.play();
    document.getElementById('selec-fish-1').innerHTML = selecFish;
    document.getElementById('selec-fish-2').innerHTML = selecFish;
    document.getElementById('selec-fish-3').innerHTML = selecFish;
    console.log(selecFish);
    landing.classList.add('clicked');
    sliCont.style.opacity = "1";
    //guide.style.visibility = "visible";
    scrollDist.style.opacity = "1";
    scrollDist.style.height = '100vh';
    scrollDist.style.transform = "translateY(-100vh)";
    bg.style.opacity = "1";
    bg.style.height = '100vh';
    bgimg.style.transform = "translateY(66vh)";
    if (selecFish == 'Red Drum') {
      fishpic.src = "reddrum.png";
    } else if (selecFish == 'Summer Flounder') {
      fishpic.src = "summerflounder.png";
    } else if (selecFish == 'Spotted Seatrout') {
      fishpic.src = "spottedseatrout.png";

    } else if (selecFish == 'Striped Bass') {
      fishpic.src = "stripedbass.png";
    } else if (selecFish == 'White Perch') {
      fishpic.src = "whiteperch.png";
    }

    window.addEventListener('wheel', handleScroll)
    
    
    pause()

  })
}

var bubColor = ['#E9E9E9', '#231F20'];

function createBubble() {
  const bubbleContainer = document.querySelector('.bubbles-container');
  const createBub = document.createElement('span');
  //var size = (Math.random*30)+20;
  var size = 25;

  createBub.style.width = size + 'px';
  createBub.style.height = size + 'px';
   
  //createBub.style.borderColor = bubColor[Math.floor(Math.random() * 2)];

  
  createBub.style.left = Math.random() * innerWidth + "px";
  bubbleContainer.appendChild(createBub);

  setTimeout(() => {
    createBub.remove()
  }, 50000)

  createBub.onclick = function () {
    console.log('clickedd');
    createBub.remove()
  }
}

setInterval(createBubble, 2000)





mute.addEventListener("click", function (){
  if (audio.paused){
    audio.play();
    
		mute.style.opacity = "1";
  }
  else {
		audio.pause();
		mute.style.opacity = ".5";
	}
})
