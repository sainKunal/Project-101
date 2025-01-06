const apiKey = 'c3e50174-a77d-4c96-906d-27087e4e1807';  // Replace with your own API key from EventRegistry

document.getElementById('setPreferences').addEventListener('click', function() {
  const category = document.getElementById('category').value;
  fetchNewsArticles(category);
});

async function fetchNewsArticles(category) {
  const url = `https://eventregistry.org/api/v1/article/getArticles?category=${category}&apiKey=${apiKey}&resultType=articles&articlesSortBy=date&count=5`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'ok') {
      displayArticles(data.articles.results);  // Correct response structure based on EventRegistry
    } else {
      console.error('Error fetching news articles:', data.message);
    }
  } catch (error) {
    console.error('Error fetching news articles:', error);
  }
}

function displayArticles(articles) {
  const articlesList = document.getElementById('articlesList');
  articlesList.innerHTML = '';  // Clear previous articles
  
  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');
    
    const sentiment = analyzeSentiment(article.title);  // Simple sentiment analysis on title
    const sentimentClass = sentiment === 'positive' ? 'positive' : sentiment === 'negative' ? 'negative' : 'neutral';
    
    articleElement.innerHTML = `
      <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
      <p><em>Source: ${article.source.name}</em></p>
      <p>${article.description}</p>
      <p class="sentiment ${sentimentClass}">Sentiment: ${sentiment}</p>
    `;
    
    articlesList.appendChild(articleElement);
  });
}

function analyzeSentiment(text) {
  const positiveWords = ['good', 'great', 'excellent', 'positive', 'amazing', 'breakthrough'];
  const negativeWords = ['bad', 'terrible', 'worst', 'negative', 'disaster'];

  const textLowerCase = text.toLowerCase();
  let sentiment = 'neutral';

  if (positiveWords.some(word => textLowerCase.includes(word))) {
    sentiment = 'positive';
  } else if (negativeWords.some(word => textLowerCase.includes(word))) {
    sentiment = 'negative';
  }

  return sentiment;
}
