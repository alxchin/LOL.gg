var express = require('express');
var cors = require('cors');
const axios = require('axios');
const { response } = require('express');
require('dotenv').config()

var app = express();

app.use(cors());


const API_KEY = ''

//---------------------------------GETS PLAYERS INFORMATION (ICONS, NAMES, LEVEL)------------------------//
function getPlayerName(playerName) {
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data.name
        }).catch(err => err);
}

app.get('/playerInfo', async (req, res) => {
    const playerName = req.query.username;
    const summonerName = await getPlayerName(playerName);
    const API_CALL_2 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + API_KEY;
    var playerUserNameArray = []
    const playerUserName = await axios.get(API_CALL_2)
        .then(response => response.data)
        .catch(err => err)
    playerUserNameArray.push(playerUserName)
    res.json(playerUserNameArray)
});

//---------------------------------GETS PLAYERS RANK STATUS (RANK, WIN, LOSS))------------------------//
function getPlayerID(playerName) {
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data.id
        }).catch(err => err);
}

app.get('/playerRank', async (req, res) => {
    const playerName = req.query.username;
    const summonerId = await getPlayerID(playerName);
    const API_CALL_3 = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + summonerId + "?api_key=" + API_KEY;
    var playerRankArray = []
    const playerRankElo = await axios.get(API_CALL_3)
        .then(response => response.data)
        .catch(err => err)
    playerRankArray.push(playerRankElo)
    res.json(playerRankArray)
});

//---------------------------------GETS PLAYERS MATCH HISTORY ------------------------------------//
function getPlayerPUUID(playerName) {
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data.puuid
        }).catch(err => err);
}

app.get('/player5Games', async (req, res) => {
    const playerName = req.query.username;
    //PUUID 
    const PUUID = await getPlayerPUUID(playerName);
    const API_CALL = "https://americas.api.riotgames.com" + "/lol/match/v5/matches/by-puuid/" + PUUID + "/ids" + "?api_key=" + API_KEY

    //get API_CALL
    // give us game IDs
    const gameIDs = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err => err)
    console.log(gameIDs)

    //loop throught game ID and get information (API CALL) 
    var matchDataArray = [];

    for (var i = 0; i < gameIDs.length - 13; i++) {
        const matchID = gameIDs[i];
        const matchData = await axios.get("https://americas.api.riotgames.com" + "/lol/match/v5/matches/" + matchID + "?api_key=" + API_KEY)
            .then(response => response.data)
            .catch(err => err)
        matchDataArray.push(matchData)

    }
    //save information in an array, JSON response to frontend. 
    res.json(matchDataArray)
});


app.listen(4000, function () {
    console.log('server started on port 4000')
}) //localhost:4000



