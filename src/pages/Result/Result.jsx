import psg from './../../png/psg.png'
import madrid from './../../png/madrid.png'



const Result = () => {

    return(
        <div className="flex w-full h-full justify-center items-center">
            <div className='flex items-center text-xl justify-center grow'> 
                <span className='w-48 mx-4 flex flex-col items-center'>
                    <img src={psg} alt="psg" className='w-28 h-28 ' />
                    <span>Paris Saint Germain</span>
                </span>
                <span className='flex justify-between text-3xl grow max-w-sm'>
                    <span>4</span>
                    <span> - </span>    
                    <span>3</span>
                </span>
                <span className='w-48 mx-4 flex flex-col items-center'>
                    <img src={madrid} alt="real madrid" className='w-28 h-28 ' />
                    <span>Real madrid</span>
                </span>
            </div>            
        </div>
    )
    
}
export default Result