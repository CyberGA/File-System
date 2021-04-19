const fs = require("fs");
const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/posts";

const loadPost = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    const posts = await response.json();

    fs.mkdir("result", (err) => {
      if (err) {
          console.log(err)
      };
      if (!err) {
        fs.writeFile(
          "./result/posts.json",
          JSON.stringify(posts, null, 2),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    });
  }
};
loadPost(url);
