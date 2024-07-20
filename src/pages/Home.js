import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

export default function Home() {
    return (
        <section className="home">
            <div className="home-content">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <div className="home-text">
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your
                        perfect road trip.</p>
                    <Link to="/vans">Find your van</Link>
                </div>
            </div>
        </section>
    )
}