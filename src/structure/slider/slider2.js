import "./slider2.css";
import CardModules from '../card/card'

const Slider2 = () =>{ 
    
return (
    <>
        <div className="show">
            <CardModules.CardModal
                image  = 'https://cdn-icons-png.flaticon.com/512/3534/3534033.png'
                resume = 'Universidad Distrital Francisco Jose de Caldas'
            >
                <h2>Estoy en el 7mo semestre de la carrera</h2>
            </CardModules.CardModal>
            <CardModules.CardModal
                image  = 'https://cdn-icons-png.flaticon.com/512/1838/1838102.png'
                resume = 'Frontend'
            >
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/javascript'
                    image  = 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
                    title  = 'Javascript Desde cero'
                />
                    <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/js-poo'
                    image  = 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png'
                    title  = 'Javascript Orientado a Objetos'
                />
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/html'
                    image  = 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png'
                    title  = 'HTML'
                />
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/bootstrap'
                    image  = 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png'
                    title  = 'Boostrap'
                />
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/reactjs'
                    image  = 'http://localhost:3000/logo192.png'
                    title  = 'React'
                />
            </CardModules.CardModal>

            <CardModules.CardModal 
                image  = 'https://cdn-icons-png.flaticon.com/512/7862/7862765.png'
                resume = 'Backend'
            >
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/python'
                    image  = 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png'
                    title  = 'Pyton Desde Cero'
                />
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/sql'
                    image  = 'https://cdn-icons-png.flaticon.com/128/1664/1664316.png'
                    title  = 'Bases de datos SQL'
                />
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/api-rest'
                    image  = 'https://cdn-icons-png.flaticon.com/128/5003/5003884.png'
                    title  = 'Api Rest'
                />
                <CardModules.CardCertificate
                    link  = 'https://ed.team/@davidpacheco/curso/git'
                    image  = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
                    title  = 'GIT'
                />
            </CardModules.CardModal>
        </div>
    </>
)
}
export default Slider2