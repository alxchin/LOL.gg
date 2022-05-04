import { React, useState } from 'react'
import { Form1 } from "./styles";
import { useNavigate } from 'react-router-dom';

const Form = ({ getSummonerName }) => {
    const navigate = useNavigate();
    const [summonerName, setSummonerName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const information = { summonerName };
        console.log(information);
        getSummonerName(summonerName);
    }

    return (
        <Form1>
            <form onSubmit={handleSubmit}>
                <input value={summonerName} required onChange={(e) => setSummonerName(e.target.value)} placeholder="Summoner Name" />
                <label>NA1</label>
                <button type="button" onClick={() => navigate(`/summoner/${summonerName}`)}><strong>Search</strong></button>
            </form>
        </Form1>
    )
}

export default Form