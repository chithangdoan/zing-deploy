const songs = (name) => {
  const arr = [];
  for (let index = 0; index < 10; index += 1) {
    const temp = {
      id: Math.random(),
      img: "http://dummyimage.com/300x150.png/2980b9/ffffff",
      number: index,
      song: `Song ${index} ${name}`,
      singer: `Singer ${index}`,
    };
    arr.push(temp);
  }
  return arr;
};

export const tabMenuWeekMV = ["VN", "US-UK", "KPOP"];

export const listSongsWeekMV = {
  VN: songs("VN"),
  "US-UK": songs("US-UK"),
  KPOP: songs("KPOP"),
};
