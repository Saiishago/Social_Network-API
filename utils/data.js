const names = [
    'Kutlwano',
    'Kitso',
    'Katlego',
    'Omphile',
    'Oreatlile',
    'Amogelang',
    'Sedilaone',
    'Bino',
    'Tsholofelo',
    'Tshegofatso',
    'Malebo',
    'Sello',
];

const thoughts = [
    'Using APIs is life changing',
    'REACT brings a reaction out of me',
    'Coding is like Tetris, you miss one piece and it starts bugging',
    'Car legos make me happy, in actual fact, all legos',
    'Changing the tech world, one key at a time',
    'Front-End makes WebDevelopment look easy',
    'Becoming a Microsoft Expert',
    'Lets go sledding!',
];

const users = [];
const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
const getRandomUserName = () =>
  `${getRandomArrItem(names)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        description: getRandomArrItem(thoughts),
        buildSuccess: Math.random() < 0.5,
        //tags: [...getApplicationTags(3)],
      });
    }
    return results;
};

module.exports = {
  getRandomName,
  getRandomUserName,
  genRandomIndex,
  getRandomThoughts
};