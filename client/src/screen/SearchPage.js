import React, { useState } from 'react'
import { Container, Header, Img } from "./styles"
import overlay from "../pics/overlay.png"
import logo from "../pics/logo.png"
import { Link } from 'react-router-dom'





const SearchPage = () => {
    const [summonerName, setSummonerName] = useState('');


    return (
        <Container>
            <Header>
                <img src={logo} alt="logo" />
                <span>
                    <strong> LOL RANKING</strong>
                </span>
            </Header>
            <h1>
                Search by Summoner <strong> Name!</strong>
            </h1>
            <form>
                <input type='text' value={summonerName} onChange={(e) => setSummonerName(e.target.value)} placeholder="Summoner Name" />
                <label>NA1</label>
                <Link to={`/summoner/${summonerName}`}>
                    <button type="submit"><strong>Search</strong></button>
                </Link>
            </form>
            <Img src={overlay} alt="backgroundpic" />

        </Container>
    );
}

export default SearchPage