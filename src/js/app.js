import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => saving, (error) => {
  throw new Error(error);
});
