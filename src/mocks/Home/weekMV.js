const songs = (name, amount) => {
  const arr = [];

  const imgList = [
    "https://bit.ly/2STZqcf",
    "https://bit.ly/3itFhET",
    "https://bit.ly/3icCoIh",
    "https://bit.ly/3ce4yio",
    "https://bit.ly/3vPrwUN",
    "https://bit.ly/3z2sChF",
    "https://bit.ly/3vM5nXg",
    "https://bit.ly/3vTMQIw",
    "https://bit.ly/3fLXJGK",
    "https://bit.ly/34PVUSM",
    "https://bit.ly/3wUZerV",
    "https://bit.ly/3g6PvYX",
    "https://bit.ly/3yYPXAV",
    "https://bit.ly/2S7A4aR",
    "https://bit.ly/3wRRze3",
    "https://bit.ly/3x9rOGn",
    "https://bit.ly/3fQmnGw",
    "https://bit.ly/2SWdimi",
    "https://bit.ly/3phzH9M",
    "https://bit.ly/34JgRPB",
  ];

  const randomImg = Math.floor(Math.random() * 20);

  const firstTemp = {
    id: Math.random(),
    img: imgList[randomImg],
    number: 1,
    song: `Song ${1} ${name}`,
    singer: `Singer ${1}`,
  };

  arr.push(firstTemp);

  for (let index = 2; index <= amount; index += 1) {
    const randomImg = Math.floor(Math.random() * 20);

    const nTemp = {
      id: Math.random(),
      img: imgList[randomImg],
      number: index,
      song: `Song ${index} ${name}`,
      singer: `Singer ${index}`,
    };

    arr.push(nTemp);
  }
  return arr;
};

export const tabMenuWeekMV = ["VN", "US-UK", "KPOP"];

export const listSongsWeekMV = {
  VN: songs("VN", 10),
  "US-UK": songs("US-UK", 10),
  KPOP: songs("KPOP", 10),
};
