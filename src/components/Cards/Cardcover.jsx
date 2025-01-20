import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import Card from './Card';
import Modal from '../Modal'; // Import Modal component

const Cardcover = () => {
    const [cardsData, setCardsData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [modalData, setModalData] = useState(null); // State to store data for the modal
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search input

    // Fetch card data from the JSON file
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/cardsData.json'); // Fetch JSON file from public directory
            const data = await response.json();
            setCardsData(data);
        };

        fetchData();
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
    };
    const openModal = (card) => {
        setModalData(card); 
        setShowModal(true); 
    };

    const closeModal = () => {
        setShowModal(false);
        setModalData(null); 
    };

    // Filter cards based on the search term
    const filteredCards = cardsData.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div
                className="flex flex-col items-center w-full px-6 py-6 mt-20 p-[60px] relative bg-gradient-to-r from-indigo-100 via-pink-100 to-teal-100"
                style={{ background: "linear-gradient(to top, rgba(75, 85, 99, 0), rgba(149, 238, 224, 0.5), rgba(20, 184, 166, 0))" }}
            >
                {/* Search Bar */}
                <div className="relative w-full sm:w-96 mb-6">
                    <input
                        type="text"
                        placeholder="Search for cards..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 text-sm sm:text-base"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>


                {/* Display "Sorry" message if no cards found */}
                {filteredCards.length === 0 && searchTerm && (
                    <div className="text-xl text-gray-500 mt-6">
                        <p>Sorry, no cards found.</p>
                    </div>
                )}

                {/* Display Cards */}
                <div className="flex flex-wrap justify-center gap-6 w-full">
                    {filteredCards.slice(0, showAll ? filteredCards.length : 6).map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            onCardClick={() => openModal(card)} // Handle card click to open modal
                            onButtonClick={() => openModal(card)} // Handle "Calculate" button click to open modal
                        />
                    ))}
                </div>

                {!showAll && filteredCards.length > 6 && (
                    <div className="flex justify-center w-full mt-6">
                        <button
                            onClick={handleShowAll}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>

            {/* Show the modal if showModal is true */}
            {showModal && modalData && (
                <Modal data={modalData} onClose={closeModal} />
            )}
        </>
    );
};

export default Cardcover;
