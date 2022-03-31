import React from 'react'

const Experience = () => {
    return (
        <><div className="h-screen flex items-center py-14 justify-start flex-col bg-slate-50">

                {/*-----Header------*/}
                <div class="lg:w-2/4 w-5/6 rounded-t-lg bg-gray-200 text-stone-500 py-2 px-3">
                    <button class="bg-transparent transition ease-in-out delay-100 text-slate-400 hover:text-slate-600
                        hover:font-semibold font-normal py-3 px-4 rounded">
                        X
                    </button>
                </div>

                {/*-----body------*/}
                <div class="lg:w-2/4 w-5/6 bg-stone-100">
                    <div className="p-4 flex items-start justify-start text-xl text-gray-500 font-semibold 
                        sm:text-lg shadow-md">Customize your experience
                    </div>
                    <div className="overflow-y-scroll shadow-inner h-72  grid grid-cols-1 py-2 px-2">
                        
                        <div className="text-neutral-600 px-3 py-2 mb-4 flex flex-col">
                            <label class="font-sans mb-2 text-lg font-medium">Education</label>
                            <input id="edu" name="edu" type="text" class="bg-transparent font-sans 
                            caret-slate-400 pt-3 pb-1 w-full px-4 border-b border-gray-400 focus:border-sky-500 
                            text-gray-600 antialiased text-base focus:outline-none" placeholder="Education" />
                            <button class="bg-transparent mt-2 hover:text-blue-600 text-gray-600 font-semibold py-2 px-2 rounded inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg><span class="italic">Add new education</span></button>
                        </div>

                        <div className="text-neutral-600 px-3 py-2 mb-4 flex flex-col">
                            <label class="font-sans mb-2 text-lg font-medium">Current position</label>
                            <button class="bg-transparent mt-2 hover:text-blue-600 text-gray-600 font-semibold py-2 px-2 rounded inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg><span class="italic">Add new position</span></button>
                            <input id="inds" name="inds" type="text" class="bg-transparent font-sans 
                            caret-slate-400 pt-3 pb-1 w-full px-4 border-b border-gray-400 focus:border-sky-500 
                            text-gray-600 antialiased text-base focus:outline-none" placeholder="Industry" />
                        </div>

                    </div>
                </div>

                {/*------footer--------*/}
                <div class="lg:w-2/4 w-5/6 rounded-b-lg bg-stone-200 
                    text-stone-500 py-1 px-3 shadow-md">
                    <div class="mb-0 mt-1 flex items-center justify-end bg-stone-200 mx-6 pb-1 pt-2">
                        <button class="text-gray-900 transition ease-in-out delay-100 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            Save
                        </button>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Experience