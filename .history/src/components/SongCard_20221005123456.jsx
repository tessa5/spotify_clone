import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import PlayPause from './PlayPause';
import {playPause, setActive} from '../playerSliceredux/features/Playerslice';

const SongCard = (song, i ) => (
  <div className="flex flex-col w-[250px] p-4 bg-white/">
    
  </div>
);

export default SongCard;
