
import './SectionH.scss'
import Image from 'next/image'
import GO from '@/assets/google.svg'
import Ai from '@/assets/airbnb.svg'
import FC from '@/assets/Facebook.svg'
import HB from '@/assets/hubspot.svg'
import SL from '@/assets/slack-2.svg'

export function SectionH() {
    return(
        <section className='sec'>
                <div>
                   <p>TRUSTED BY OVER <strong>10.000+</strong> WORLD’S BEST TEAMS</p>
                </div>
                <div className='sites'>
                    <Image src={GO} alt='Google'  className='size'/>
                    <Image src={Ai} alt='Airbnb' className='size'/>
                    <Image src={FC} alt='Facebook' className='size'/>
                    <Image src={HB} alt='Hubspot' className='size'/>
                    <Image src={SL} alt='Slack' className='size'/>
                </div>
            </section>
    )
}