import React, { useState, useEffect } from "react";

const Avatar = ({ fetchedChar }) => {
  const [episodeNames, setEpisodeNames] = useState({});

  useEffect(() => {
    const fetchEpisodeNames = async () => {
      try {
        const names = await Promise.all(
          fetchedChar.map(async (character) => {
            const response = await fetch(character.episode[0]);
            const data = await response.json();

            return data;
          })
        );
        setEpisodeNames(names);
      } catch (error) {
        console.error("Error fetching episode details:", error);
      }
    };

    if (fetchedChar && fetchedChar.length > 0) {
      fetchEpisodeNames();
    }
    console.log(fetchedChar);
  }, [fetchedChar]);

  return (
    <ul className="flex-wrap p-0 flex justify-center">
      {fetchedChar
        ? fetchedChar.map((item, index) => {
            return (
              <li key={item.id} className="w-600 ">
                <div className="flex mx-5 my-10 bg-grey rounded-lg h-auto">
                  <img
                    src={item.image}
                    alt=""
                    className="w-56 min-h-56 max-h-72 rounded-tl-lg rounded-bl-lg"
                  />
                  <div className="charInfo flex flex-col justify-items-start max-h-72 ">
                    <div className="name-container mx-5 my-2">
                      <h2 className="text-white font-bold text-2xl font-sans">
                        {item.name}
                      </h2>
                      <div className="iconStatus flex items-center">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            marginRight: "10px",
                            backgroundColor:
                              `${item.status}` === "Alive" ? "green" : "red",
                          }}
                        ></div>
                        <span className="text-white">
                          {item.status} - {item.species}
                        </span>
                      </div>
                    </div>
                    <div className="location-container mx-5 my-2">
                      <span className="text-greyLight">
                        Last known location:
                      </span>
                      <h2 className="text-white text-xl font-sans">
                        {item.location.name}
                      </h2>
                    </div>
                    <div className="firstseen-container mx-5 my-2">
                      <span className="text-greyLight">First seen in:</span>
                      <h2 className="text-white text-xl font-sans">
                        {episodeNames[index] ? (
                          <span>
                            {episodeNames[index].name} -
                            <span className="text-base">
                              {episodeNames[index].episode}
                            </span>
                          </span>
                        ) : (
                          "Loading..."
                        )}
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Avatar;
