import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
const VOLUME = 'videoplayer-volume';

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
}

function getVolume(event) {
  localStorage.setItem(VOLUME, event.volume);
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

player.on('volumechange', throttle(getVolume, 1000));
player.setVolume(localStorage.getItem(VOLUME) || 0.5);
