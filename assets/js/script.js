Shery.mouseFollower();

Shery.imageEffect('.back', { style: 3, gooey: true, setUniforms: (uniforms) => {
    uniforms.infiniteGooey.value = true
    uniforms.noEffectGooey.value = false
    uniforms.durationIn.value = 0.4
    uniforms.durationOut.value = 0.4
    uniforms.onMouse.value = 1
    uniforms.metaball.value = 0.13
    uniforms.masker.value = true
    uniforms.maskVal.value = 1.10
  },
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem){
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;
  document.querySelector(".back")
  .addEventListener("click", () => {
    if(!animating){

      animating = true;
      // centre-to-up animation
      gsap.to(h1s[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 0.7,
        onComplete: function(){
          gsap.set(this._targets[0], {top: "100%"});
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      // down-to-centre animation
      gsap.to(h1s[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 1
      });
    }
  });
});

var audio = document.createElement("audio");
audio.src = "assets/audio/audio.mp3";

var stp = document.querySelector(".stop");
document.querySelector(".back")
.addEventListener("click", () => {
  audio.play();
  stp.style.display = "unset";
})

document.querySelector(".stop")
.addEventListener("click", () => {
  audio.pause();
  stp.style.display = "none";
})