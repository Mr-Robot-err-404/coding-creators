"use client"

import { useState } from "react"

export default function Form({ handleClick } : any) {
    const [input, setInput] = useState("")
    const handleChange = (e: any) => {
        setInput(e.target.value)
    }
    return (
        <div className="flex justify-center py-10">
            <div className="grid grid-rows-2 gap-5">
                <div>
                    <input type="text" id="new_creator" value={input} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hello there"></input>
                </div>
                <button type="button" onClick={() => handleClick(input)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add
                </button>
            </div>
        </div>
    ) 
}