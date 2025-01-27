import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle'; // Import the ThemeToggle component
import { useTheme } from '../context/ThemeContext'; // Assuming you're using a ThemeContext

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme(); // Access the current theme from the context

  return (
    <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
      <header className={`absolute inset-x-10 top-5 z-50 rounded-full shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-opacity-50'}`}>
        <nav aria-label="Global" className="flex items-center justify-between p-3 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="Company Logo" src="/Quickfinal.png" className="h-10 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm/6 font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className={` fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
  <span className="sr-only">Your Company</span>
  <img alt="Company Logo" src="/Quickfinal.png" className="h-16 w-auto" />
</a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`-m-2.5 rounded-md p-2.5 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-full px-3 py-2 text-base/7 font-semibold hover:bg-gray-500 ${theme === 'dark' ? '' : ''}`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 text-center">
                  {/* Add theme switcher here if needed */}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
