import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
   const [songs, setSongs] = useState([
      { title: "almost home", id: 1 },
      { title: "his wild darkness", id: 2 },
      { title: "memory gospel", id: 3 },
   ]);
   useEffect(() => {
      console.log("songs re-render ", songs);
   }, [songs]);

   const [age, setAge] = useState(28);
   useEffect(() => {
      console.log("age re-render ", age);
   }, [age]);

   const addSong = (title) => {
      setSongs([...songs, { title, id: uuid() }]);
   };
   return (
      <div className="song-list">
         <ul>
            {songs.map((song) => (
               <li key={song.id}>{song.title}</li>
            ))}
         </ul>
         <NewSongForm addSong={addSong} />
         <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
      </div>
   );
};

export default SongList;
