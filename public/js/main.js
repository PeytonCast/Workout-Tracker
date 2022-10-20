const fs = require("fs");
const fetch = require("node-fetch");
const key=process.env.API_KEY

if (key ) {
  throw new Error("No API key is provided");
}

async function getYoutubeResults(query, resultsPerPage, pageToken) {
  console.log("Ready to get Youtube data!");
  let url = `https://www.googleapis.com/youtube/v3/search?key=${key
}&type=video&part=snippet&q=${query}`;
  if (resultsPerPage) {
    url = `${url}&maxResults=${resultsPerPage}`;
  }
  if (pageToken) {
    url = `${url}&pageToken=${pageToken}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return data;
}

async function main() {
  const videoData = [];
  let totalPages = 10;
  let nextPageToken = undefined;

  for (let counter = 0; counter < totalPages; counter = counter + 1) {
    const data = await getYoutubeResults("JavaScript", 25, nextPageToken);
    videoData.push(...data.items);
    nextPageToken = data.nextPageToken;
  }

  const videoDataJSON = JSON.stringify(videoData, null, 2);
  fs.writeFileSync("./data.json", videoDataJSON);
}

main();