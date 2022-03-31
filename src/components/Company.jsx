import React from 'react'

const Company = (props) => {
    return (
        <>
            <div className="h-screen flex items-center py-14 justify-start flex-col bg-slate-50">

                {/*-----Header------*/}
                <div className="lg:w-2/4 w-5/6 rounded-t-lg bg-stone-200 text-stone-500 py-2 px-3">
                    <button className="bg-transparent transition ease-in-out delay-100 text-slate-400 hover:text-slate-600
                    hover:font-semibold font-normal py-3 px-4 rounded">
                        X
                    </button>
                </div>

                {/*-----body------*/}
                <div className="lg:w-2/4 w-5/6 bg-stone-100">
                    <div className="rounded-b-lg h-96 items-start justify-start 
                    grid grid-cols-1 py-2 px-2">
                        
                        <div className="text-neutral-600 px-3 py-2 mb-4 flex flex-col">
                            <label className="font-sans mb-2 text-lg font-medium">{props.title1}</label>
                            <input type="text" id="c_name" name="c_name" className="bg-transparent font-sans caret-slate-400 pt-2 pb-1 w-full px-4 border border-neutral-300 focus:border-sky-600 
                             text-gray-600 focus:bg-neutral-100 antialiased text-base focus:outline-none rounded-md" placeholder="" />
                        </div>
                        <div className="text-neutral-600 px-3 py-2 mb-4 flex flex-col">
                            <label className="font-sans mb-2 text-lg font-medium">{props.title2}</label>
                            <input type="text" id="role" name="role" className="bg-transparent font-sans caret-slate-400 pt-2 pb-1 w-full px-4 border border-neutral-300 focus:border-sky-600 
                             text-gray-600 focus:bg-neutral-100 antialiased text-base focus:outline-none rounded-md" placeholder="" />
                        </div>
                        <div className="text-neutral-600 px-3 py-2 mb-4 flex flex-col">
                            <label className="font-sans mb-2 text-lg font-medium">{props.title3}</label>
                            <input type="text" id="desc" name="desc" className="bg-transparent font-sans caret-slate-400 pt-2 pb-1 w-full px-4 border border-neutral-300 focus:border-sky-600 
                             text-gray-600 focus:bg-neutral-100 antialiased text-base focus:outline-none rounded-md" pattern="[a-zA-Z0-9 ]+" />
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

export default Company