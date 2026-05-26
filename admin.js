// Artist Database stored in localStorage
let artistsData = JSON.parse(localStorage.getItem('artistsData')) || [
    {
        id: 1,
        name: "Drake",
        bio: "Drake, born Aubrey Drake Graham, is a Canadian rapper, singer, and songwriter who has become one of the most commercially successful artists of the 21st century. He gained initial fame with his role on the television series Degrassi: The Next Generation before establishing himself as a rapper. Drake's albums like 'Take Care', 'Nothing Was the Same', and 'Views' have redefined hip-hop production and lyrical content.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbWiPb8dFC75OTtzYd3rwcoCFqMX0hUEvhA&s",
        albums: ["Scorpion (2018)", "Views (2016)", "Nothing Was the Same (2013)", "Take Care (2011)"],
        singles: ["One Dance ft. Wizkid & Kyla (2016)", "God's Plan (2018)", "Hotline Bling (2015)", "In My Feelings (2018)"],
        instagram: "https://instagram.com/champagnepapi"
    },
    {
        id: 2,
        name: "Playboi Carti",
        bio: "Playboi Carti, born Jordan Terrell Carter, is an American rapper and songwriter known for his unique style and influence on the trap music scene. He gained popularity with his mixtapes and hit songs like 'Magnolia' and 'Wokeuplikethis*'. Carti's music is characterized by its minimalist production, catchy hooks, and his distinctive vocal delivery. He has a dedicated fanbase and continues to be a prominent figure in the hip-hop industry.",
        image: "https://static.wikia.nocookie.net/playboi-carti/images/8/88/BABYBOI_2026.png/revision/latest?cb=20260326220036",
        albums: ["Playboi Carti (2016)", "Die Lit (2018)", "Whole Lotta Red (2020)", "MUSIC (2025)"],
        singles: ["Magnolia (2017)", "Wokeuplikethis* (2017)", "TOXIC ft. Skepta (2025)", "CRUSH ft. Travis Scott (2025)"],
        instagram: "https://instagram.com/playboicarti"
    },
    {
        id: 3,
        name: "Travis Scott",
        bio: "Travis Scott, born Jacques Bermon Webster II, is an American rapper, singer, and songwriter known for his innovative production style and atmospheric soundscapes. He has released several critically acclaimed albums including 'Astroworld' and 'Birds in the Trap Sing McKnight'. Travis is recognized for his unique vocal style and ability to blend multiple genres seamlessly.",
        image: "https://static.wikia.nocookie.net/travisscott/images/e/e5/Travis_Scott.jpg/revision/latest?cb=20250316033409",
        albums: ["Astroworld (2018)", "Birds in the Trap Sing McKnight (2016)", "Rodeo (2015)", "Jackboys (2019)"],
        singles: ["SICKO MODE ft. Drake (2018)", "Goosebumps ft. Kendrick Lamar (2016)", "Butterfly Effect (2017)", "Antidote (2014)"],
        instagram: "https://instagram.com/travisscott"
    },
    {
        id: 4,
        name: "Kendrick Lamar",
        bio: "Kendrick Lamar, born Kendrick Lamar Duckworth, is an American rapper, singer, and songwriter from Compton, California. He is known for his lyrical complexity, conceptual albums, and conscious rap style. His album 'good kid, m.A.A.d city' is considered a modern masterpiece, and his work continues to influence contemporary hip-hop.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiS7wE4RD3OkHTpOp-GgqmrJLmQ-OS-Hg5WFLd3twa3AbEKEaCsoaal_8m3bQukqXxbpn3Ztg6YwW0wbYoJssQyeVMuWFDBzXl20r6Yw&s=10",
        albums: ["Mr. Morale & The Big Steppers (2022)", "DAMN. (2017)", "To Pimp a Butterfly (2015)", "good kid, m.A.A.d city (2012)"],
        singles: ["HUMBLE. (2017)", "Swimming Pools (Drank) (2011)", "King Kunta (2015)", "The Heart Part 5 (2022)"],
        instagram: "https://instagram.com/kendricklamar"
    },
    {
        id: 5,
        name: "The Weeknd",
        bio: "The Weeknd, born Abel Tesfaye, is a Canadian singer, songwriter, and record producer known for his unique vocal style and dark R&B sound. He has achieved massive commercial success with albums like 'After Hours' and 'Starboy', and is known for his mysterious persona and innovative music videos.",
        image: "https://cdn-images.dzcdn.net/images/artist/581693b4724a7fcfa754455101e13a44/1900x1900-000000-80-0-0.jpg",
        albums: ["After Hours (2020)", "Starboy (2016)", "Beauty Behind the Madness (2015)", "House of Balloons (2011)"],
        singles: ["Blinding Lights (2019)", "Starboy ft. Daft Punk (2016)", "The Hills (2014)", "Can't Feel My Face (2015)"],
        instagram: "https://instagram.com/theweeknd"
    },
    {
        id: 6,
        name: "Lil Baby",
        bio: "Lil Baby, born Kentrell DeSean Weighs, is an American rapper from Atlanta, Georgia. He rose to prominence with his melodic trap style and collaborations with major artists. His albums 'Harder Than Ever' and 'My Turn' have been commercially successful and have established him as one of the most streamed rappers.",
        image: "https://emirice.com/cdn/shop/articles/lil_baby_1800x_db477aa3-2645-4554-a8b0-7a475c1ee3e4_1418x.jpg?v=1569419930",
        albums: ["It's Only Me (2024)", "Harder Than Ever (2018)", "My Turn (2020)"],
        singles: ["Drip Season 3 (2018)", "Yes Indeed ft. Drake (2018)", "Cash ft. Gunna (2017)", "Close to You (2022)"],
        instagram: "https://instagram.com/lilbaby"
    }
];

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    checkAdminSession();
});

