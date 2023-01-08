import clsx from 'clsx'



const Button = ({started,setStarted}) => {


    return(
        <div className={clsx('w-full h-full bg-slate-700 flex justify-center items-center transition-all duration-[1000ms] ease-in-out',{'h-0' : started})}>
            <button onClick={() => setStarted((state) => !state)} className={clsx("rounded-xl bg-white w-[150px] h-[50px] transition-all duration-[800ms] text-3xl shadow-md shadow-black hover:scale-110" , {'h-[0px] text-[0px]' : started})}>Start</button>
        </div>
    )
}

export default Button