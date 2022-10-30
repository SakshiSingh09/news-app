import React from "react";
import { Route, Routes } from "react-router-dom";
import Health from "./NavbarGenres/Health.js";
import Fashion from "./NavbarGenres/Fashion";
import Crime from "./NavbarGenres/Crime";
import Politics from "./NavbarGenres/Politics";
import Sports from "./NavbarGenres/Sports";
import Tech from "./NavbarGenres/Tech";
import Home from "./NavbarGenres/Home";
import Game from "./NavbarGenres/HomeSections/DiscoveryGenres/Game.js";
import Gadget from "./NavbarGenres/HomeSections/DiscoveryGenres/Gadget.js";
import Movie from "./NavbarGenres/HomeSections/DiscoveryGenres/Movie.js";
import Robot from "./NavbarGenres/HomeSections/DiscoveryGenres/Robot.js";
import Wildlife from "./NavbarGenres/HomeSections/DiscoveryGenres/Wildlife.js";

export default function MainContent(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/health" element={<Health />}></Route>
            <Route path="/fashion" element={<Fashion />}></Route>
            <Route path="/meme" element={<Crime />}></Route>
            <Route path="/politics" element={<Politics />}></Route>
            <Route path="/sports" element={<Sports />}></Route>
            <Route path="/tech" element={<Tech />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/gadget" element={<Gadget />}></Route>
            <Route path="/movie" element={<Movie />}></Route>
            <Route path="/robot" element={<Robot />}></Route>
            <Route path="/wildlife" element={<Wildlife />}></Route>
        </Routes>
    )
}