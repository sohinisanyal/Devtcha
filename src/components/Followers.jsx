import React, {useState} from 'react'

const Followers = () => {

    const [follow, setFollow] = useState("Follow")

    function follower () {
        if (follow==="Follow"){
            setFollow("Following")
          }
          else {
            setFollow("Follow")
          }
    }

  return (
    <>
        <div className="bg-stone-100 lg:w-4/6 md:w-2/3 w-full flex flex-row h-20 py-1 px-3">
        <div className="basis-10/12 divide-y-2 flex flex-row">
          {/*----follower's pic----*/}
          <div className="basis-1/6 w-auto flex items-center justify-start pl-2">
            <img src="/images/doggo.jpg" alt="" className='w-12 aspect-square lg:aspect-square
                             rounded-full border-whiteborder-white shadow-md'/>
          </div>
          {/*----follower's info----*/}
          <div className='basis-5/6 flex items-start flex-col justify-start'>
            <div className="flex flex-row mb-2">
            <span className="font-sans text-sm font-medium tracking-wide pr-2">Chris Evans</span>
            <span className="font-sans italic text-xs font-medium tracking-wide text-slate-400">@chrisevans</span>
            </div>
            <div>
              <span className="font-normal text-black text-base">
              For a complete list of all available state modifiers, 
               check out the Hover, Focus, & Other States documentation.
              </span>
            </div>
          </div>
        </div>

        <div className="basis-1/6 flex items-center pl-5 justify-center">
          <button type="button" className="content-center w-24 h-10 text-sm font-medium text-gray-900 
                    focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 
                    hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 
                    dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
          dark:hover:bg-gray-700" onClick={follower}>{follow}</button>
        </div>

      </div>
    </>
  )
}

export default Followers