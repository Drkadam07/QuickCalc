import React, { Fragment } from 'react'; // Import Fragment
import { useTheme } from './context/ThemeContext';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className="relative inline-block text-left">
            <Menu>
                <div>
                    <Menu.Button
                        className={`inline-flex justify-between w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ${theme === 'light' ? 'text-gray-700' : 'text-white'} sm:px-6 sm:py-3 md:px-8 md:py-4`}
                    >
                        <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}  // Here, Fragment is being used correctly
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:w-56 md:w-64 lg:w-72">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleThemeChange('light')}
                                        className={`${active ? 'bg-orange-600' : ''
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm sm:text-base md:text-lg`}
                                    >
                                        Light Theme
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleThemeChange('dark')}
                                        className={`${active ? 'bg-orange-600 ' : ''
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm sm:text-base md:text-lg`}
                                    >
                                        Dark Theme
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleThemeChange('system')}
                                        className={`${active ? 'bg-orange-600 ' : ''
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm sm:text-base md:text-lg`}
                                    >
                                        System Theme
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default ThemeToggle;
