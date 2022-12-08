import React, { useState } from 'react'

const AppLayout = ({ children }) => {

    const [toggleController, setToggleController] = useState({
        isSideMenuopen: false,
    })

    const changeControllers = key => {
        setToggleController({
            ...toggleController,
            [key]: !toggleController[key],
        })
    }

    return (
        <div
            className="flex h-screen bg-gray-50 dark:bg-gray-900"
        >
            {/* desktop menu */}
            <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <a
                        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                        href="#">
                        Code Challenge
                    </a>
                   
                    <ul>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                href="./">
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                                <span className="ml-4">Create</span>
                            </a>
                        </li>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                href="./update">
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                                <span className="ml-4">Update</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div
                className={` ${
                    toggleController.isSideMenuOpen
                        ? 'md:hidden block'
                        : 'hidden'
                } fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center`}></div>

            {/*mobile menu  */}
            <aside
                className={` ${
                    toggleController.isSideMenuOpen
                        ? 'md:hidden block transition ease-in-out duration-150 opacity-100'
                        : 'hidden opacity-0 transform -translate-x-20'
                } fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden`}
            >
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <a
                        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                        href="#">
                        Code Challenge
                    </a>
                    <ul>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                href="./">
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                                <span className="ml-4">Create</span>
                            </a>
                        </li>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                                href="./update">
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                                <span className="ml-4">Update</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="flex flex-col flex-1">
                <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                    <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                        <button
                            className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={() => {
                                changeControllers('isSideMenuOpen')
                            }}
                            aria-label="Menu">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </header>
                <main className="h-full pb-16 overflow-y-auto">
                    <div className="container px-6 mx-auto grid">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AppLayout
