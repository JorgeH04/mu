let fs = require("fs");
let axios = require("axios");

let songs = ["JTiger.mp3", "JTwinkle.mp3"];
let durations = ["00:15", "00:05"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/0`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "jfd",
      year: "1908"
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "Fj9hzlsHPoAePLvWLtIM9EU74GXNsEGzrS4vr5ydBCyMaWDlvdwC4MQ6o8KYNkP5",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
