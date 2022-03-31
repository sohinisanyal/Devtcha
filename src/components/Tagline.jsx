import React from 'react'

const Tagline = (props) => {
    return (
        <>
            <div className="h-screen flex items-center py-14 justify-center flex-col bg-slate-50">

                {/*-----Header------*/}
                <div className="lg:w-2/4 w-5/6 rounded-t-lg bg-stone-200 text-stone-500 py-2 px-3">
                    <button className="bg-transparent transition ease-in-out delay-100 text-slate-400 hover:text-slate-600
    hover:font-semibold font-normal py-3 px-4 rounded">
                        X
                    </button>
                </div>

                {/*-----body------*/}
                <div className="lg:w-2/4 w-5/6 bg-stone-100 pb-6">
                    <div className="rounded-b-lg grid grid-cols-1 justify-start py-2 px-2">
                    <div className="p-4 flex items-start justify-start w-full text-xl text-gray-500 font-semibold 
                        sm:text-lg">{props.title}
                    </div>
                    <div className="mx-4">
                    < form >
                        <input type="text" id="tag" name="tag" 
                        className="bg-transparent px-6 font-sans caret-slate-400 pt-3 pb-1 w-full border-b border-gray-400 focus:border-sky-500 
                            text-gray-600 antialiased text-base focus:outline-none" placeholder="Your text here" />
                        </form >
                    </div>
                    </div>
                </div>

                {/*------footer--------*/}
                <div className="lg:w-2/4 w-5/6 rounded-b-lg bg-stone-200 
    text-stone-500 py-1 px-3 shadow-md">
                    <div className="mb-0 mt-1 flex items-center justify-end bg-stone-200 mx-6 pb-1 pt-2">
                        <button className="text-gray-900 transition ease-in-out delay-100 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tagline



    