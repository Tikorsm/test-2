
import './MainH.scss'
import Image from 'next/image'
import GR from '@/assets/Graph2.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

export function MainH() {
    return(
        <section>
            <main>
                <span>
                    <p className='p1'>Save 90%</p>
                    <p className='p2'>Get account of $59 <MdKeyboardArrowRight/> </p>
                </span>
                <h1>Manage the team everyone wants to be on</h1>
                <h2 className='textt'>Simple platform that lets you master what great managers do best, as develop trust, collaborate, and drive team performance.</h2>

                <div>
                    <input type="email" name="" id="" placeholder='name@yourcompany.com'/>
                    <button> Try it free</button>
                </div>

                <Image src={GR} alt='grafico' className='img'/>

            </main>
        </section>
    )
}