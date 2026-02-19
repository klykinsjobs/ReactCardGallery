import React, { useState, useMemo } from "react";
import animals from "./data/animals";
import CardGrid from "./components/CardGrid";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import "./App.css";

const CARDS_PER_PAGE = 12;

// Generates a random HSL color for each card
const generateRandomColor = () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
};

function App() {
    // Build card objects once using useMemo
    const cards = useMemo(() => {
        return animals.map((animal, index) => ({
            id: index + 1,
            name: animal,
            color: generateRandomColor()
        }));
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCard, setSelectedCard] = useState(null);

    const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

    // Determine which cards belong to the current page
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const currentCards = cards.slice(startIndex, startIndex + CARDS_PER_PAGE);

    return (
        <div className="app">
            <h1>React Card Gallery</h1>

            <CardGrid
                cards={currentCards}
                onCardClick={setSelectedCard}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            <Modal
                isOpen={!!selectedCard}
                onClose={() => setSelectedCard(null)}
                animal={selectedCard?.name}
                color={selectedCard?.color}
            />
        </div>
    );
}

export default App;
