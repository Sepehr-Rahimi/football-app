import clsx from 'clsx'
import { useEffect } from 'react'
import { useState } from 'react'
import {BsFillCircleFill} from 'react-icons/bs'




const Piece = ({playerName,post,team}) => {
    const [showPiece,setShowPiece] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setShowPiece(true)
        }, (Math.random() * 1000) + 800 );


        return clearTimeout() 
    },[])


    
    
    const posts = {
        GKP : {
            bottom : '0',
            right : '46%'
        },
        RB : {
            bottom : '25%',
            right : '10%'
        },
        RCB : {
            bottom : '15%',
            right : '26%'
        },
        LCB : {
            bottom : '15%',
            right : '70%'
        },
        LB : {
            bottom : '25%',
            right : '85%'
        },
        RC : {
            bottom : '50%',
            right : '10%'
        },
        CD : {
            bottom : '35%',
            right : '46%'
        },
        LC : {
            bottom : '50%',
            right : '85%'
        },
        RW : {
            bottom : '75%',
            right : '18%'
        },
        FRW : {
            bottom : '85%',
            right : '46%'
        },
        LW : {
            bottom : '75%',
            right : '77%'
        },
    }



    
    
    
    return(
        <span style={{right: posts[post]?.right , bottom: posts[post]?.bottom }} className={clsx('flex flex-col justify-center items-center transition-all duration-[700ms] absolute' , { 'w-[6%] text-base' : showPiece } , {'w-[0] text-[0]' : !showPiece}) }>
            <BsFillCircleFill className={clsx('w-full h-full',{'text-slate-800' : team === 1},{'text-orange-300' : team === 2})} />
            <span>
                {playerName}
            </span>
        </span>
    )
}


export default Piece