import "./styleGlosary.css"

const CoursesGrid = ({ lenguagephoto, name }) => {
    return(
        <div>
            <h1 className = "LenguageName">{name}</h1>
            <img className = "LenguageImg"src={lenguagephoto} alt="Lenguage image" />
        </div>
    )

}

export default CoursesGrid