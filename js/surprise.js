// MODAL
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

// BGM mute
const bgm = document.getElementById("bgm");
const muteToggle = document.querySelector(".mute-toggle");

muteToggle.addEventListener("click", () => {
  bgm.muted = !bgm.muted;
  muteToggle.textContent = bgm.muted ? "🔇" : "🔊";
});

// Handle klik kotak hadiah
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    const type = box.dataset.type;
    let content = "";

    switch (type) {
      case "video":
        content = `
  <h2>🎥 Video Ucapan</h2>
  <video controls width="100%">
    <source src="video/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <button id="modalBackBtn" style="margin-top:1rem; display:block; padding:10px 20px; background:#ff6b6b; color:white; border:none; border-radius:5px; cursor:pointer;">
    ⬅ Kembali
  </button>
`;
        break;

      case "gallery":
        content = `
          <h2>📸 Galeri Foto</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
            <img src="images/gallery/galeri1.jpg" width="100">
            <img src="images/gallery/galeri2.jpg" width="100">
            <img src="images/gallery/galeri3.jpg" width="100">
            <img src="images/gallery/galeri4.jpg" width="100">
          </div>`;
        break;

      case "quiz":
        content = `
          <h2>🧠 Mini Quiz</h2>

          <div id="quiz1">
            <p>1. Dia antara pilihan ini, apa yang disukai Dini?</p>
            <div>
              <button class="quiz-btn" data-answer="false" data-next="2">Melukis</button>
              <button class="quiz-btn" data-answer="false" data-next="2">Hantu</button>
              <button class="quiz-btn" data-answer="false" data-next="2">Mochi</button>
              <button class="quiz-btn" data-answer="true" data-next="2">Jalan-Jalan</button>
              <button class="quiz-btn" data-answer="false" data-next="2">Kucing</button>
            </div>
            <p id="quizResult1" style="margin-top:0.5rem; font-weight:bold;"></p>
          </div>

          <div id="quiz2" style="display:none; margin-top:1.5rem;">
            <p>2. Apa warna favorit Puput?</p>
            <div>
              <button class="quiz-btn" data-answer="false" data-next="3">Merah</button>
              <button class="quiz-btn" data-answer="false" data-next="3">Kuning</button>
              <button class="quiz-btn" data-answer="true" data-next="3">Hijau</button>
              <button class="quiz-btn" data-answer="false" data-next="3">Biru</button>
              <button class="quiz-btn" data-answer="false" data-next="3">Ungu</button>

            </div>
            <p id="quizResult2" style="margin-top:0.5rem; font-weight:bold;"></p>
          </div>

          <div id="quiz3" style="display:none; margin-top:1.5rem;">
            <p>3. Apa makanan yang tidak disukai Dini?</p>
            <div>
              <button class="quiz-btn" data-answer="true" data-next="4">Apel</button>
              <button class="quiz-btn" data-answer="false" data-next="4">Durian</button>
              <button class="quiz-btn" data-answer="false" data-next="4">Kepiting</button>
              <button class="quiz-btn" data-answer="false" data-next="4">Anggur</button>
              <button class="quiz-btn" data-answer="false" data-next="4">Daging sapi</button>
            </div>

            <p id="quizResult3" style="margin-top:0.5rem; font-weight:bold;"></p>
          </div>

          <div id="quiz4" style="display:none; margin-top:1.5rem;">
            <p>4.Apa quote favorit Dini?</p>
            <div>
              <button class="quiz-btn" data-answer="false" data-next="5">Everyday is a change to be better</button>
              <button class="quiz-btn" data-answer="true" data-next="5"> Life is beautiful</button>
              <button class="quiz-btn" data-answer="false" data-next="5">Wisely, and slow. They stumble that run fast</button>
              <button class="quiz-btn" data-answer="false" data-next="5">All that we are is the result of what we have thought</button>
              <button class="quiz-btn" data-answer="false" data-next="5">Life is short, and it is here to be lived</button>
            </div>
            <p id="quizResult4" style="margin-top:0.5rem; font-weight:bold;"></p>
          </div>

          <div id="quiz5" style="display:none; margin-top:1.5rem;">
            <p>5. Apa yang bukan favorit Puput saat weekend?</p>
            <div>
              <button class="quiz-btn" data-answer="false">Jalan ke mall</button>
              <button class="quiz-btn" data-answer="false">Scroll tiktok</button>
              <button class="quiz-btn" data-answer="true">Membuat puisi</button>
              <button class="quiz-btn" data-answer="false">Hangout dengan teman atau keluarga</button>
              <button class="quiz-btn" data-answer="false">Rebahan</button>
            </div>
            <p id="quizResult5" style="margin-top:0.5rem; font-weight:bold;"></p>
          </div>`;
        break;

      case "game":
        // Arahkan langsung ke halaman game.html
        window.location.href = "game.html";
        return; // Stop di sini, jangan buka modal
    }

    modalContent.innerHTML = content;
    modal.classList.remove("hidden");

// Tangani tombol "Kembali" di dalam konten
const backBtn = modalContent.querySelector("#modalBackBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalContent.innerHTML = "";
  });
}


    // Tangani tombol quiz
    modalContent.querySelectorAll(".quiz-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const isCorrect = btn.dataset.answer === "true";

        const parent = btn.closest("div").parentElement;
        const result = parent.querySelector("p[id^='quizResult']");

        result.textContent = isCorrect
          ? "Benar! Kamu kenal banget 😍"
          : "Yah salah 😅 coba lagi~";

        const nextQuiz = btn.dataset.next;
        if (nextQuiz) {
          setTimeout(() => {
            parent.style.display = "none";
            const nextElement = modalContent.querySelector(`#quiz${nextQuiz}`);
            if (nextElement) nextElement.style.display = "block";
          }, 1000);
        } else {
          setTimeout(() => {
            const doneMsg = document.createElement("p");
            doneMsg.textContent = "🎉 Yeay, kamu selesai menjawab quiz!";
            doneMsg.style = "margin-top: 1rem; font-weight: bold; text-align:center;";
            modalContent.appendChild(doneMsg);
          }, 1000);
        }
      });
    });
  });
});

// Tombol close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// SPIN WHEEL 🎲
const spinBtn = document.getElementById("spinBtn");
const spinResult = document.getElementById("spinResult");

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  spinBtn.classList.add("spin-rotate");
  spinResult.textContent = "Spinning... 🎲";

  setTimeout(() => {
    fetch("data/spin_messages.json")
      .then((res) => res.json())
      .then((messages) => {
        const random = Math.floor(Math.random() * messages.length);
        spinResult.textContent = messages[random];
        spinBtn.disabled = false;
        spinBtn.classList.remove("spin-rotate");
      })
      .catch((err) => {
        spinResult.textContent = "Gagal memuat pesan 😢";
        console.error(err);
        spinBtn.disabled = false;
        spinBtn.classList.remove("spin-rotate");
      });
  }, 1500);
});
