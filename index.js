const https = require("https");
const fs = require("fs");
const url = "https://jsonplaceholder.typicode.com/posts";

https.get(url, (res) => {
  res.setEncoding("utf8");
  let post = "";
  res.on("data", (data) => {
    post += data;
  });
  res.on("end", () => {
    post = JSON.parse(post);
    // console.log(post);

    savePosts(post);
  });
});

//save post to posts.json
const savePosts = (post) => {
  fs.mkdir("result", (err) => {
    if (err) {
      console.log(err);
    }
    if (!err) {
      fs.writeFile(
        "./result/posts.json",
        JSON.stringify(post, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
};
