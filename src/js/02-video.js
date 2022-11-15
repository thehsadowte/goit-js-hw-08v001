import Player from '@vimeo/player';
import { throttle } from 'lodash';

const videoIframe = document.querySelector('#vimeo-player');
const player = new Player(videoIframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
resumePlayback();
