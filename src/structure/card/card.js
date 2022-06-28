import React, { useState } from "react";
import './card.css'


const CardImage = ({image, link}) =>{
    return(
        <div className="image">
            <button className="imageButton">
                <a href={link} target="blank" className="imageLink">
                    <div className='imagePrincipalContainer'><img className = 'imagePrincipal'src={image} alt=''/></div>
                </a>
            </button>   
        </div>
    )
}

const CardCertificate = ({title,image,link}) =>{
    return(
        <div className="certificate">
            <button className="certificateButton">
                <a href={link} className="certificateLink" target="_blank" rel="noreferrer">
                    <aside className="certificateContainer">
                        <img src={image} alt="" className="certificateImage" />
                    </aside>
                    <aside className="certificateContainer">
                        <p className="certificateTitle">{title}</p>
                    </aside>
                </a>
            </button>
        </div>
    )
}

const CardPresentation = ({link,image,resume})=>{
    return(
        <div className="presentation">
            <button className="presentationButton">
                <a href={link} target="blank" className="presentationLink">
                    <div className='presentationPrincipal'><img src={image} alt=''/></div>
                    <p className="presentationText">{resume}</p>
                </a>
            </button>   
        </div>
    )
}

const CardModal = (props) =>{
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
            <div className="modalPresentation" onClick={toggleModal}>
                <button className="modalButton">
                    <div className='modalPrincipal'><img src={props.image} alt=''/></div>
                    <p className="modalText">{props.resume}</p>
                </button>   
            </div>

        {modal && (
            <div className="modalContainer">
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>{props.resume}</h2>
                            <div className="modalList">{props.children}
                            </div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
const CardModules = {
    CardCertificate, CardImage, CardPresentation, CardModal
}

export default CardModules











































// const CardShower = () =>{
//     let CardArray = [
//         <Card
//         id='Card#0'
//         // image="chrome://branding/content/about-logo.png"
//         resume="tnarunatru"
//         descripton='1'
//         />,
//         <Card
//         image="chrome://branding/content/about-logo.png"
//         resume="tnarunatru"
//         descripton='2'
//         />,
//         <Card
//         image="chrome://branding/content/about-logo.png"
//         resume="tnarunatru"
//         descripton='3'
//         />,
//         <Card
//         image="chrome://branding/content/about-logo.png"
//         resume="tnarunatru"
//         descripton='4'
//         />,
//         <Card
//         image="chrome://branding/content/about-logo.png"
//         resume="tnarunatru"
//         descripton='5'
//         />,
//         <Card
//         image="chrome://branding/content/about-logo.png"
//         resume="tnarunatru"
//         descripton='6'
//         />        
//     ] 
//     return(
//         <div className='SliderCardContainer'>{CardArray}</div>
//     )

    
// }

// const Slider = () =>(
//     <>
//         <div className='SliderContainer'>
//             <div className='SliderMoveBack'><a href="/#" id='BackLink' onClick={aheadSlide(-1)}>&#10094;</a></div>
//             <div className='CardContainer'>
//                 <CardShower/> 
//                 {/* /* <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />
//                 <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />    
//                 <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />    
//                 <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />    
//                 <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />    
//                 <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />    
//                 <Card className='Card'
//                     image="chrome://branding/content/about-logo.png"
//                     resume="tnarunatru"
//                 />     */}
//             </div>
//         </div>    
//         <div className='SliderPositions'>
//                 <span className='position Active' onClick={positionSlide(1)}></span>
//                 <span className='Position' onClick={positionSlide(2)}></span>
//                 <span className='Position' onClick={positionSlide(3)}></span>
//                 <span className='Position' onClick={positionSlide(4)}></span>
//                 <span className='Position' onClick={positionSlide(5)}></span>
//                 <span className='Position' onClick= {positionSlide(6)}></span>     
//         </div>
//     </>
// )
// let indice = 1;
// showSlides(indice);
// function aheadSlide(n){
//     showSlides( indice+=n );
// }

// function positionSlide(n){
//     showSlides(indice=n);
// }

// function showSlides(n){
//     let i;
//     let slides = document.getElementsByClassName('Card');
//     let SliderPositions = document.getElementsByClassName('Pasition');

//     if(n > slides.length){
//         indice = 1;
//     }
//     if(n < 1){
//         indice = slides.length;
//     }
//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = 'none';
//     }
//     for(i = 0; i < SliderPositions.length; i++){
//         SliderPositions[i].className = SliderPositions[i].className.replace(" active", "");
//     }

//     // slides(indice-1).style.display = 'block';
//     // SliderPositions(indice-1).className += ' active';




