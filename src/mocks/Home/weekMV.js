const songs = (name) => {
  const arr = [];

  const firstTemp = {
    id: Math.random(),
    img: "http://dummyimage.com/300x150.png/95a5a6/ffffff",
    number: 1,
    song: `Song ${1} ${name}`,
    singer: `Singer ${1}`,
  };

  arr.push(firstTemp);

  for (let index = 2; index <= 10; index += 1) {
    const nTemp = {
      id: Math.random(),
      img: "http://dummyimage.com/150x150.png/8e44ad/ffffff",
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
  VN: songs("VN"),
  "US-UK": songs("US-UK"),
  KPOP: songs("KPOP"),
};
