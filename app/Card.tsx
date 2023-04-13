"use client"

export default function Card({title, subs, views, picture, videoNum} : {title: string, subs: string, views: string, picture:string, videoNum:string}) {
    return (
        <li className="py-3 sm:py-4 hover:dark:bg-gray-700">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" src={picture} alt="Neil image"/>
                </div>
                <div className="flex flex-row justify-center items-center px-3">
                    <div className="flex flex-col justify-center items-center border-r-2 pr-4 w-40">
                        <p className="text-red-500 text-sm font-medium mb-1">Subs</p>
                        <p className="text-white text-2xl font-semibold">{subs}</p>
                        <div className="flex flex-row items-center justify-center mt-1">
                            <p className='text-sm font-medium text-green-500'>
                                110
                            </p>
                            <p className="text-sm font-medium text-gray-400 ml-1">↑</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r-2 pr-4 pl-4 w-40">
                        <p className="text-gray-600 text-sm font-medium mb-1">Views</p>
                        <p className="text-white text-2xl font-semibold">{views}</p>
                        <div className="flex flex-row items-center justify-center mt-1">
                            <p className='text-sm font-medium text-green-500'>
                                400
                            </p>
                            <p className="text-xs font-medium text-gray-400 ml-1">↑</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r-2 pr-4 pl-4 w-40">
                        <p className="text-gray-600 text-sm font-medium mb-1">Videos</p>
                        <p className="text-white text-2xl font-semibold">{videoNum}</p>
                        <div className="flex flex-row items-center justify-center mt-1">
                            <p className='text-sm font-medium text-green-500'>
                                1
                            </p>
                            <p className="text-xs font-medium text-gray-400 ml-1">↑</p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
            </div>
        </li>
    )
}