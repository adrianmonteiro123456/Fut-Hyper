// Sample data - in a real app, this would come from APIs
const sampleMatches = [
    {
        id: 1,
        homeTeam: "Flamengo",
        awayTeam: "Palmeiras",
        homeLogo: "https://via.placeholder.com/50",
        awayLogo: "https://via.placeholder.com/50",
        date: "2023-11-15",
        time: "21:00",
        league: "brasileirao",
        stadium: "Maracanã",
        competition: "Brasileirão Série A"
    },
    {
        id: 2,
        homeTeam: "Chelsea",
        awayTeam: "Liverpool",
        homeLogo: "https://via.placeholder.com/50",
        awayLogo: "https://via.placeholder.com/50",
        date: "2023-11-16",
        time: "16:30",
        league: "premier",
        stadium: "Stamford Bridge",
        competition: "Premier League"
    },
    {
        id: 3,
        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",
        homeLogo: "https://via.placeholder.com/50",
        awayLogo: "https://via.placeholder.com/50",
        date: "2023-11-18",
        time: "15:00",
        league: "laliga",
        stadium: "Camp Nou",
        competition: "La Liga"
    }
];

const sampleLineups = {
    1: {
        homeTeam: "Flamengo",
        awayTeam: "Palmeiras",
        homeFormation: "4-3-3",
        awayFormation: "4-2-3-1",
        homePlayers: [
            { number: 1, name: "Santos", position: "GK" },
            { number: 2, name: "Rodinei", position: "RB" },
            { number: 3, name: "David Luiz", position: "CB" },
            { number: 4, name: "Léo Pereira", position: "CB" },
            { number: 6, name: "Ayrton Lucas", position: "LB" },
            { number: 5, name: "Thiago Maia", position: "CM" },
            { number: 8, name: "Gerson", position: "CM" },
            { number: 7, name: "Everton Ribeiro", position: "CM" },
            { number: 11, name: "Bruno Henrique", position: "LW" },
            { number: 9, name: "Gabigol", position: "ST" },
            { number: 10, name: "Arrascaeta", position: "RW" }
        ],
        awayPlayers: [
            { number: 21, name: "Weverton", position: "GK" },
            { number: 2, name: "Marcos Rocha", position: "RB" },
            { number: 15, name: "Gustavo Gómez", position: "CB" },
            { number: 13, name: "Luan", position: "CB" },
            { number: 22, name: "Joaquín Piquerez", position: "LB" },
            { number: 8, name: "Zé Rafael", position: "CDM" },
            { number: 28, name: "Danilo", position: "CDM" },
            { number: 7, name: "Dudu", position: "RM" },
            { number: 23, name: "Raphael Veiga", position: "CAM" },
            { number: 10, name: "Rony", position: "LM" },
            { number: 9, name: "Rústico", position: "ST" }
        ]
    }
};

const sampleStats = {
    1: {
        possession: { home: 58, away: 42 },
        shots: { home: 15, away: 9 },
        shotsOnTarget: { home: 6, away: 3 },
        corners: { home: 7, away: 4 },
        fouls: { home: 12, away: 15 },
        yellowCards: { home: 2, away: 3 },
        redCards: { home: 0, away: 0 }
    }
};

const sampleNews = [
    {
        id: 1,
        title: "Flamengo vence Palmeiras e se aproxima do líder",
        excerpt: "Em jogo emocionante no Maracanã, Flamengo vence por 2x1 com gols de Gabigol e Arrascaeta.",
        image: "https://via.placeholder.com/400x300",
        date: "2023-11-15",
        author: "João Silva"
    },
    {
        id: 2,
        title: "Técnico do Palmeiras comenta derrota",
        excerpt: "Abel Ferreira diz que time jogou bem, mas erros defensivos custaram a partida.",
        image: "https://via.placeholder.com/400x300",
        date: "2023-11-15",
        author: "Maria Souza"
    },
    {
        id: 3,
        title: "Brasileirão: veja a tabela atualizada",
        excerpt: "Com os resultados da rodada, Atlético-MG segue na liderança, mas Flamengo se aproxima.",
        image: "https://via.placeholder.com/400x300",
        date: "2023-11-15",
        author: "Carlos Oliveira"
    }
];

// DOM Elements
const matchesContainer = document.getElementById('matches-container');
const leagueFilter = document.getElementById('league-filter');
const dateFilter = document.getElementById('date-filter');
const matchSelector = document.getElementById('match-selector');
const lineupContainer = document.getElementById('lineup-container');
const statsContainer = document.getElementById('stats-container');
const newsContainer = document.getElementById('news-container');

