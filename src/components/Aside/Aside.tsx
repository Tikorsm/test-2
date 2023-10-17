
import Gra from '@/assets/Group26.jpg'
import Image from 'next/image'
import './Aside.scss'
import { Aside2 } from './Aside2/Aside2'

export function Aside() {
   return (
      <section>
      <aside className='aside'>
         <div className='aside_div1'>
            <h1 className='aside_h1'>We work how you
               work everyday</h1>
            <p className='aside_p'>Since the easiest things to use actually get used, we adapts to the way your team works – not the other way around.</p>
            <button className='aside_btn'><a href="#" className='aside_a'>Get started free</a></button>
         </div>

         <div className='aside_div2'>
            <Image src={Gra} alt='grafico' className='img_as' />
         </div>
      </aside>

      <Aside2/>
      
      </section>
   )

}