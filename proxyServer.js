var express = require('express');
var cors = require('cors');
const axios = require('axios');
const { response } = require('express');


var app = express();

app.use(cors());

const API_KEY = "xxxx";

function getPlayerID(playerName) {
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
        .then(response => {
            console.log(response.data);
            return response.data.id
        }).catch(err => err);
}

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


app.listen(4000, function () {
    console.log('server started on port 4000')
}) //localhost:4000