// Functions
function renderMatches(matches) {
    matchesContainer.innerHTML = '';
    
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <div class="match-teams">
                <div class="match-team">
                    <img src="${match.homeLogo}" alt="${match.homeTeam}">
                    <span>${match.homeTeam}</span>
                </div>
                <div class="match-vs">vs</div>
                <div class="match-team">
                    <img src="${match.awayLogo}" alt="${match.awayTeam}">
                    <span>${match.awayTeam}</span>
                </div>
            </div>
            <div class="match-info">
                <div>${match.competition}</div>
                <div>${match.stadium}</div>
                <div class="match-time">${match.date} • ${match.time}</div>
            </div>
        `;
        matchesContainer.appendChild(matchCard);
    });
}

function renderMatchSelector(matches) {
    matchSelector.innerHTML = '<option value="">Selecione uma partida</option>';
    
    matches.forEach(match => {
        const option = document.createElement('option');
        option.value = match.id;
        option.textContent = `${match.homeTeam} vs ${match.awayTeam} - ${match.date}`;
        matchSelector.appendChild(option);
    });
}

function renderLineup(matchId) {
    if (!matchId) {
        lineupContainer.innerHTML = '<p>Selecione uma partida para ver as escalações</p>';
        return;
    }
    
    const lineup = sampleLineups[matchId];
    if (!lineup) {
        lineupContainer.innerHTML = '<p>Escalações não disponíveis para esta partida</p>';
        return;
    }
    
    lineupContainer.innerHTML = `
        <h3>${lineup.homeTeam} ${lineup.homeFormation} vs ${lineup.awayTeam} ${lineup.awayFormation}</h3>
        <div class="lineup-teams">
            <div class="lineup-team">
                <h4>${lineup.homeTeam}</h4>
                <ul>
                    ${lineup.homePlayers.map(player => `<li>${player.number} - ${player.name} (${player.position})</li>`).join('')}
                </ul>
            </div>
            <div class="lineup-team">
                <h4>${lineup.awayTeam}</h4>
                <ul>
                    ${lineup.awayPlayers.map(player => `<li>${player.number} - ${player.name} (${player.position})</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderStats(matchId) {
    if (!matchId) {
        statsContainer.innerHTML = '<p>Selecione uma partida para ver as estatísticas</p>';
        return;
    }
    
    const stats = sampleStats[matchId];
    if (!stats) {
        statsContainer.innerHTML = '<p>Estatísticas não disponíveis para esta partida</p>';
        return;
    }
    
    statsContainer.innerHTML = `
        <h3>Estatísticas da Partida</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-name">Posse de Bola</div>
                <div class="stat-bar">
                    <div class="stat-home" style="width: ${stats.possession.home}%">${stats.possession.home}%</div>
                    <div class="stat-away" style="width: ${stats.possession.away}%">${stats.possession.away}%</div>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-name">Finalizações</div>
                <div class="stat-bar">
                    <div class="stat-home" style="width: ${(stats.shots.home / (stats.shots.home + stats.shots.away)) * 100}%">${stats.shots.home}</div>
                    <div class="stat-away" style="width: ${(stats.shots.away / (stats.shots.home + stats.shots.away)) * 100}%">${stats.shots.away}</div>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-name">Finalizações no Gol</div>
                <div class="stat-bar">
                    <div class="stat-home" style="width: ${(stats.shotsOnTarget.home / (stats.shotsOnTarget.home + stats.shotsOnTarget.away)) * 100}%">${stats.shotsOnTarget.home}</div>
                    <div class="stat-away" style="width: ${(stats.shotsOnTarget.away / (stats.shotsOnTarget.home + stats.shotsOnTarget.away)) * 100}%">${stats.shotsOnTarget.away}</div>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-name">Escanteios</div>
                <div class="stat-value">${stats.corners.home} - ${stats.corners.away}</div>
            </div>
            <div class="stat-item">
                <div class="stat-name">Faltas</div>
                <div class="stat-value">${stats.fouls.home} - ${stats.fouls.away}</div>
            </div>
            <div class="stat-item">
                <div class="stat-name">Cartões Amarelos</div>
                <div class="stat-value">${stats.yellowCards.home} - ${stats.yellowCards.away}</div>
            </div>
            <div class="stat-item">
                <div class="stat-name">Cartões Vermelhos</div>
                <div class="stat-value">${stats.redCards.home} - ${stats.redCards.away}</div>
            </div>
        </div>
    `;
}

function renderNews(news) {
    newsContainer.innerHTML = '';
    
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-content">
                <h3 class="news-title">${item.title}</h3>
                <p class="news-excerpt">${item.excerpt}</p>
                <div class="news-meta">
                    <span>${item.author}</span>
                    <span>${item.date}</span>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

function filterMatches() {
    const league = leagueFilter.value;
    const date = dateFilter.value;
    
    let filteredMatches = sampleMatches;
    
    if (league !== 'all') {
        filteredMatches = filteredMatches.filter(match => match.league === league);
    }
    
    if (date) {
        filteredMatches = filteredMatches.filter(match => match.date === date);
    }
    
    renderMatches(filteredMatches);
}

// Event Listeners
leagueFilter.addEventListener('change', filterMatches);
dateFilter.addEventListener('change', filterMatches);

matchSelector.addEventListener('change', (e) => {
    const matchId = parseInt(e.target.value);
    renderLineup(matchId);
    renderStats(matchId);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMatches(sampleMatches);
    renderMatchSelector(sampleMatches);
    renderNews(sampleNews);
    
    // Set today's date as default in date filter
    const today = new Date().toISOString().split('T')[0];
    dateFilter.value = today;
    dateFilter.max = today;
});
