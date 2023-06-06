import { Component } from 'react';
import styled from 'styled-components';

const AddFormDiv = styled.div`
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, .15);
    color: #fff;
`

const AddForm = styled.form`
    margin-top: 20px;
    input {
        width: 350px;
        margin-right: 20px;
    }
`

class EmployersAddForm extends Component{

    constructor (props) {
        super(props);
        
        this.state = {
            name: '',
            salary: ''
        }
    }  

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const nameSurname = this.state.name.split(' ');
        if (nameSurname[0].length > 2)
            this.props.onAdd(nameSurname[0], nameSurname[1], this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        return(
            <AddFormDiv>
                <h3>Добавьте нового сотрудника</h3>
                <AddForm className="d-flex"
                onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    className="form-control new-post-label" 
                    name='name'
                    value={name}
                    placeholder="Как его зовут?"
                    onChange={this.onValueChange}/>
                    <input type="text" 
                    className="form-control new-post-label" 
                    placeholder="З/П в $?"
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange}/>

                    <button type="submit"
                    className="btn btn-outline-light" >Добавить</button>
                </AddForm>
            </AddFormDiv>
        )
    }
}

export default EmployersAddForm;