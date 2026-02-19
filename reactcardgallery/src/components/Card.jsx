import React from "react";
import "./Card.css";

// Displays a single animal card
const Card = ({ animal, color, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-color" style={{ backgroundColor: color }} />

            <div className="card-body">
                <h3>{animal}</h3>
            </div>
        </div>
    );
};

export default Card;
