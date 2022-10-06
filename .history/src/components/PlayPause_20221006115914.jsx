import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={3}
      className="text-gray-400"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-400"
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
