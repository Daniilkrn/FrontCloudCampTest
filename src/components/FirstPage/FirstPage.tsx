import React from 'react'
import FirstPageForm from './FirstPageForm'
import { NavLink, Link } from 'react-router-dom'
import '../../styles/main.scss'
import '../../styles/startPage.scss'
import SvgSprite from '../svg/svgSprite'

const FirstPage = () => {
    return (
        <div className='firstPage'>
            <div className="head">
                <div className="avatar">
                    
                </div>
                <div className="about_person">
                    <div className="name"><li>Карнаухов Даниил</li></div>
                    <div className="social">
                        <ul>
                            <li>
                                <SvgSprite />
                                <Link to={'https://t.me/Daniilkarn'} target='_blank'>Telegram</Link>
                            </li>
                            <li>
                                <SvgSprite />
                                <Link to={'https://github.com/Daniilkrn'} target='_blank'>GitHub</Link>
                            </li>
                            <li>
                                <SvgSprite />
                                <Link to={'#'} target='_blank'>
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <FirstPageForm></FirstPageForm>
        </div>
    )
}

export default FirstPage
