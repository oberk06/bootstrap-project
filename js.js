document.getElementById("aramaYap").addEventListener("click", function () {
  aramaYap();
});

function aramaYap() {
  var aramaMetni = document.getElementById("aramaKutusu").value;

  var googleAramaURL =
    "https://www.google.com/search?q=" + encodeURIComponent(aramaMetni);
  window.open(googleAramaURL, "_blank");
  // window.location.href = googleAramaURL;
}

document
  .getElementById("aramaKutusu")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      aramaYap();
    }
  });
