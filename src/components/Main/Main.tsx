

import "./Main.scss"

import { Card1 } from "./Cards/Card_1"
import { Card2 } from "./Cards/Card_2"
import { Card3 } from "./Cards/Card_3"
import { Work1 } from "./Work/Work1"
import Image from "next/image"
import IM from '@/assets/Group25 1.jpg'


export function Main() {
    return (
        <main >
         
             <section className='main'>
             <Card1/>
                <Card2/>
                <Image src={IM} alt="exemplo" className="imgl"/>
                <Card3/>
             </section>
            
        
                <Work1/>
        </main>


    )
}