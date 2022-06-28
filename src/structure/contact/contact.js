import './contact.css'
import React, { useState } from "react";
import CardModules from '../card/card';


const Mail = () =>(
    <div className="mail">
        <article className='mailForm'>
            <section className="mailFormContainer">
                <h3 className='mailFormTitle'>Nombre</h3>
                <input className='mailFormBox'>
                    
                </input>
            </section>
            <section className="mailFormContainer">
                <h3 className='mailFormTitle'>Email</h3>
                <input className='mailFormBox'>
                        
                </input>
            </section>
            <section className="mailFormContainer">
                <h3 className='mailFormTitle'>Descripcion</h3>
                <input className='mailFormBox'>
                    
                </input>
            </section>
        </article>
    </div>
)

const ModalContact = (props) =>{

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className="modalContactPresentation" onClick={toggleModal}>
                <button className="modalContactButton">
                    <div className='modalContactPrincipal'><img className = 'imagePrincipal' src={props.image} alt=''/></div>
                    {/* <p className="modalContactText">{props.resume}</p> */}
                </button>   
            </div>
            {modal && (
                <div className="modalContactContainer">
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>{props.resume}</h2>
                                <div className="modalContactList">{props.children}
                                </div>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

const Contact = ({}) =>{
    return(
        <div className="contact">
            <section className="contactCard">
                <CardModules.CardImage
                    image  = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                    link = 'https://github.com/SplashyCoder'
                />
            </section>
            <section className="contactCard">
            <CardModules.CardImage
                    image  = 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
                    link = 'https://www.linkedin.com/in/david-pacheco-166623227/'
                />
            </section>
            <section className="contactCard">
                <ModalContact
                    image  = 'https://cdn-icons-png.flaticon.com/512/646/646094.png'
                    resume = 'Email'
                >
                    <Mail/>
                </ModalContact>
            </section>
        </div>

    )
}


export default Contact