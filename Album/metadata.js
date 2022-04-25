let fs = require("fs");
let axios = require("axios");

let songs = ["punk1.mp3", "punk2.mp3"];
let durations = ["00:30", "00:30"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmZC3q9Q5Gz3gS93H6okT9NZAj3z4cWYydpmri2ArZTKxf/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmZC3q9Q5Gz3gS93H6okT9NZAj3z4cWYydpmri2ArZTKxf/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "Blood4blood",
      year: "2022"
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
