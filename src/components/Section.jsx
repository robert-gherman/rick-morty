import React, { useState } from "react";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";

function Section() {
  const [charName, setCharName] = useState("");
  const [fetchedChar, setFetchedChar] = useState(null);

  const handleGetCharacter = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${charName}`
      );
      const data = await response.json();
      setFetchedChar(data.results);
      console.log(fetchedChar);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <div
      className="h-auto bg-midnight"
      style={{ minHeight: "calc(-108px + 80vh)" }}
    >
      <SearchBar
        onInputChange={setCharName}
        onButtonClick={handleGetCharacter}
      />
      <p className="text-blueDark mt-2 text-sm flex justify-center">
        <span className="font-bold">Which Rick and Morty Character?</span>
      </p>
      <Avatar fetchedChar={fetchedChar} />
    </div>
  );
}

export default Section;
