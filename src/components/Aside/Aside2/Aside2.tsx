
import Image from 'next/image'
import './Aside2.scss'
import Jr from '@/assets/Ellipse5.svg'
import Fb from '@/assets/Ellipse6.svg'
import Bf from '@/assets/Ellipse7.svg'
import GP from '@/assets/Layer3.svg'
import AS from '@/assets/Group2.svg'

export function Aside2() {
    return (
        <section className='aside2'>
            <div className='aside2_div'>
                <h1 className='h1_aside'>Why customers love
                    working with us</h1>
                <p className='p_aside'>“It&apos;s amazing what has helped me learn about my team.
                    I don&apos;t worry about blindspots anymore, and 1-on-1s have never
                    been more productive. The team loves it.”</p>

            </div>
            <div className='div_aside2'>
                <div  className='div-asi asi'>
                <Image src={Jr} alt='jorge'/>
                <span>
                    <h5 className='aside_h5'>Jorge Robertson</h5>
                    <h6 className='aside_h6'>CS at Google</h6>
                </span>
                </div>
               <div className='div-asi asi2'>
               <Image src={Fb} alt='Francisco'/>
               <span>
                    <h5 className='aside_h5'>Francisco Bell</h5>
                    <h6 className='aside_h6'>Designer at Microsoft</h6>
                </span>
               </div>
              <div className='div-asi asi2'>
              <Image src={Bf} alt='Beth'/>
              <span>
                    <h5 className='aside_h5'>Beth Fox</h5>
                    <h6 className='aside_h6'>Developer at Airbnb</h6>

                </span>
              </div>
            </div>
            <div className='div_car'>
                <h1 className='h1_car'>84% of employees who use
trust their direct manager</h1>
                <div className='div_imgc'>
                    <Image src={GP} alt='Google play'/>
                    <Image src={AS} alt='App store'/>
                </div>
            </div>
        </section>
    )
} 