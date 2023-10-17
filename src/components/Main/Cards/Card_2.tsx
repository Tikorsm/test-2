
import Image from 'next/image'
import Bi from '@/assets/Ellipse10.svg'
import './Card2.scss'

export function Card2() {
    return (
        <section className='card'>
            <div className='ali'>
                <div className='card1'>
                    <Image src={Bi} alt='mulher' />

                    <span className='span_ti'>
                        <h4 className='spanh4'>Denise Silva</h4>
                        <h5 className='spanh5'>Product Designer</h5>

                    </span>
                </div>
                <span className='span_card'>
                    <p className='spanp'> <strong>@Peter</strong> Thanks for review!
                        I will review the comments and submit a
                        new project.</p>
                </span>

                <div className='btns'>

                    <button className='span_btn'>
                        Send
                    </button>
                </div>

            </div>

        </section>
    )
}