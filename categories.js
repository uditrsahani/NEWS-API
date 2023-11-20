function readByCategories() {
  const articlesContainer = document.getElementById("articlesContainer");
  articlesContainer.innerText = "Loading...";
  const categoryName = document.getElementById("categoryName").value;
  // console.log(categoryName);

  //URL for API call
  const fullUrl = `https://newsapi.org/v2/top-headlines?q=${categoryName}&apiKey=df1fc0912eb64bcda9752306a6595eec`;

  // console.log(fullUrl);
  //Make a GET request to the News API
  fetch(fullUrl)
    .then((response) => {
      //check if the request was successful
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status code: ${response.status}`
        );
      }
      //Parse the JSON response
      return response.json();
    })
    .then((data) => {
      //handle the retrieved data
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
      console.log("Error during fetch operation: ", error);
    });
}
