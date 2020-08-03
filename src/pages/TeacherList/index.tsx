import React from 'react';

import './style.css';
import PageHeader from '../../components/Header';


const TeacherList:React.FC = () =>{
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os proffys dispiníveis.">
               <form id="search-teacher">
                   <div className="input-block">
                       <label htmlFor="subject">Máteria</label>
                       <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week-day">Dia da semana</label>
                       <input type="text" id="week-day"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="time"/>
                   </div>
               </form>
           </PageHeader>
        </div>
    )
}

export default TeacherList;