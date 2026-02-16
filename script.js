const games = [
    { name: "Cyberpunk 2077", image: "https://via.placeholder.com/200x150" },
    { name: "Call of Duty", image: "https://via.placeholder.com/200x150" },
    { name: "GTA V", image: "https://via.placeholder.com/200x150" },
    { name: "Minecraft", image: "https://via.placeholder.com/200x150" },
    { name: "Fortnite", image: "https://via.placeholder.com/200x150" },
    { name: "FIFA 24", image: "https://via.placeholder.com/200x150" }
];

const gameList = document.getElementById("gameList");
const favList = document.getElementById("favList");
const searchInput = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");

function displayGames(gameArray) {
    gameList.innerHTML = "";
    gameArray.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${game.image}">
            <h3>${game.name}</h3>
            <button onclick="addToFav('${game.name}')">Add to Favorites</button>
        `;
        gameList.appendChild(card);
    });
}

function addToFav(gameName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(gameName)) {
        favorites.push(gameName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        loadFavorites();
    }
}

function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favList.innerHTML = "";
    favorites.forEach(game => {
        const li = document.createElement("li");
        li.textContent = game;
        favList.appendChild(li);
    });
}

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(value)
    );
    displayGames(filtered);
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

displayGames(games);
loadFavorites();
