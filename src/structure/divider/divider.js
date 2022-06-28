import './divider.css'

const Divider = ({title}) =>(
    <>
        <div className='DividerContainer'>
            <h1>{title}</h1>
        </div>
        <hr className='DividerLine'/>
    </>
)
const DividerDown = () =>(
    <hr className='DividerLine'/>
)
export{
    Divider,
    DividerDown
}

// const Divider = ({title, children}) =>(
//     <>
//         <div className='DividerContainer'>
//             <h1>{title}</h1>
//         </div>
//         <hr className='DividerLine'>
//             {children}
//         </hr>
//         <hr className='DividerLine'/>
//     </>
// )