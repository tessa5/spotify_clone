import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import PlayPause from './PlayPause';
import {playPause, setActive} from '../playerSliceredux/features/Playerslice';

const SongCard = (song, i ) => (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backfrop-blur-">
    
  </div>
);

export default SongCard;