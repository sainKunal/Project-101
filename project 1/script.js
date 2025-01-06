async function fetchMatchData() {
    try {
      const response = await fetch('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm', {  
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
          'X-RapidAPI-Key': 'bb32f532c1mshe26f10e04cc08a4p1c3e1cjsnc6d05e68e644'
        }
      });
  
      const data = await response.json();
      console.log("API Response: ", data);  // Log the entire API response
  
      if (data && data.matches && data.matches.length > 0) {
        const match = data.matches[0];  // Get the first match in the response
  
        document.getElementById('team1-name').innerHTML = `Team 1: <span>${match.team1.name}</span>`;
        document.getElementById('team2-name').innerHTML = `Team 2: <span>${match.team2.name}</span>`;
        document.getElementById('score').innerHTML = `Score: <span>${match.score}</span>`;
  
        document.getElementById('playerA-score').innerText = match.team1.score;
        document.getElementById('playerB-score').innerText = match.team2.score;
  
        document.getElementById('team1-bar').style.height = `${match.team1.score * 10}px`;
        document.getElementById('team2-bar').style.height = `${match.team2.score * 10}px`;
        document.getElementById('team1-bar').style.width = `${(match.team1.score / (match.team1.score + match.team2.score)) * 50}%`;
        document.getElementById('team2-bar').style.width = `${(match.team2.score / (match.team1.score + match.team2.score)) * 50}%`;
      } else {
       
        document.getElementById('team1-name').innerHTML = "No live match data available at the moment.";
        document.getElementById('team2-name').innerHTML = "";
        document.getElementById('score').innerHTML = "";
        document.getElementById('playerA-score').innerText = "";
        document.getElementById('playerB-score').innerText = "";
        document.getElementById('team1-bar').style.height = "0px";
        document.getElementById('team2-bar').style.height = "0px";
      }
  
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  }
  
  window.onload = function() {
    fetchMatchData();
  };
  
  setInterval(fetchMatchData, 10000);
  