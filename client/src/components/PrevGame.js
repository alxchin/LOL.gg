import { React, useState } from 'react'
import axios from 'axios'


const PrevGame = () => {
  const [searchText, setSearchText] = useState("");
  const [gameList, setGameList] = useState([]);
  const [playerData, setPlayerData] = useState({});


  function getPlayerGames(event) {
    axios.get("http://localhost:4000/player5Games", { params: { username: searchText } })
      .then(function (response) {
        setGameList(response.data)
      }).catch(function (error) {
        console.log(error)
      })
  }
  console.log(gameList);

  function getPlayerStats(event) {
    axios.get("http://localhost:4000/playerInfo", { params: { username: searchText } })
      .then(function (response) {
        setPlayerData(response.data)
      }).catch(function (error) {
        console.log(error)
      })
  }
  console.log(playerData)


  function handleSubmit(event) {
    event.preventDefault();
    getPlayerGames(event);
    getPlayerStats(event);
  }

  return (
    <>
      <div className="header">
        <h2> League of Legends Stat Tracker </h2>
        <form>
          <input type='text' placeholder="Insert summoner name" onChange={e => setSearchText(e.target.value)}></input>
          <button onClick={handleSubmit} type="submit"> Search Player Stats</button>
        </form>
      </div>

      <div className="game">
        {gameList.length !== 0 ?
          <>
            {
              gameList.map((gameData, index) =>
                <>
                  <h2> Game {index + 1}</h2>
                  <div> {gameData.info.participants.map((data, participantIndex) =>
                    <p> PLAYER {participantIndex + 1}: {data.summonerName}  </p>
                  )}
                  </div>
                </>
              )}
          </>
          :
          <>
            <h1> No data found</h1>
          </>
        }
      </div>

      <div className="outputStats">
        {JSON.stringify(playerData) !== '{}' ?
          <>
            <p> {playerData[0].name}</p>
            <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/" + playerData[0].profileIconId + ".png"}></img>
            <p> Summoner Level : {playerData[0].summonerLevel}</p>
          </>
          :
          <>
            <h1> No data found</h1>
          </>
        }
      </div>
      <div class="footer">
        Designed and Built by Alex Chin
      </div>

    </>

  )
}

export default PrevGame