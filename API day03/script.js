const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const resultsArea = document.getElementById('results-area');
const lyricsArea = document.getElementById('lyrics-area');
const notes = document.querySelectorAll(".note");

const lyricsAPI = "https://api.lyrics.ovh/v1";

// Animate notes
function startNotes() { notes.forEach(n => n.style.animationPlayState = "running"); }


// Event listeners
searchBtn.addEventListener("click", searchSongs);
searchInput.addEventListener("keydown", e => { if(e.key === "Enter") searchSongs(); });

// Search songs via iTunes API
async function searchSongs() {
    const query = searchInput.value.trim();
    if(!query) {
        resultsArea.innerHTML = "<p>Type a song name!</p>";
        return;
    }

    startNotes();
    resultsArea.innerHTML = "<p>Searching songs... 🎵</p>";
    lyricsArea.innerHTML = "<p>Lyrics will appear here when you click 'Get Lyrics'.</p>";

    try {
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`);
        const data = await res.json();

        if(data.results.length === 0) {
            resultsArea.innerHTML = "<p>No songs found.</p>";
        } else {
            resultsArea.innerHTML = "<h2 class='font-semibold mb-2'>Select a song:</h2>";
            data.results.forEach(song => {
                const div = document.createElement("div");
                div.className = "mb-2 flex justify-between items-center";
                div.innerHTML = `
                    <span>${song.trackName} - ${song.artistName}</span>
                    <button class="px-2 py-1 bg-amber-700 text-white rounded hover:bg-amber-800"
                        onclick="getLyrics('${song.artistName}', '${song.trackName}')">
                        Get Lyrics
                    </button>
                `;
                resultsArea.appendChild(div);
            });
        }
    } catch(err) {
        resultsArea.innerHTML = "<p>Error fetching songs. Try again.</p>";
        console.error(err);
    } 
}

// Fetch lyrics
async function getLyrics(artist, songTitle) {
    startNotes();
    lyricsArea.innerHTML = "<p>Fetching lyrics... 🎵</p>";

    try {
        const res = await fetch(`${lyricsAPI}/${encodeURIComponent(artist)}/${encodeURIComponent(songTitle)}`);
        if(!res.ok) throw new Error("Lyrics not found");

        const data = await res.json();
        const lyrics = data.lyrics ? data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>') : "Lyrics not found";

        lyricsArea.innerHTML = `
            <h2 class="text-lg font-semibold mb-2">${songTitle} - ${artist}</h2>
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">${lyrics}</p>
        `;
    } catch(err) {
        lyricsArea.innerHTML = "<p>Lyrics not found for this song.</p>";
        console.error(err);
    } finally {
        stopNotes();
    }
}
