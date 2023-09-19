const room__item = document.querySelectorAll(".room__item");

room__item.forEach((item) => {
  const btn__book = item.querySelector(".btn__book");
  const reserved = item.querySelector(".reserved");
  const price__block = item.querySelector(".price__block");

  btn__book.addEventListener("click", () => {
    if (
      reserved.style.display === "none" &&
      price__block.style.display === "flex"
    ) {
      reserved.style.display = "block";
      price__block.style.display = "none";
    } else {
      reserved.style.display = "none";
      price__block.style.display = "flex";
    }
  });

  item.addEventListener("mouseleave", () => {
    if (
      reserved.style.display === "none" &&
      price__block.style.display === "flex"
    ) {
      reserved.style.display = "block";
      price__block.style.display = "none";
    }
  });

  item.addEventListener("click", () => {
    if (
      reserved.style.display === "block" &&
      price__block.style.display === "none"
    ) {
      reserved.style.display = "none";
      price__block.style.display = "flex";

      item.addEventListener("mouseleave", () => {
        if (
          reserved.style.display === "block" &&
          price__block.style.display === "none"
        ) {
          reserved.style.display = "none";
          price__block.style.display = "flex";
        }
      });
    }
  });
});
