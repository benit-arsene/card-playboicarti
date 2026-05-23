
// Artist Database
const artistsData = [
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
        image: "https://via.placeholder.com/180?text=Kendrick+Lamar",
        albums: ["Mr. Morale & The Big Steppers (2022)", "DAMN. (2017)", "To Pimp a Butterfly (2015)", "good kid, m.A.A.d city (2012)"],
        singles: ["HUMBLE. (2017)", "Swimming Pools (Drank) (2011)", "King Kunta (2015)", "The Heart Part 5 (2022)"],
        instagram: "https://instagram.com/kendricklamar"
    },
    {
        id: 5,
        name: "The Weeknd",
        bio: "The Weeknd, born Abel Tesfaye, is a Canadian singer, songwriter, and record producer known for his unique vocal style and dark R&B sound. He has achieved massive commercial success with albums like 'After Hours' and 'Starboy', and is known for his mysterious persona and innovative music videos.",
        image: "https://via.placeholder.com/180?text=The+Weeknd",
        albums: ["After Hours (2020)", "Starboy (2016)", "Beauty Behind the Madness (2015)", "House of Balloons (2011)"],
        singles: ["Blinding Lights (2019)", "Starboy ft. Daft Punk (2016)", "The Hills (2014)", "Can't Feel My Face (2015)"],
        instagram: "https://instagram.com/theweeknd"
    },
    {
        id: 6,
        name: "Lil Baby",
        bio: "Lil Baby, born Kentrell DeSean Weighs, is an American rapper from Atlanta, Georgia. He rose to prominence with his melodic trap style and collaborations with major artists. His albums 'Harder Than Ever' and 'My Turn' have been commercially successful and have established him as one of the most streamed rappers.",
        image: "https://via.placeholder.com/180?text=Lil+Baby",
        albums: ["It's Only Me (2024)", "Harder Than Ever (2018)", "My Turn (2020)"],
        singles: ["Drip Season 3 (2018)", "Yes Indeed ft. Drake (2018)", "Cash ft. Gunna (2017)", "Close to You (2022)"],
        instagram: "https://instagram.com/lilbaby"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.body.className;
    
    if (currentPage.includes('home-page')) {
        initHomePage();
    } else if (currentPage.includes('profile-page')) {
        initProfilePage();
    }
});

// Home Page Initialization
function initHomePage() {
    const artistsGrid = document.getElementById('artistsGrid');
    
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p class="artist-bio-preview">${artist.bio.substring(0, 100)}...</p>
        `;
        
        artistCard.addEventListener('click', function() {
            // Save selected artist to localStorage
            localStorage.setItem('selectedArtistId', artist.id);
            // Redirect to profile page
            window.location.href = 'profile.html';
        });
        
        artistsGrid.appendChild(artistCard);
    });
}

// Profile Page Initialization
function initProfilePage() {
    // Get selected artist ID from localStorage, default to Playboi Carti (id: 2)
    const selectedArtistId = localStorage.getItem('selectedArtistId') || 2;
    const artist = artistsData.find(a => a.id === parseInt(selectedArtistId));
    
    if (artist) {
        // Populate artist information
        document.getElementById('artistImage').src = artist.image;
        document.getElementById('artistImage').alt = artist.name;
        document.getElementById('artistName').textContent = artist.name;
        document.getElementById('artistBio').textContent = artist.bio;
        document.getElementById('instagram-button').href = artist.instagram;
        
        // Populate albums
        const albumsList = document.getElementById('albumsList');
        albumsList.innerHTML = '';
        artist.albums.forEach(album => {
            const li = document.createElement('li');
            li.textContent = album;
            albumsList.appendChild(li);
        });
        
        // Populate singles
        const singlesList = document.getElementById('singlesList');
        singlesList.innerHTML = '';
        artist.singles.forEach(single => {
            const li = document.createElement('li');
            li.textContent = single;
            singlesList.appendChild(li);
        });
    }
    
    // Handle follow button
    const followButton = document.getElementById('follow-button');
    if (followButton) {
        followButton.addEventListener('click', function() {
            if (followButton.textContent === 'Follow') {
                followButton.textContent = 'Following';
                alert(`You have followed ${artist.name}!`);
            } else if (followButton.textContent === 'Following') {
                const confirmUnfollow = confirm(`Are you sure you want to unfollow ${artist.name}?`);
                if (confirmUnfollow) {
                    followButton.textContent = 'Follow';
                    alert(`You have unfollowed ${artist.name}!`);
                }
            }
        });
    }
}

