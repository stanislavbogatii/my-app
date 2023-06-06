import EmployersListItems from "../employeers-list-item/employeers-list-items"
import styled from "styled-components";

const ListUl = styled.ul `
    margin-top: 30px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    color: #FFF;
`

const EmployersList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <EmployersListItems 
                    key={id} 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onChangeSalary={(e) => onChangeSalary(id, parseInt(e.target.value))}
                />
        )})

        return (
            <ListUl className="app-list list-group">
                {elements}
            </ListUl>
        )
}

export default EmployersList;