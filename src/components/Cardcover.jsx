import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal'; // Import Modal component

const Cardcover = () => {
  const cardsData = [
    { image: "https://via.placeholder.com/400x250", title: "Card 1", description: "This is card 1" },
    { image: "https://via.placeholder.com/400x250", title: "Card 2", description: "This is card 2" },
    { image: "https://via.placeholder.com/400x250", title: "Card 3", description: "This is card 3" },
    { image: "https://via.placeholder.com/400x250", title: "Card 4", description: "This is card 4" },
    { image: "https://via.placeholder.com/400x250", title: "Card 5", description: "This is card 5" },
    { image: "https://via.placeholder.com/400x250", title: "Card 6", description: "This is card 6" },
    { image: "https://via.placeholder.com/400x250", title: "Card 7", description: "This is card 7" },
    { image: "https://via.placeholder.com/400x250", title: "Card 8", description: "This is card 8" },
    { image: "https://via.placeholder.com/400x250", title: "Card 9", description: "This is card 9" },
    { image: "https://via.placeholder.com/400x250", title: "Card 10", description: "This is card 10" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [modalData, setModalData] = useState(null); // State to store data for the modal
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle showing all cards
  const handleShowAll = () => {
    setShowAll(true);
  };

  // Function to handle opening the modal with the selected card's data
  const openModal = (card) => {
    setModalData(card); // Store the card's data in modalData state
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalData(null); // Reset modalData when closed
  };

  return (
    <>
      <div
        className="flex flex-col items-center w-full px-6 py-6 mt-20 p-[60px] relative bg-gradient-to-r from-indigo-100 via-pink-100 to-teal-100"
        style={{ background: "linear-gradient(to top, rgba(75, 85, 99, 0), rgba(149, 238, 224, 0.5), rgba(20, 184, 166, 0))" }} // Apply transparency to gradient
      >
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {cardsData.slice(0, showAll ? cardsData.length : 6).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              onCardClick={() => openModal(card)} // Handle card click to open modal
              onButtonClick={() => openModal(card)} // Handle "Calculate" button click to open modal
            />
          ))}
        </div>

        {!showAll && (
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
