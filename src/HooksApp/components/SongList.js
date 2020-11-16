import React, { useState } from "react";
import { v1 as uuid } from "uuid";
const SongList = () => {
   const [songs, setSongs] = useState([
      { title: "almost home", id: 1 },
      { title: "his wild darkness", id: 2 },
      { title: "memory gospel", id: 3 },
   ]);

   const addSong = () => {
      setSongs([...songs, { title: "new song", id: uuid() }]);
   };
   return (
      <div className="song-list">
         <ul>
            {songs.map((song) => (
               <li key={song.id}>{song.title}</li>
            ))}
         </ul>
         <button onClick={addSong}>Add Song</button>
      </div>
   );
};

export default SongList;
