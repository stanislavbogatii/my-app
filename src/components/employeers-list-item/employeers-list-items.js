import './employeers-list-items.css'

const EmployersListItems = (props) => {        

        const {name, surname, salary, onDelete, onToggleProp, increase, rise, onChangeSalary} = props;
        let classNames = "list-group-item d-flex justify-content-between"
        if (increase) {
            classNames += " increase";
        }
        if (rise) {
            classNames += " like";
        } 

        return (
            <li className={classNames}>
                <span 
                    onClick={onToggleProp} 
                    className="list-group-item-label" 
                    data-toggle="rise">{name} {surname}</span>
                <input 
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + '$'} 
                    onChange={onChangeSalary}
                    />
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        onClick={onToggleProp} 
                        data-toggle={"increase"}
                        className="btn-cookie btn-sm" 
                        type="button">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button 
                        onClick={onDelete}
                        className="btn-trash btn-sm" 
                        type="button">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployersListItems;