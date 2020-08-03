import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

const Routes:React.FC = () =>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/aluno" exact component={TeacherList} />
            <Route path="/professor" exact component={TeacherForm} />

        </BrowserRouter>
    )
}

export default Routes;