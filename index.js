const closeCardBtn = document.querySelector(".post-card .close-btn");
const postCard = document.querySelector(".post-card");
const overlay = document.querySelector(".overlay");
const openGiftBtn = document.querySelector(".open-gift");
const topGift = document.querySelector(".gift-top");
const nextBtn = document.querySelector(".post-card .next-btn span");
const prevBtn = document.querySelector(".post-card .prev-btn span");
const video = document.querySelector(".post-card video");
const message = document.querySelector(".post-card .message");

openGiftBtn.addEventListener("click", () => {
   topGift.classList.add("open");
   setTimeout(() => {
      postCard.classList.add("show");
   }, 1500);

   setTimeout(() => {
      overlay.classList.add("show");
   }, 2000);
});

closeCardBtn.addEventListener("click", () => {
   postCard.classList.remove("show");
   overlay.classList.remove("show");
   topGift.classList.remove("open");
   video.pause();
});

nextBtn.addEventListener("click", () => {
   postCard.classList.add("flip");
});

prevBtn.addEventListener("click", () => {
   postCard.classList.remove("flip");
   video.pause();
});
