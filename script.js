/* Base Styles */
:root {
    --primary-color: #1a73e8;
    --secondary-color: #0d47a1;
    --accent-color: #ff5722;
    --dark-color: #121212;
    --light-color: #f5f5f5;
    --gray-color: #757575;
    --light-gray: #e0e0e0;
    --success-color: #4caf50;
    --danger-color: #f44336;
    --warning-color: #ff9800;
    --info-color: #2196f3;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: var(--dark-color);
    background-color: #f9f9f9;
    line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.btn-login {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-login:hover {
    background-color: rgba(26, 115, 232, 0.1);
}

.btn-signup {
    background-color: var(--primary-color);
    color: white;
}

.btn-signup:hover {
    background-color: var(--secondary-color);
}

/* Header Styles */
.header {
    background-color: white;
    box-shadow: var(--box-shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img {
    width: 40px;
    height: 40px;
}

.logo h1 {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav a {
    font-weight: 600;
    color: var(--gray-color);
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav a:hover, .nav a.active {
    color: var(--primary-color);
}

.nav a i {
    font-size: 0.9rem;
}

.user-actions {
    display: flex;
    gap: 10px;
}

.mobile-menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 80px 0;
    text-align: center;
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.search-bar {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
}

.search-bar input {
    flex: 1;
    padding: 15px 20px;
    border: none;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    font-size: 1rem;
}

.search-bar button {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    cursor: pointer;
    transition: var(--transition);
}

.search-bar button:hover {
    background-color: #e64a19;
}

/* Section Header */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.section-header h3 {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-header h3 i {
    color: var(--primary-color);
}

.view-all {
    color: var(--primary-color);
    font-weight: 600;
    transition: var(--transition);
}

.view-all:hover {
    text-decoration: underline;
}

/* Matches Grid */
.matches-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.match-card {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    transition: var(--transition);
}

.match-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.match-card.live {
    border-left: 4px solid var(--accent-color);
}

.match-card-header {
    padding: 15px;
    background-color: #f5f5f5;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.match-card-header .competition {
    font-weight: 600;
    color: var(--primary-color);
}

.match-card-header .status {
    background-color: var(--accent-color);
    color: white;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.match-card-content {
    padding: 20px;
}

.match-teams {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
}

.team img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.team-name {
    font-weight: 600;
    text-align: center;
}

.match-score {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-color);
}

.match-info {
    display: flex;
    justify-content: space-between;
    color: var(--gray-color);
    font-size: 0.9rem;
}

/* Match Details Section */
.match-details {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    margin: 40px auto;
    overflow: hidden;
}

.match-header {
    padding: 20px;
    background-color: #f5f5f5;
    border-bottom: 1px solid var(--light-gray);
}

.teams {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.team {
    display: flex;
    align-items: center;
    width: 30%;
}

.home-team {
    justify-content: flex-start;
}

.away-team {
    justify-content: flex-end;
}

.team img {
    width: 60px;
    height: 60px;
    margin: 0 15px;
}

.match-info {
    text-align: center;
    width: 40%;
}

.score {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 10px 0;
}

.status {
    color: var(--accent-color);
    font-weight: 600;
    margin-bottom: 5px;
}

.competition {
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 5px;
}

.date {
    color: var(--gray-color);
    font-size: 0.9rem;
}

/* Match Tabs */
.match-tabs {
    display: flex;
    border-bottom: 1px solid var(--light-gray);
}

.tab-btn {
    padding: 15px 25px;
    background: none;
    border: none;
    font-weight: 600;
    color: var(--gray-color);
    cursor: pointer;
    position: relative;
    transition: var(--transition);
}

.tab-btn:hover {
    color: var(--primary-color);
}

.tab-btn.active {
    color: var(--primary-color);
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary-color);
}

.tab-content {
    display: none;
    padding: 20px;
}

.tab-content.active {
    display: block;
}

/* Lineups Tab */
.lineup-container {
    display: flex;
    gap: 30px;
}

.formation-display {
    flex: 1;
}

.formation-title {
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--primary-color);
}

.pitch {
    background-color: #4CAF50;
    background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 50%, transparent 50%),
                      linear-gradient(rgba(255,255,255,0.1) 50%, transparent 50%);
    background-size: 30px 30px;
    border-radius: 10px;
    padding: 20px;
    height: 500px;
    position: relative;
    overflow: hidden;
    border: 3px solid #2E7D32;
}

.pitch::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255,255,255,0.5);
    z-index: 1;
}

.pitch::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 50%;
}

.formation {
    position: relative;
    height: 100%;
}

.home-formation {
    top: 10px;
}

.away-formation {
    bottom: 10px;
}

.player {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.8rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transform: translate(-50%, -50%);
    z-index: 2;
}

.home-player {
    background-color: #E53935;
    color: white;
}

.away-player {
    background-color: #1E88E5;
    color: white;
}

.lineup-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.team-lineup {
    background-color: #f9f9f9;
    border-radius: var(--border-radius);
    padding: 20px;
}

.team-lineup h4 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--light-gray);
}

.lineup-section h5 {
    margin-bottom: 10px;
    color: var(--gray-color);
    font-size: 0.9rem;
}

.player-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.player-item {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    transition: var(--transition);
}

.player-item:hover {
    transform: translateX(5px);
}

.player-number {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: var(--light-gray);
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    font-size: 0.8rem;
    margin-right: 10px;
    font-weight: 600;
}

.player-name {
    font-weight: 600;
    font-size: 0.9rem;
}

.player-position {
    font-size: 0.7rem;
    color: var(--gray-color);
    margin-left: auto;
}

/* Stats Tab */
.stats-container {
    padding: 20px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.stat-item {
    margin-bottom: 20px;
}

.stat-name {
    text-align: center;
    font-weight: 600;
    margin: 5px 0;
    color: var(--gray-color);
}

.stat-bar {
    display: flex;
    align-items: center;
    height: 30px;
}

.home-stat {
    background-color: #E53935;
    color: white;
    text-align: right;
    padding-right: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    border-radius: 5px 0 0 5px;
}

.away-stat {
    background-color: #1E88E5;
    color: white;
    text-align: left;
    padding-left: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    height: 100%;
    border-radius: 0 5px 5px 0;
}

/* Commentary Tab */
.commentary-container {
    max-height: 500px;
    overflow-y: auto;
    padding-right: 10px;
}

.commentary-item {
    padding: 15px 0;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    gap: 15px;
}

.commentary-item.highlight {
    background-color: rgba(26, 115, 232, 0.05);
    margin: 0 -20px;
    padding: 15px 20px;
}

.minute {
    font-weight: 600;
    color: var(--primary-color);
    min-width: 30px;
}

.event {
    flex: 1;
}

.event i {
    margin-right: 8px;
    color: var(--gray-color);
}

.event i.fa-futbol {
    color: var(--accent-color);
}

.event i.yellow {
    color: #ffc107;
}

/*
