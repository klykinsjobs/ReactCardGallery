import React from "react";
import Card from "./Card";
import "./CardGrid.css";

// Renders a grid of cards for the current page
const CardGrid = ({ cards, onCardClick }) => {
    return (
        <div className="card-grid">
            {cards.map(card => (
                <Card
                    key={card.id}
                    animal={card.name}
                    color={card.color}
                    onClick={() => onCardClick(card)}
                />
            ))}
        </div>
    );
};

export default CardGrid;
