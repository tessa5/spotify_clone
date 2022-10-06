import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import PlayPause from './PlayPause';
import {playPause, setActive} from '../playerSliceredux/features/Playerslice';

const SongCard = (song, i) => (
  <div>SongCard</div>
);

export default SongCard;
