import PSG from './../../../png/psg.png'
import madrid from './../../../png/madrid.png'

const TabledPlayers = () => {
    return(
        <div className="w-full h-full flex flex-col text-center">
            <div className="w-full text-center font-bold">Players</div>
            <div className='flex'>
                <div className='w-1/2 p-3'>
                    <div className='flex items-center border-b border-slate-600 justify-center'>
                        <img className='w-8 h-8' src={PSG} alt="PSG" />
                        <span>Paris Saint German</span>
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Navas
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Kimpembe
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Marquinhos
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Hakimi
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Mendes
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Neymar
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Messi
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Mbappe
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Verratti
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Periera
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Gueye
                    </div>
                </div>
                <div className='w-1/2 p-3'>
                    <div className='flex items-center border-b border-slate-600 justify-center'>
                        <img className='w-8 h-8' src={madrid} alt="PSG" />
                        <span>Real Madrid</span>
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Courtois
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Alaba
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Milita
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Carvajal
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Mendy
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Vinicius
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Asensio
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Benzema
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Casemiro
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Kroos
                    </div>
                    <div className='shadow-black shadow-md rounded-md my-2'>
                        - Modric
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TabledPlayers