
import './Menu.scss'
import {AiOutlineMenu} from 'react-icons/ai'

export function Menu() {
    return(
        <section>
            <div className='menu'>
            <AiOutlineMenu className='icon'/>
            <span>Menu</span>
            </div>
        </section>
    )
}