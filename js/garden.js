// Ambil elemen-elemen yang diperlukan
const flowerField = document.getElementById("flowerField");
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popupMsg");
const popupSender = document.getElementById("popupSender");
const closePopup = document.getElementById("closePopup");

// Ambil data wishes dari file JSON
fetch("data/wishes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((wish, index) => {
      const flower = document.createElement("div");
      flower.classList.add("flower");

      // Tambahkan delay animasi agar tumbuh satu per satu
      flower.style.animationDelay = `${index * 0.2}s`;

      // Event ketika bunga diklik
      flower.addEventListener("click", () => {
        popupMsg.textContent = wish.message;
        popupSender.textContent = wish.from;
        popup.classList.remove("hidden");
      });

      flowerField.appendChild(flower);
    });
  })
  .catch((error) => {
    console.error("Gagal memuat wishes.json:", error);
  });

// Tombol close pop-up
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Mute toggle untuk suara taman
const nature = document.getElementById("nature");
const muteToggle = document.querySelector(".mute-toggle");

muteToggle.addEventListener("click", () => {
  nature.muted = !nature.muted;
  muteToggle.textContent = nature.muted ? "🔇" : "🔊";
});
