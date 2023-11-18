function fetchData() {
  const newsKeyword = document.getElementById("newsKeyword").value;
  console.log(newsKeyword);
  const apiKey = "df1fc0912eb64bcda9752306a6595eec";
  const apiUrl = `https://newsapi.org/v2/everything?q=${newsKeyword}`;
  const api = `https://newsapi.org/v2/everything?q=${newsKeyword}&apiKey=df1fc0912eb64bcda9752306a6595eec`;

  fetch(`${api}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the data here
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
