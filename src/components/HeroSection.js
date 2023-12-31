import Header from "./Header";
import {Routes} from "react-router-dom";
import Footer from "./Footer";
import React, {useContext} from 'react';
import noteContext from "../context/noteContext";

export default function HeroSection() {
    const a = useContext(noteContext)
    return (
        <div>
            <h1>this is HeroSection {a.name}</h1>
        </div>
    );
}
