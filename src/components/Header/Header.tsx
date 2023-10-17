
import './Header.scss'


import { Link } from './Link/Link'
import { Button } from './Button/Button'
import { MainH } from './MainH/MainH'
import { SectionH } from './SectionH/SectionH'

export function Header(){
    return(
        <header>
            <nav className="nav">
            <span className='logo'>team<strong>.</strong>flow</span>
                
                <Link/>
            
                <Button/> 
                
         
            </nav>

             <MainH/>

             <SectionH/>


        </header>
    )
}