import Image from "next/image";
import GP2 from '@/assets/Layer2.svg'
import AS2 from '@/assets/Group.svg'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiBasketball} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import './Footer.scss'

export function Footer() {
    return(
        <footer className="footer">
            <section className="footer_grid">
                <div className="fot_flex"> 
                    <h6 className="flex_h6">Company <MdKeyboardArrowDown/> </h6>
                    <p className="flex_p">About Us</p>
                    <p className="flex_p">Blog</p>
                    <p className="flex_p">Careers</p>
                    <p className="flex_p">Contact Us</p>
                
                </div>
                <div className="fot_flex">
                    <h6 className="flex_h6">Support <MdKeyboardArrowDown/> </h6>
                    <p className="flex_p">Help Center</p>
                    <p className="flex_p">Safety Center</p>
                    <p className="flex_p">Community</p>
                </div>
                <div className="fot_flex">
                    <h6 className="flex_h6">Legal <MdKeyboardArrowDown/> </h6>
                    <p className="flex_p">Cookies Policy</p>
                    <p className="flex_p">Privacy Policy</p>
                    <p className="flex_p">Terms of Service</p>
                </div>
                <div className="fot_flex">
                    <h6 className="flex_h6">Install App</h6>
                    <Image src={GP2} alt='Google play'/>
                    <Image src={AS2} alt='App store'/>
                </div>
                
            </section>

                <section className="rodape">
                       <span>© 2020 - All rights reserved</span>
                       <div>
                        <AiOutlineInstagram className="img_ro"/>
                         <BiBasketball className="img_ro"/>
                        <AiOutlineTwitter className="img_ro"/>
                        <AiFillYoutube className="img_ro"/>
                       </div>
                </section>
        </footer>
    )
}