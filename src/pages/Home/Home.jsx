import {Outlet, useNavigate} from 'react-router-dom'
const Home = () => {


    const navigate = useNavigate()

    return(
        <div className='w-full flex bg-slate-300 h-screen'>
            <div className='border-r border-black border-dashed p-3'>
                <div className='text-center border-b border-black font-semibold'>Admin section</div>
                <div className='flex flex-col'>
                    <button onClick={() => navigate('/result')} className='border border-black rounded-md px-2 py-1 mx-2 my-3 hover:scale-95'>Show Result</button>
                    <button onClick={() => navigate('/players')} className='border border-black rounded-md px-2 py-1 mx-2 my-3 hover:scale-95'>Show Players</button>
                    <button onClick={() => navigate('/')} className='border border-black rounded-md px-2 py-1 mx-2 my-3 hover:scale-95'>Show nothing</button>
                </div>
            </div>
            <div className='grow flex flex-col p-3 h-full'>
                <div className='text-center border-b border-black font-semibold'>Show section</div>
                <div className='grow rounded-md overflow-hidden my-2'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}


export default Home