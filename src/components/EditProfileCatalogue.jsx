import React from 'react'

const EditProfileCatalogue = () => {
    return (
        <>
            <div className="bg-slate-300 min-h-screen w-full flex items-start justify-center">
                {/*form close button div*/}
                {/*_________________________________________________________*/}
                {/*form div*/}
                <div className="grid grid-flow-row md:w-full shadow-md sm:my-0 bg-gray-200 sm:w-full lg:w-1/2 lg:my-8 md:rounded-md lg:rounded-md items-center  border-2">

                    {/*heading div*/}
                    <div className="w-full mb-2 py-3 rounded-md border-b-2 bg-stone-100">
                        <div className="flex justify-center items-center">
                            <span className="text-stone-500 text-center font-sans font-semibold antialiased sm:text-xl  md:text-2xl lg:text-2xl">Edit profile</span>
                        </div>
                    </div>

                    {/*profile pic div*/}
                    <div className="mb-2 mx-1 rounded-md py-2 bg-stone-100 border-b-2 shadow-md shadow-slate-400/50">
                        <div className="flex items-center mx-3 my-3 justify-right text-slate-500 font-semibold sm:text-sm
                        md:text-lg lg:text-lg">Change Profile Picture
                        </div>
                        <div className="flex items-center justify-center my-2">  {/*image div within*/}
                            <img src="/images/doggo.jpg" alt="" className='w-36 aspect-square lg:aspect-square
                             rounded-full border-4 border-whiteborder-white shadow-md'/>
                        </div>
                        <div className="flex items-center mb-2 mt-6 justify-center">  {/*button div*/}
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 
                                focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full 
                                text-sm px-3 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                                dark:focus:ring-purple-900"><i className="large material-icons">add_a_photo</i></button>
                        </div>
                    </div>

                    {/*tagline div*/}
                    <div className="mb-2 mx-1 rounded-md py-2 bg-stone-100 border-b-2 shadow-md shadow-slate-400/50">
                        <div className="flex">
                            <div className="flex mx-3 my-3 w-1/2 justify-right items-center text-neutral-600 font-semibold sm:text-sm
                                md:text-lg lg:text-lg">Tagline</div>
                            <div className="flex items-center w-1/2 mx-12 justify-end text-slate-500 sm:text-sm
                                md:text-lg lg:text-lg">
                                <button className="transition ease-in-out delay-150 italic text-base hover:text-blue-600 text-slate-400 font-sans font-semibold">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center my-2">
                            <span className="text-gray-500 font-semibold">A qucik brown fox</span>
                        </div>
                    </div>

                    {/*About Me*/}
                    <div className="mb-2 mx-1 rounded-md py-2 bg-stone-100 border-b-2 shadow-md shadow-slate-400/50">
                        <div className="flex">
                            <div className="flex mx-3 w-1/2 my-3 justify-right items-center text-neutral-600 font-semibold sm:text-sm
                                md:text-lg lg:text-lg">About Me</div>
                            <div className="flex items-center w-1/2 mx-12 justify-end text-slate-500 sm:text-sm
                                md:text-lg lg:text-lg">
                                <button className="transition ease-in-out delay-150 italic text-base hover:text-blue-600 text-slate-400 font-sans font-semibold">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center my-2">
                            <p className="leading-relaxed mx-3">
                                So I started to walk into the water. I won't lie to you boys,
                                I was terrified. But I pressed on, and as I made my way past the
                                breakers a strange calm came over me. I don't know if it was divine
                                intervention or the kinship of all living things but I tell you Jerry
                                at that moment, I was a marine biologist.
                            </p>
                        </div>
                    </div>

                    {/*edit interests*/}
                    <div className="mb-2 mx-1 rounded-md py-2 bg-stone-100 border-b-2 shadow-md shadow-slate-400/50">
                        <div className="flex">
                            <div className="flex mx-3 my-3 w-1/2 justify-right items-center text-neutral-600 font-semibold sm:text-sm
                                md:text-lg lg:text-lg">Your Interests</div>
                            <div className="flex w-1/2 mx-12 justify-end items-center text-slate-500 sm:text-sm
                                md:text-lg lg:text-lg">
                                <button className="transition ease-in-out delay-150 italic text-base hover:text-blue-600 text-slate-400 font-sans font-semibold">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex mx-3 mb-2 mt-2 flex-row flex-wrap items-center gap-x-3 gap-y-4 py-2">
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                    </svg>
                                </div>
                                <p>open source</p>
                            </div>
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p>web development</p>
                            </div>
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                </div>
                                <p>looking for new opportunities</p>
                            </div>
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <p>open to collaborate</p>
                            </div>
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <p>self-taught</p>
                            </div>
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </div>
                                <p>blogger</p>
                            </div>
                            <div className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 flex flex-row justify-center items-center rounded-3xl cursor-pointer">
                                <div className="flex pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p>Crypto Enthusiast</p>
                            </div>
                        </div>
                    </div>

                    {/*customise your experience*/}
                    <div className="mb-2 mx-1 rounded-md py-2 bg-stone-100 border-b-2 shadow-md shadow-slate-400/50">
                        <div className="flex">
                            <div className="flex mx-3 my-3 w-1/2 justify-right items-center text-neutral-600 font-semibold sm:text-sm
                                md:text-lg lg:text-lg">Customize Your Experience</div>
                            <div className="flex w-1/2 mx-12 justify-end items-center text-slate-500 sm:text-sm
                                md:text-lg lg:text-lg">
                                <button className="transition ease-in-out delay-150 italic text-base hover:text-blue-600 text-slate-400 font-sans font-semibold">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-left mx-3 my-2">
                            <ul className="list-none">
                                <li className="leading-loose text-current">Now this is a story all about how, my life got flipped turned upside down</li>
                                <li className="leading-loose text-current">Now this is a story all about how, my life got flipped turned upside down</li>
                                <li className="leading-loose text-current">Now this is a story all about how, my life got flipped turned upside down</li>
                                <li className="leading-loose text-current">Now this is a story all about how, my life got flipped turned upside down</li>
                            </ul>
                        </div>
                    </div>

                    {/*connected profiles*/}
                    <div className="mb-2 mx-1 rounded-md py-2 bg-stone-100 border-b-2 shadow-md shadow-slate-400/50">
                        <div className="flex">
                            <div className="flex mx-3 my-3 w-1/2 justify-right items-center text-neutral-600 font-semibold sm:text-sm
                                md:text-lg lg:text-lg">Connected Profiles</div>
                            <div className="flex w-1/2 mx-12 justify-end items-center text-slate-500 sm:text-sm
                                md:text-lg lg:text-lg">
                                <button className="transition ease-in-out delay-150 italic text-base hover:text-blue-600 text-slate-400 font-sans font-semibold">
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-start mx-3 my-2">
                            <ul className="list-none">
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-github fa-lg">{/*followed by acc link*/} <span className="italic mx-2 text-base" >Text here</span></i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-linkedin fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-twitter fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-stack-overflow fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-hashnode fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-dev fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-youtube fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                                <li className="leading-loose text-current">
                                    <button className="bg-transparent hover:text-blue-600 text-gray-500 font-medium font-serif italic">
                                        <i className="fa-brands fa-medium fa-lg">{/*followed by acc link*/}</i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*SAVE button*/}
                    <div className="mb-1 mt-2 flex items-center justify-end mx-6 pb-3">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 
                        overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
                        bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 
                        group-hover:to-blue-500 hover:text-white my-3 dark:text-white focus:ring-4 
                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition ease-in-out delay-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Save
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileCatalogue