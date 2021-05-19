var playFunc = function () {
  var audio = document.getElementById("stream");

  if (audio.paused) {
    try {
      audio.play();
    } catch (err) {}
  } else {
    audio.pause();
  }

  document
    .getElementById("playPauseButton")
    .classList.toggle("active", !audio.paused);
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("playPauseButton")
    .addEventListener("click", playFunc);
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    playFunc();
  }
});