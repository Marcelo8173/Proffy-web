import React from 'react';
import PageHeader from '../../components/Header';
import './styles.css';
import Input from '../../components/input';
import warningIcon from '../../assets/images/icons/warning.svg'

const TeacherList:React.FC = () =>{
    return(
        <div id="page-teacher-form">
            <PageHeader title="Que incrível que você que dar aulas."
            description="O Primeiro passo é preencher esse formulario de inscriçã"/>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="name"
                        label="Nome Completo"
                    />
                    <Input name="avatar" label="Url do avatar"/>
                    <Input name="whatsapp" label="whatsapp" />
    
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input 
                        name="subject"
                        label="Matéria"
                    />
                    <Input 
                        name="cost"
                        label="Custo da sua hora por aula"
                    />

                    <footer>
                        <p>
                            <img src={warningIcon} alt=""/>
                            Importante ! <br />
                            Preencha todos os dados 
                        </p>
                        <button>Salvar Cadastro</button>
                    </footer>
                    
                </fieldset>
            </main>
        </div>
    )
}

export default TeacherList;