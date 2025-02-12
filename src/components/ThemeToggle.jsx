import React from 'react'; 
import { useTheme } from './context/ThemeContext'; 
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; 

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="flex items-center">
            <button
                onClick={handleThemeChange}
                className="p-2 rounded-full Dark:text-white focus:outline-none"
            >
                {theme === 'light' ? (
                    <MoonIcon className="h-6 w-6" />
                ) : (
                    <SunIcon className="h-6 w-6" />
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;
