import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import Card from './Card';
import Modal from '../Modal'; // Import Modal component
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook

const Cardcover = () => {
    const { theme } = useTheme(); // Get the current theme
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
                className={`flex flex-col items-center w-full px-6 py-6 mt-20 p-[60px] relative bg-gradient-to-r ${theme === 'light' ? 'from-indigo-100 via-pink-100 to-teal-100' : 'from-gray-800 via-gray-700 to-gray-900'}`}
                style={{ background: theme === 'light' ? "linear-gradient(to top, rgba(75, 85, 99, 0), rgba(149, 238, 224, 0.5), rgba(20, 184, 166, 0))" : "linear-gradient(to top, rgba(50, 50, 50, 0), rgba(150, 150, 150, 0.5), rgba(30, 30, 30, 0))" }}
            >
                {/* Search Bar */}
                <div className={`relative w-full sm:w-96 mb-6 pb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    <div className="relative flex items-center">
                        <FaSearch
                            className={`absolute left-3 ${theme === 'light' ? 'text-gray-500' : 'text-white'}`}
                        />
                        <input
                            type="text"
                            placeholder="Search for cards..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full px-4 py-3 pl-10 pr-4 rounded-full border ${theme === 'light'
                                ? 'bg-white border-gray-300 focus:ring-2 focus:ring-orange-200 text-gray-900 shadow-md hover:border-orange-300'
                                : 'bg-gray-800 border-gray-600 focus:ring-2 focus:ring-orange-500 text-white shadow-md hover:border-orange-400'}`}
                        />
                    </div>
                </div>



                {/* Display "Sorry" message if no cards found */}
                {filteredCards.length === 0 && searchTerm && (
                    <div className={`text-xl mt-6 ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>
                        <p>Sorry, no cards found.</p>
                    </div>
                )}

                {/* Display Cards */}
                {/* Display Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:pl-16">
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
                            className={`px-6 py-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out
                       ${theme === 'dark'
                                    ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 hover:shadow-2xl hover:shadow-indigo-600'
                                    : 'bg-gradient-to-r from-teal-400 via-blue-500 to-green-500 text-white hover:from-teal-500 hover:via-blue-600 hover:to-green-600 hover:shadow-2xl hover:shadow-teal-600'}
                     hover:scale-105`}
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
