
import {BsBarChartLineFill} from 'react-icons/bs'
import {RiContactsBookFill} from 'react-icons/ri'
import {FaUserGraduate} from 'react-icons/fa'
import {SiGooglechat} from 'react-icons/si'
import {TbHierarchy3} from 'react-icons/tb'
import {BsTools} from 'react-icons/bs'

import './Work.scss'

export function Work1() {
    return (
        <section className="container">
            <div className="title">
                <h1>Make your work easier</h1>
            </div>

            <ul className="grid">
                <li className='lis'>
                    <span className='span1'><BsBarChartLineFill className='icon1' /></span>
                    <div className='div'>
                        <h3 className='wind'>Short, anonymous surveys track your team’s needs weekly so you can focus.</h3>
                        <p className='wind'>Team Surveys & Reports</p>
                        <h3 className='mob'>Team Surveys & Reports</h3>
                        <p className='mob'>Short, anonymous surveys track your team’s needs weekly so you can focus.</p>
                    </div>

                </li>
                <li className='lis'>
                    <span className='span2'> <RiContactsBookFill className='icon2' /> </span>
                    <div className='div'>
                        <h3>Collaborative 1:1 </h3>
                        <p>Build relationships by planning
                            1-on-1s and start meetings.</p>
                    </div>

                </li>
                <li className='lis'>
                    <span className='span3'> <FaUserGraduate className='icon3' /> </span>
                    <div className='div'>
                        <h3>Learning Center</h3>
                        <p>Quickly get solutions tailored to your personal challenges from the manager.</p>
                    </div>

                </li>
                <li className='lis'>
                    <span className='span4'> <SiGooglechat className='icon4' /> </span>
                    <div className='div'>
                        <h3>Anonymous Messaging</h3>
                        <p>Develop trust in a safe channel for important conversations.</p>
                    </div>

                </li>
                <li className='lis'>
                    <span className='span5'><TbHierarchy3 className='icon5' /></span>
                    <div className='div'>
                        <h3>Conversation Engine</h3>
                        <p>Communicate confidently with
                            recommended talking points.</p>
                    </div>

                </li>
                <li className='lis'>
                    <span className='span6'> <BsTools className='icon6' /> </span>
                    <div className='div'>
                        <h3>Exclusives Manager</h3>
                        <p>Access manager tips, activities and
                            best practices from our team of experts.</p>
                    </div>

                </li>
            </ul>

            <button className='bnt'>
                <p className='p_bnt'>View more benefits</p>
            </button>

        </section>
    )
}