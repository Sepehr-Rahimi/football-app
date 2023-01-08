import { useState } from 'react'
import RenderWhen from '../../../Components/RenderWhen'
import footballPitch from './../../../png/footballPitch.png'
import TeamA from './TeamA'
import TeamB from './TeamB'
import TabledPlayers from './TabledPlayers'

const Squad = () => {
    // 0 = not rendered , 1 = team 1 rendered 
    const [status,setStatus] = useState(0)
    return(
        <div className='h-full'>
            <RenderWhen condition={status !== 2}>
                <div className='w-max h-full mx-auto relative'>
                    <img className=' mx-auto h-full rounded-lg' src={footballPitch} alt="footbalPitch" />
                        <RenderWhen condition={status === 0}>
                            <TeamA setStatus={setStatus} />
                        </RenderWhen>
                        <RenderWhen condition={status === 1 } >
                            <TeamB setStatus={setStatus} />
                        </RenderWhen>
                </div>
            </RenderWhen>
            <div className='h-full w-full mx-auto'>
                <RenderWhen condition={status === 2 } >
                    <TabledPlayers/>
                </RenderWhen>
            </div>
        </div>
    )
}

export default Squad