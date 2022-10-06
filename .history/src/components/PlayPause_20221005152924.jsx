import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle 
      size={35}
      className={}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className={}
    />
  )
);

export default PlayPause;
