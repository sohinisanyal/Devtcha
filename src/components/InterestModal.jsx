import React from 'react'

const InterestModal = () => {
    return (
        <>
            <div className="h-screen flex items-center py-14 justify-start flex-col bg-slate-50">

                {/*-----Header------*/}
                <div className="lg:w-2/4 w-5/6 rounded-t-lg bg-gray-200 text-stone-500 py-2 px-3">
                    <button className="bg-transparent transition ease-in-out delay-100 text-slate-400 hover:text-slate-600
        hover:font-semibold font-normal py-3 px-4 rounded">
                        X
                    </button>
                </div>

                {/*-----body------*/}
                <div className="lg:w-2/4 w-5/6 bg-stone-100">
                    <div className="p-4 flex items-start justify-start text-xl text-gray-500 font-semibold 
        sm:text-lg shadow-md">Choose your interests
                    </div>
                    <div className="overflow-y-scroll shadow-inner h-72 grid grid-cols-3 gap-4 gap-y-7 py-8 px-4">

                        <div><input type="checkbox" value="hackathon" name="hackathon" id="hackathon" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Hackathon</label>
                        </div>
                        <div><input type="checkbox" value="fend" name="fend" id="fend" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Frontend developer</label>
                        </div>
                        <div><input type="checkbox" value="bend" name="bend" id="bend" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Backend developer</label>
                        </div>
                        <div><input type="checkbox" value="sql" name="sql" id="sql" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">SQL</label>
                        </div>
                        <div><input type="checkbox" value="nosql" name="nosql" id="nosql" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">noSQL</label>
                        </div>
                        <div><input type="checkbox" value="sdev" name="sdev" id="sdev" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Software developer</label>
                        </div>
                        <div><input type="checkbox" value="devops" name="devops" id="devops" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Devops</label>
                        </div>
                        <div><input type="checkbox" value="cysec" name="cysec" id="cysec" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Cyber security</label>
                        </div>
                        <div><input type="checkbox" value="web3" name="web3" id="web3" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Web 3.0</label>
                        </div>
                        <div><input type="checkbox" value="iot" name="iot" id="iot" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">IOT</label>
                        </div>
                        <div><input type="checkbox" value="software" name="software" id="software" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Software</label>
                        </div>
                        <div><input type="checkbox" value="hardware" name="hardware" id="hardware" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Hardware</label>
                        </div>
                        <div><input type="checkbox" value="arvr" name="arvr" id="arvr" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">AR/VR</label>
                        </div>
                        <div><input type="checkbox" value="ftech" name="ftech" id="ftech" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Fintech</label>
                        </div>
                        <div><input type="checkbox" value="cpad" name="cpad" id="cpad" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Cross platform app developer</label>
                        </div>
                        <div><input type="checkbox" value="appdev" name="appdev" id="appdev" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">App developer</label>
                        </div>
                        <div><input type="checkbox" value="uiux" name="uiux" id="uiux" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">UI/UX</label>
                        </div>
                        <div><input type="checkbox" value="startups" name="startups" id="startups" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Startups</label>
                        </div>
                        <div><input type="checkbox" value="deskapp" name="deskapp" id="deskapp" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Desktop apps</label>
                        </div>
                        <div><input type="checkbox" value="meta" name="meta" id="meta" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Metaverse</label>
                        </div>
                        <div><input type="checkbox" value="nft" name="nft" id="nft" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">NFT</label>
                        </div>
                        <div><input type="checkbox" value="bigdata" name="bigdata" id="bigdata" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Big data</label>
                        </div>
                        <div><input type="checkbox" value="db" name="db" id="db" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Databases</label>
                        </div>
                        <div><input type="checkbox" value="aws" name="aws" id="aws" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Amazon Web Services (AWS)</label>
                        </div>
                        <div><input type="checkbox" value="serversp" name="serversp" id="serversp" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Server space</label>
                        </div>
                        <div><input type="checkbox" value="azure" name="azure" id="azure" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">MicrosoftAzure</label>
                        </div>
                        <div><input type="checkbox" value="gcp" name="gcp" id="gcp" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Google Cloud Platform</label>
                        </div>
                        <div><input type="checkbox" value="ibm" name="ibm" id="ibm" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">IBM Cloud Services</label>
                        </div>
                        <div><input type="checkbox" value="acc" name="acc" id="acc" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Adobe Creative Cloud</label>
                        </div>
                        <div><input type="checkbox" value="digiocean" name="digiocean" id="digiocean" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Digital Ocean</label>
                        </div>
                        <div><input type="checkbox" value="oraclec" name="oraclec" id="oraclec" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Oracle Cloud</label>
                        </div>
                        <div><input type="checkbox" value="linux" name="linux" id="linux" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Linux</label>
                        </div>
                        <div><input type="checkbox" value="windows" name="windows" id="windows" 
                        className="accent-sky-600 mx-2" />
                            <label className="text-sm antialiased font-medium
                                font-sans md:text-base lg:text-base tracking-wide 
                                text-black">Windows</label>
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

export default InterestModal