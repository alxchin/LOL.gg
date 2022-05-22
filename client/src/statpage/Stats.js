import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import {
    Container, Content, HeaderContent, IconSummoner, EloSummoner, SummonerInfo, FooterContent,
    CircleDiv, WinsLabel, LossesLabel, ReturnHome, HistoryPage, Space,
} from "./styles";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import iron from "../pics/Emblem_Iron.png"
import bronze from "../pics/Emblem_Bronze.png"
import silver from "../pics/Emblem_Silver.png"
import gold from "../pics/Emblem_Gold.png"
import platinum from "../pics/Emblem_Platinum.png"
import diamond from "../pics/Emblem_Diamond.png"
import master from "../pics/Emblem_Master.png"
import grandmaster from "../pics/Emblem_Grandmaster.png"
import challenger from "../pics/Emblem_Challenger.png"
import { Link } from 'react-router-dom'


const Stats = () => {
    const { id } = useParams();
    const [playerData, setPlayerData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [playerRank, setPlayerRank] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:4000/playerInfo/', { params: { username: id } })
            .then(function (response) {
                if (loaded === false) {
                    setPlayerData(response.data);
                    setLoaded(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(loaded)
    console.log(playerData)

    useEffect(() => {
        axios
            .get('http://localhost:4000/playerRank/', { params: { username: id } })
            .then(function (response) {
                setPlayerRank(response.data)
            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);
    console.log(playerRank)

    function checkQueueRank(playerRanking) {
        if (playerRanking === undefined) {
            return ('')
        }
        else if (playerRanking === "RANKED_SOLO_5x5") {
            return playerRank[0][0].rank
        }
        else {
            return playerRank[0][1].rank
        }
    }


    function checkQueueTier(playerRanking) {
        if (playerRanking === undefined) {
            return ("UNRANKED")
        }
        else if (playerRanking === "RANKED_SOLO_5x5") {
            return playerRank[0][0].tier
        }
        else {
            return playerRank[0][1].tier
        }
    }

    function winRate(playerRank) {
        return ((playerRank[0][0].wins) / ((playerRank[0][0].losses) + (playerRank[0][0].wins))).toFixed(3) * 100
    }

    function checkElo(elo) {
        switch (elo) {
            case "IRON":
                return <EloSummoner src={iron} alt="elo" />;
            case "BRONZE":
                return <EloSummoner src={bronze} alt="elo" />;
            case "SILVER":
                return <EloSummoner src={silver} alt="elo" />;
            case "GOLD":
                return <EloSummoner src={gold} alt="elo" />;
            case "PLATINUM":
                return <EloSummoner src={platinum} alt="elo" />;
            case "DIAMOND":
                return <EloSummoner src={diamond} alt="elo" />;
            case "MASTER":
                return <EloSummoner src={master} alt="elo" />;
            case "GRANDMASTER":
                return <EloSummoner src={grandmaster} alt="elo" />;
            case "CHALLENGER":
                return <EloSummoner src={challenger} alt="elo" />;
            default: break;
        }
    }

    if (loaded === false) {
        return (loaded);
    } else if (loaded && playerData[0] && playerRank[0]) {
        return (
            <Container>
                <>
                    <Content>
                        <HeaderContent>
                            <IconSummoner src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/` + playerData[0].profileIconId + `.png`} />
                            <SummonerInfo>
                                <h2>
                                    <strong>{playerData[0].name}</strong> #NA1
                                </h2>
                                <h3>
                                    Level: {playerData[0].summonerLevel} - {checkQueueTier(playerRank[0][0].queueType)} {checkQueueRank(playerRank[0][0].queueType)}
                                </h3>
                            </SummonerInfo>
                            {checkElo(checkQueueTier(playerRank[0][0].queueType))}
                        </HeaderContent>
                        <FooterContent>
                            <div>
                                <WinsLabel>
                                    <strong> WINS:  </strong>
                                    <label> {playerRank[0][0].wins}</label>
                                </WinsLabel>
                                <LossesLabel>
                                    <strong>LOSSES: </strong>
                                    <label> {playerRank[0][0].losses}</label>
                                </LossesLabel>
                            </div>
                            <CircleDiv>
                                <label> <strong> {winRate(playerRank)}% </strong> </label>
                                <label> WIN RATE</label>
                            </CircleDiv>
                        </FooterContent>
                    </Content>
                    <Space>
                        <Link to={`/`}>
                            <ReturnHome>
                                <FaAngleLeft size={30} color="#FFF" />
                                <span> BACK</span>
                            </ReturnHome>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link to={`/summoner/${id}/history`}>
                            <HistoryPage>
                                <span> MATCH HISTORY</span>
                                <FaAngleRight size={30} color="#FFF" />
                            </HistoryPage>
                        </Link>
                    </Space>
                </>
            </Container >
        )
    }
};

export default Stats

//<h1>hello1 {id} {playerData[0].id}</h1>
//<IconSummoner src={"http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/" + playerData[0].profileIconId + ".png"}> </IconSummoner>


/*
    useEffect(() => {
        axios.get('http://localhost:4000/playerInfo/', { params: { username: selected.id } })
            .then(function (response) {
                if (loaded === false) { ;
                setPlayerData(response.data);
                setLoaded(true);
                console.log(loaded)
                }
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    console.log(playerData)
*/

/*
    async function fetchData() {
        let response = await axios('http://localhost:4000/playerInfo/', { params: { username: selected.id } });
        let user = await response.data;
        setPlayerData(user)
        setLoaded(true)
        console.log(loaded)
    }

    useEffect(() => {
        fetchData();
    }, []);
*/
