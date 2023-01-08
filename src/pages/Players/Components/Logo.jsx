


const Logo = ({url,name}) => {
    return(
        <div className="absolute flex flex-col justify-center items-center w-[200px] opacity-40 right-[25%] bottom-[25%] ">
            <img src={url} alt="name" />
            <div className="text-2xl font-semibold text-center">
                {name}
            </div>
        </div>
    )
}


export default Logo