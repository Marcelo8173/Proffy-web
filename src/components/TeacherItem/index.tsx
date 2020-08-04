import React from 'react';
import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';



const TeacherItem:React.FC = () => {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/50594445?s=460&u=16dac43ef18932d9fe3d30b7e19f76bb9c0d170c&v=4" alt=""/>
               <div>
                    <strong>Marcelo André</strong>
                       <span>Biologia</span>
                    </div>
                   </header>
                   <p>
                       quakasdasdas
                       <br /><br/>
                       asdasdasdasdaisdhaoshda
                   </p>
                   <footer>
                       <p>Preço/hora
                           <strong>R$ 20,00</strong>
                       </p>
                       <button>
                           <img src={whatsappIcon} alt=""/>
                           Entrar em contato
                       </button>
                   </footer>
               </article>
    )
}

export default TeacherItem;