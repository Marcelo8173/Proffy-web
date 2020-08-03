import React from 'react';

import './style.css';
import PageHeader from '../../components/Header';


const TeacherList:React.FC = () =>{
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os proffys dispiníveis." />
        </div>
    )
}

export default TeacherList;