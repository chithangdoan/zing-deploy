const songs = (name) => {
  const arr = [];

  for (let index = 1; index <= 5; index += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const nTemp = {
      id: Math.random(),
      img: `http://dummyimage.com/150x150.png/${randomColor}/ffffff`,
      number: index,
      song: `Song ${index} ${name}`,
      singer: `Singer ${index}`,
    };
    arr.push(nTemp);
  }
  return arr;
};

export const topSong = songs("Top Song");
