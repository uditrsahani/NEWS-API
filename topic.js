function convertToCountryCode() {
  const articlesContainer = document.getElementById("articlesContainer");
  articlesContainer.innerText = "Loading...";
  const topic = document.getElementById("countryNameInput").value;

  // Construct the complete URL with the API key
  const fullUrl = `https://newsapi.org/v2/everything?q=${topic}&apiKey=df1fc0912eb64bcda9752306a6595eec`;
  const headers = new Headers({
    "Content-Type": "application/json",
    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  });

  // Define the fetch options
  
  // Make a GET request to the News API
  fetch(fullUrl)
    .then((response) => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status code: ${response.status}`
        );
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Handle the retrieved data
      // console.log(data.articles);
      const articlesContainer = document.getElementById("articlesContainer");
      articlesContainer.style.display = "block";
      articlesContainer.innerHTML = "";
      data.articles.forEach((news) => {
        const articleDiv = document.createElement("div");
        articleDiv.innerHTML = `
        <img src="${news.urlToImage}" alt="${news.title}">
        <h2> ${news.title} </h2>
        <p> ${news.description}</p>
        <p> ${news.author}</p>
        <p> Published at: ${news.publishedAt}</p>
        <a href="${news.url}" target="_blank">Read More</a>
        <hr>
        `;
        articlesContainer.appendChild(articleDiv);
      });
    })
    .catch((error) => {
      // Handle errors during the fetch
      // console.error("Error during fetch operation:", error);
      alert("Error:" + error);
    });
}
