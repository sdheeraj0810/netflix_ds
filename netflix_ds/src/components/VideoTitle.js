const VideoTitle=(props)=>{
    return (<div className="flex flex-col pt-48 px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="font-bold text-4xl">{props.title}</h1>
        <p className="mt-4 w-4/12">{props.overview}</p>
        <div className="flex flex-row gap-4 mt-4">
            <button className="bg-white text-black p-2 rounded-sm hover:bg-gray-200 cursor-pointer">▶️ Play</button>
            <button className="bg-gray-300 text-white p-2 rounded-sm hover:bg-gray-400 cursor-pointer">ℹ️ More Info</button>
        </div>
    </div>)
}

export default VideoTitle;