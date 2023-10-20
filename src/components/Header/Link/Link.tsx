
import './Link.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'

export function Link() {
    return(
        <section>
                <ul>
                    <li><a href="#" className='link'>How it Works  <MdKeyboardArrowDown/> </a></li>
                    <li><a href="# " className='link'>Product <MdKeyboardArrowDown/> </a></li>
                    <li><a href="#" className='link'>Pricing</a></li>
                    <li><a href="#" className='link'>Resources <MdKeyboardArrowDown/> </a></li>
                </ul>
        </section>
    )
}
