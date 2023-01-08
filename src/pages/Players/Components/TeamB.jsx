
import { useEffect } from "react"
import Logo from "./Logo"
import Piece from "./Piece"
import psg from './../../../png/psg.png'
const TeamB = ({setStatus}) => {
    const team = 2

    useEffect(() => {
        setTimeout(() => {
            setStatus(2)
        },5000)
    // eslint-disable-next-line
    },[])

    return(
        <div className='absolute w-full h-full top-0'>
            <Logo url={psg} name={'Paris Saint GerMain'} />
            <Piece playerName='Navas' post='GKP' team={team}/>
            <Piece playerName='Kimpembe' post='LCB'team={team} />
            <Piece playerName='Marquinhos' post='RCB' team={team} />
            <Piece playerName='Hakimi' post='RB' team={team} />
            <Piece playerName='Mendes' post='LB' team={team} />
            <Piece playerName='Neymar' post='LW' team={team} />
            <Piece playerName='Messi' post='RW' team={team} />
            <Piece playerName='Mbappe' post='FRW' team={team} />
            <Piece playerName='Verratti' post='CD' team={team} />
            <Piece playerName='Periera' post='RC' team={team} />
            <Piece playerName='Gueye' post='LC' team={team} />
        </div>
    )
}

export default TeamB