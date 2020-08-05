import React from 'react';
import './styles.css';
import Logo from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg'
import { Link } from 'react-router-dom';
import './styles.css';
interface HeaderProps{
    title: string;
    description?:string;
}

const PageHeader:React.FC<HeaderProps> = ({title,children,description}) =>{
    return(
        <>
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackIcon} alt="Voltar"/>
                </Link>
                <img src={Logo} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {description && <p>{description}</p>}
                {children}
            </div>
        </header>
    </>
    )
}

export default PageHeader;