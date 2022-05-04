import React from 'react'
import SearchPage from '../screen/SearchPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stats from "../statpage/Stats.js"


export default function Routing() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/summoner/:id" element={<Stats />} />
            </Routes>
        </Router>
    )
}
