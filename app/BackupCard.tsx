"use client"

export default function Card({title, subs, views, picture} : {title: string, subs: string, views: string, picture:string}) {
    return (
        <div className="flex flex-col items-center bg-stone-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-stone-400">
            <div className="px-3 py-3">
                <img className="w-20 h-20 rounded-full" src={picture}></img>
            </div>
            <div className="flex flex-row justify-center items-center px-3">
                <div className="flex flex-col justify-center items-center border-r-2 pr-4">
                    <p className="text-gray-600 text-sm font-medium mb-1">Subscribers</p>
                    <p className="text-white text-2xl font-semibold">{subs}</p>
                    <div className="flex flex-row items-center justify-center mt-1">
                        <p className='text-sm font-medium text-green-500'>
                            110
                        </p>
                        <p className="text-sm font-medium text-gray-400 ml-1">↑</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center border-r-2 pr-4 pl-4">
                    <p className="text-gray-600 text-sm font-medium mb-1">Views</p>
                    <p className="text-white text-2xl font-semibold">{views}</p>
                    <div className="flex flex-row items-center justify-center mt-1">
                        <p className='text-sm font-medium text-green-500'>
                            400
                        </p>
                        <p className="text-xs font-medium text-gray-400 ml-1">↑</p>
                    </div>
                </div>
            </div>
            <div className="px-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </div>
        </div>

    )
}