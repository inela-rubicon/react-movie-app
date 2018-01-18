import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const movies = [
  {
    id: 13,
    title: 'Forrest Gump',
    absoluteImageUrl: 'http://image.tmdb.org/t/p/w300/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg?api_key=3138ecf71d5ad1e8d8dd459e6c3e0065',
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. \'Forrest Gump\' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.',
    videos: []
  },
  {
    id: 128,
    title: 'Princess Mononoke',
    absoluteImageUrl: 'http://image.tmdb.org/t/p/w300/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg?api_key=3138ecf71d5ad1e8d8dd459e6c3e0065',
    overview: 'Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.',
    videos: []
  },
  {
    id: 12477,
    title: 'Grave of the Fireflies',
    absoluteImageUrl: 'http://image.tmdb.org/t/p/w300/bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg?api_key=3138ecf71d5ad1e8d8dd459e6c3e0065',
    overview: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.',
    videos: []
  },
  {
    id: 1891,
    title: 'The Empire Strikes Back',
    absoluteImageUrl: 'http://image.tmdb.org/t/p/w300/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg?api_key=3138ecf71d5ad1e8d8dd459e6c3e0065',
    overview: 'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.',
    videos: []
  },
  {
    id: 389,
    title: '12 Angry Men',
    absoluteImageUrl: 'http://image.tmdb.org/t/p/w300/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg?api_key=3138ecf71d5ad1e8d8dd459e6c3e0065',
    overview: 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors\' prejudices and preconceptions about the trial, the accused, and each other.',
    videos: []
  }
];

class MovieApi {
  static getPopularMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], movies));
      }, delay);
    });
  }
}

export default MovieApi;
