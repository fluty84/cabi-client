import './EatersList.css'

const EatersList = ({eaters}) =>{

    return(
        <ul>
            { eaters.length? <h3>Eaters List</h3> : <h3>Please create eaters</h3>} 
            {
                eaters?.map((eater) => {
                    return (
                        <li key={eater._id}>
                            <span>{eater.name}: </span>
                            <span>{eater.email}</span>
                            <hr />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default EatersList