import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiClock } from 'react-icons/hi'

import './Card1.scss'

export function Card1() {
    return (
        <div className='containe'>

            <div id='h3'>
                <h3 className='h3'> Timeline </h3>

                <div className='esq_aria'>

                    <div className='icon2'>


                        <span className='mens'> <BsFillChatDotsFill />
                        </span>



                        <span className='line1'></span>

                        <span className='temp'> <HiClock /> </span>
                        <span className='line2'></span>

                    </div>
                    <div className='coment'>
                        <div className='ti'>
                            <h3 className='main_h3'>Benchmarking</h3>
                            <p className='main_p'>sent to Denise on 06/02/2020</p>
                        </div>

                        <div className='con'>
                            <p className='main_p2'><strong className='st'>@Denise</strong> Can we add three more analyses?</p>
                        </div>
                        <div className='con'>
                            <p className='main_p2'><strong className='st'>@Denise</strong> Create a presentation with comparison tables</p>
                        </div>
                        <div className='con'>
                            <p className='main_p2'> <strong className='st'>@Denise</strong> Let&#39s set up a meeting to present to the product manager.</p>
                        </div>
                        <div className='ti'>
                            <h3 className='main_h3'>Meeting reminder</h3>
                            <p className='main_p'>sent to Denise on 06/02/2020</p>
                            <div className='con'>
                                <p className='main_p2'><strong className='st'>@Denise</strong> scheduling this conversation to</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}