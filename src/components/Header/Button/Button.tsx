
import './Button.scss'
import { Menu } from './Menu'

export function Button() {
    return(
        <section>
                <div className='pi'>
               <span><a href="#" className='link'>Log in</a></span>
               <button>
               Get started free
               </button>
               </div>

               <div>
                <Menu/>
               </div>
        </section>
    )
}