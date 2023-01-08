
import { useEffect } from "react"
import Logo from "./Logo"
import Piece from "./Piece"
import madrid from './../../../png/madrid.png'

const TeamA = ({setStatus}) => {
    const team = 1

    useEffect(() => {
        setTimeout(() => {
            setStatus(1)
        },5000)
    // eslint-disable-next-line
    },[])

    return(
        <div className='absolute w-full h-full top-0'>
            <Logo url={madrid} name={'Real Madrid'} />
            <Piece playerName='Courtois' post='GKP' team={team}/>
            <Piece playerName='Alaba' post='LCB'team={team} />
            <Piece playerName='Militao' post='RCB' team={team} />
            <Piece playerName='Carvajal' post='RB' team={team} />
            <Piece playerName='Mendy' post='LB' team={team} />
            <Piece playerName='Vinicius' post='LW' team={team} />
            <Piece playerName='Asensio' post='RW' team={team} />
            <Piece playerName='Benzema' post='FRW' team={team} />
            <Piece playerName='Casemiro' post='CD' team={team} />
            <Piece playerName='Kroos' post='RC' team={team} />
            <Piece playerName='Modric' post='LC' team={team} />
        </div>
    )
}

export default TeamA