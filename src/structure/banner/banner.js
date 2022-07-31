import './banner.css'
const Banner = (props) =>(
    <div className="bannerContainer">
        <div className="bannerTextContainer">
            <aside>
            <i className='bannerText'>
                Hola soy david, un estudiante de ingenieria y desarrollador junior <br />
                Dejame mostrarte mis proyectos propios, habilidades y algunas cosas sobre mi <br />
                Esta es una obra en porgreso y proximamente estare mejorandola.
            </i>
            </aside>
        </div>
        <div className="bannerImgContaier">{props.children}</div>
    </div>
)   
export default Banner
