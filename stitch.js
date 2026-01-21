const stitchId = localStorage.getItem("selectedStitch");
const stitch = stitches.find(s => s.id == stitchId);

const container = document.getElementById("stitchDetail");

if (!stitch) {
  container.innerHTML = "<p>Stitch not found.</p>";
} else {
  container.innerHTML = `
    <h1>${stitch.name}</h1>
    <img src="${stitch.image}" alt="${stitch.name}">
    <p>${stitch.description}</p>
    <h3>Steps</h3>
    <ul>${stitch.steps.map(step => `<li>${step}</li>`).join('')}</ul>
    <button onclick="addFavorite()">⭐ Add to Favorites</button>
  `;
}

function addFavorite() {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  if(!favs.some(f=>f.id===stitch.id)) favs.push(stitch);
  localStorage.setItem("favorites", JSON.stringify(favs));
  alert("Added to favorites!");
}
