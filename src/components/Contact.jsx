'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { useTheme } from './../components/context/ThemeContext';

export default function Contact() {
    const [agreed, setAgreed] = useState(false)
    const { theme } = useTheme();

    return (
        <>
        {/* <Header/> */}
        <br />
        <div className={`relative isolate px-6 pt-20 lg:px-8 `}>
            <div className="absolute top-10 left-2 w-[500px] h-[500px] bg-[#D1208A80] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
            <div className="absolute top-10 right-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>

            <div className="mx-auto max-w-2xl text-center">
                <h2 className={`text-4xl font-semibold tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Contact us</h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className={`block text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className={`block w-full rounded-md px-3.5 py-2 text-base ${theme === 'light' ? 'bg-white text-gray-900 border-2 border-transparent focus:ring-2 focus:ring-indigo-600' : 'bg-black text-white border-2 border-transparent focus:ring-2 focus:ring-indigo-600'} outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 hover:border-indigo-500 transition-all`}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className={`block text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className={`block w-full rounded-md px-3.5 py-2 text-base ${theme === 'light' ? 'bg-white text-gray-900 border-2 border-transparent focus:ring-2 focus:ring-indigo-600' : 'bg-black text-white border-2 border-transparent focus:ring-2 focus:ring-indigo-600'} outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 hover:border-indigo-500 transition-all`}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className={`block text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className={`block w-full rounded-md px-3.5 py-2 text-base ${theme === 'light' ? 'bg-white text-gray-900 border-2 border-transparent focus:ring-2 focus:ring-indigo-600' : 'bg-black text-white border-2 border-transparent focus:ring-2 focus:ring-indigo-600'} outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 hover:border-indigo-500 transition-all`}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className={`block text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md outline outline-1 -outline-offset-1 outline-gray-300">
                                <div className="grid shrink-0 grid-cols-1">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className={`col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base ${theme === 'light' ? 'bg-white text-gray-500 border-2 border-transparent' : 'bg-black text-white border-2 border-transparent'} placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm hover:border-indigo-500 transition-all`}
                                    >
                                        <option>+91</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className={`pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end ${theme === 'light' ? 'text-gray-500' : 'text-white'} sm:size-4`}
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="123-456-7890"
                                    className={`block min-w-0 grow py-1.5 pl-1 pr-3 text-base ${theme === 'light' ? 'bg-white text-gray-900 border-2 border-transparent' : 'bg-black text-white border-2 border-transparent'} placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm hover:border-indigo-500 transition-all`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className={`block text-sm font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className={`block w-full rounded-md px-3.5 py-2 text-base ${theme === 'light' ? 'bg-white text-gray-900 border-2 border-transparent' : 'bg-black text-white border-2 border-transparent'} outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 hover:border-indigo-500 transition-all`}
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                />
                            </Switch>
                        </div>
                        <Label className={`text-sm text-gray-600 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className={`px-6 py-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out
                            ${theme === 'dark'
                                         ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 hover:shadow-2xl hover:shadow-indigo-600'
                                         : 'bg-gradient-to-r from-teal-400 via-blue-500 to-green-500 text-white hover:from-teal-500 hover:via-blue-600 hover:to-green-600 hover:shadow-2xl hover:shadow-teal-600'}
                          hover:scale-105`}
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}
