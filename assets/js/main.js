// Copy code blocks (future-proof for your docs)

document.querySelectorAll("pre").forEach(block => {
  block.addEventListener("click", () => {
    navigator.clipboard.writeText(block.innerText);
    alert("Copied!");
  });
});
