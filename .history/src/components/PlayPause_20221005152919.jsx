import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle 
      size={35}
    />
  ) : (
    <FaPlayCircle
      size={35}
    />
  )
);

export default PlayPause;
