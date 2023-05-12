import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSM.css'
import { newMember } from '../../Datas';
export default function WidgetSM() {
  return (
    <>
    <article className="widgetSm">
        <span className="widgetSmTitle">new join member</span>
        <ul className="widgetList">
            {newMember.map((user)=>
                <li key={user.id} className="widgetListItem">
                <img src={user.image} className='widgetSmImg' alt="" />
                <section className="widgetSmUser">
                    <span className="widgetSmUserName">{user.userName}</span>
                    <span className="widgetSmJopTitle">{user.jobTitle}</span>
                </section>
                <button className='widgetSmbtn'>
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>

            )}


            

          
            
            
        </ul>
    </article>
    </>
  )
}
