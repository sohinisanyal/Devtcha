import React, { useState} from 'react'
import Followers from './Followers';
import Following from './Following';

const FollowFollowersMain = () => {

    const [follow, setFollow] = useState(true)

    function seeFollowing() {
        setFollow(false)
    }

    function seeFollowers() {
        setFollow(true)
    }

    return (
        <>
            <div className="bg-slate-50 h-screen py-10 lg:px-28">
                <div className="flex flex-row bg-stone-200 lg:w-4/6 md:w-2/3 h-12 w-full">
                    <div className="flex w-1/2 justify-center">
                        <button autoFocus className="bg-white text-gray-800 font-bold border-b-2 
                    transition ease-in-out delay-150 w-full shadow-md py-2 px-6 inline-flex items-end justify-center
                     focus:border-blue-600"
                            onClick={seeFollowers}>
                            Followers
                        </button>
                    </div>
                    <div className="flex w-1/2 justify-center">
                        <button className="bg-white text-gray-800 font-bold border-b-2 
                transition ease-in-out delay-150 w-full shadow-md py-2 px-6 inline-flex items-end justify-center
                focus:border-blue-600" onClick={seeFollowing}>
                            Following
                        </button>
                    </div>
                </div>

                {follow ? <Followers /> : <Following />}

            </div>
        </>
    )
}

export default FollowFollowersMain