// Admin Authentication
function checkAdminSession() {
    const adminSession = localStorage.getItem('adminSession');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminUser = document.getElementById('adminUser');

    if (adminSession) {
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        logoutBtn.style.display = 'block';
        adminUser.textContent = 'Welcome, ' + adminSession;
        initializeDashboard();
    } else {
        loginSection.style.display = 'block';
        dashboardSection.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}

function loginAdmin(event) {
    event.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Simple authentication (Demo: admin/1234)
    if (username === 'admin' && password === '1234') {
        localStorage.setItem('adminSession', username);
        localStorage.setItem('artistsData', JSON.stringify(artistsData));
        checkAdminSession();
        document.getElementById('adminUsername').value = '';
        document.getElementById('adminPassword').value = '';
    } else {
        alert('Invalid credentials. Use admin/1234');
    }
}

function logoutAdmin() {
    localStorage.removeItem('adminSession');
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
    checkAdminSession();
}

// Dashboard Functions
function initializeDashboard() {
    loadArtistsTable();
    updateDashboardStats();
    updateRecentArtistsTable();
}

function updateDashboardStats() {
    let totalAlbums = 0;
    let totalSingles = 0;

    artistsData.forEach(artist => {
        totalAlbums += artist.albums.length;
        totalSingles += artist.singles.length;
    });

    document.getElementById('totalArtists').textContent = artistsData.length;
    document.getElementById('totalAlbums').textContent = totalAlbums;
    document.getElementById('totalSingles').textContent = totalSingles;
}

function updateRecentArtistsTable() {
    const tableBody = document.querySelector('#recentArtistsTable tbody');
    tableBody.innerHTML = '';

    artistsData.slice(0, 5).forEach(artist => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${artist.name}</td>
            <td>${artist.albums.length}</td>
            <td>${artist.singles.length}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Tab Navigation
function showTab(tabName) {
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const links = document.querySelectorAll('.menu-link');
    links.forEach(link => link.classList.remove('active'));

    document.getElementById(tabName + 'Tab').classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'artists') {
        loadArtistsTable();
    }
}

// Load Artists in Table
function loadArtistsTable() {
    const tableBody = document.getElementById('artistsTableBody');
    tableBody.innerHTML = '';

    artistsData.forEach(artist => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${artist.id}</td>
            <td>${artist.name}</td>
            <td>${artist.albums.length}</td>
            <td>${artist.singles.length}</td>
            <td class="action-buttons">
                <button class="btn-edit" onclick="openEditModal(${artist.id})">Edit</button>
                <button class="btn-delete" onclick="deleteArtist(${artist.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Add New Artist
function addNewArtist(event) {
    event.preventDefault();

    const newId = Math.max(...artistsData.map(a => a.id), 0) + 1;
    const albums = document.getElementById('artistAlbums').value.split(',').map(a => a.trim());
    const singles = document.getElementById('artistSingles').value.split(',').map(s => s.trim());

    const newArtist = {
        id: newId,
        name: document.getElementById('artistName').value,
        bio: document.getElementById('artistBio').value,
        image: document.getElementById('artistImage').value,
        albums: albums,
        singles: singles,
        instagram: document.getElementById('artistInstagram').value
    };

    artistsData.push(newArtist);
    localStorage.setItem('artistsData', JSON.stringify(artistsData));

    alert('Artist added successfully!');
    event.target.reset();
    updateDashboardStats();
    updateRecentArtistsTable();
}

// Delete Artist
function deleteArtist(id) {
    if (confirm('Are you sure you want to delete this artist?')) {
        artistsData = artistsData.filter(artist => artist.id !== id);
        localStorage.setItem('artistsData', JSON.stringify(artistsData));
        loadArtistsTable();
        updateDashboardStats();
        updateRecentArtistsTable();
        alert('Artist deleted successfully!');
    }
}

// Edit Artist Modal
function openEditModal(id) {
    const artist = artistsData.find(a => a.id === id);
    if (artist) {
        document.getElementById('editArtistId').value = artist.id;
        document.getElementById('editArtistName').value = artist.name;
        document.getElementById('editArtistBio').value = artist.bio;
        document.getElementById('editArtistImage').value = artist.image;
        document.getElementById('editArtistInstagram').value = artist.instagram;
        document.getElementById('editArtistAlbums').value = artist.albums.join(', ');
        document.getElementById('editArtistSingles').value = artist.singles.join(', ');

        document.getElementById('editModal').style.display = 'block';
    }
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.getElementById('editForm').reset();
}

function saveArtistChanges(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('editArtistId').value);
    const artistIndex = artistsData.findIndex(a => a.id === id);

    if (artistIndex !== -1) {
        artistsData[artistIndex] = {
            id: id,
            name: document.getElementById('editArtistName').value,
            bio: document.getElementById('editArtistBio').value,
            image: document.getElementById('editArtistImage').value,
            instagram: document.getElementById('editArtistInstagram').value,
            albums: document.getElementById('editArtistAlbums').value.split(',').map(a => a.trim()),
            singles: document.getElementById('editArtistSingles').value.split(',').map(s => s.trim())
        };

        localStorage.setItem('artistsData', JSON.stringify(artistsData));
        closeEditModal();
        loadArtistsTable();
        updateDashboardStats();
        updateRecentArtistsTable();
        alert('Artist updated successfully!');
    }
}

// Search Artists
function searchArtists() {
    const searchTerm = document.getElementById('searchArtist').value.toLowerCase();
    const tableBody = document.getElementById('artistsTableBody');
    tableBody.innerHTML = '';

    const filteredArtists = artistsData.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm)
    );

    if (filteredArtists.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5">No artists found</td></tr>';
        return;
    }

    filteredArtists.forEach(artist => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${artist.id}</td>
            <td>${artist.name}</td>
            <td>${artist.albums.length}</td>
            <td>${artist.singles.length}</td>
            <td class="action-buttons">
                <button class="btn-edit" onclick="openEditModal(${artist.id})">Edit</button>
                <button class="btn-delete" onclick="deleteArtist(${artist.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
