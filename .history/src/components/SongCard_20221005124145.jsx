import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/PlayerSlice';

const SongCard = (song, i ) => (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backfrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center item-center bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.title === song.title ? 'flex bg-black bg-opacity'}`}>

      </div>
    </div>
  </div>
);

export default SongCard;
