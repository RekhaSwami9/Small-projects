const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.key === ",") {
    addTag(event.target.value);
    event.target.value = "";
  }
});

tagsEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("tag")) {
    event.target.remove();
  }
});

function addTag(input) {
  const tags = input
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");

  tags.forEach((tag) => {
    if (!tagExists(tag)) {
      const tagEl = document.createElement("span");
      tagEl.classList.add("tag");
      tagEl.innerText = tag;
      tagsEl.appendChild(tagEl);
    }
  });
}

function tagExists(tagName) {
  const tags = tagsEl.querySelectorAll(".tag");
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].innerText === tagName) {
      return true;
    }
  }
  return false;
}
