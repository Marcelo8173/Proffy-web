import React from 'react';
import TeacherItem from '../../components/TeacherItem';
import './style.css';
import PageHeader from '../../components/Header';
import Input from '../../components/input';

const TeacherList:React.FC = () =>{
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os proffys dispiníveis.">
               <form id="search-teacher">
                   <Input 
                   name="subject"
                   label="Máteria"/>

                <Input 
                   name="week-day"
                   label="Dia da semana"/>
                
                    <Input 
                   name="time"
                   label="Hora"/>

               </form>
           </PageHeader>

           <main>
               <TeacherItem />
               <TeacherItem />
           </main>
        </div>
    )
}

export default TeacherList;