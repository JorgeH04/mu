let fs = require("fs");
let axios = require("axios");

let songs = ["Ataque1.mp3", "Ataque2.mp3"];
let durations = ["00:13", "00:20"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmQkk4F7HawRtsh63Ch2W6WotpDgmJCf19fguHst1mmfaw/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmQkk4F7HawRtsh63Ch2W6WotpDgmJCf19fguHst1mmfaw/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "Ataque77",
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
