let url = "https://sv443.net/jokeapi/v2/joke/Any";
document.getElementById("btn").addEventListener("click", () => {
  fetch(url)
    .then((res) => {
      console.log(res);
      res
        .json()
        .then((data) => {
          console.log(data);
          if (data.type === "single") {
            document.querySelector("h1").innerText = data.joke;
            document.querySelector("h3").innerText = "";
          } else if (data.type === "twopart") {
            document.querySelector("h1").innerText = data.setup;
            document.querySelector("h3").innerText = data.delivery;
          }
        })
        .catch((er) => {
          console.log(er);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
