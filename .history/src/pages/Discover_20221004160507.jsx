import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import useGetTop

const Discover = () => {
  const genreTitle = 'pop';

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-3xl text-white font-bold">Discover {genreTitle}</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 rounded-lg outline-none text-sm sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genres.key} value={genres.value}>{genres.title}</option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
