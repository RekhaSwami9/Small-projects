document.querySelectorAll(".form-control input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  });
});
