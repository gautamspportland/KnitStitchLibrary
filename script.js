const container = document.getElementById("stitchContainer");
const searchInput = document.getElementById("searchInput");

function displayStitches(list) {
  container.innerHTML = "";
  list.forEach(stitch => {
    const card = document.createElement("div");
    card.className = "stitch-card";
    card.innerHTML = `
      <img src="${stitch.image}" alt="${stitch.name}">
      <h3>${stitch.name}</h3>
      <p>${stitch.description}</p>
      <button onclick="openStitch(${stitch.id})">View Details</button>
    `;
    container.appendChild(card);
  });
}

function openStitch(id) {
  localStorage.setItem("selectedStitch", id);
  window.location.href = "stitch.html";
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = stitches.filter(s => s.name.toLowerCase().includes(value));
  displayStitches(filtered);
});

// Initial display
displayStitches(stitches);
