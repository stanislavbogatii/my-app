import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel.js'
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employeers-list/employeers-list';
import EmployersAddForm from '../employeers-add-form/employeers-add-form';
import styled from 'styled-components';

const DivApp = styled.div `
    margin: 0 auto;
    max-width: 1000px;
`

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John", surname: "Smith", salary: 1540 , increase: false, rise: true, id: 1},
                {name: "Alex", surname: "Shepard", salary: 1000 , increase: false, rise: false, id: 2},
                {name: "Max", surname: "Owen", salary: 1800 , increase: false, rise: false, id: 3},
                {name: "Andrew", surname: "Brown", salary: 150 , increase: true, rise: false, id: 4},
            ],
            term: '',
            filterName: ''
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)};
        })
    }

    addItem = (name, surname, salary) => {
        const newItem = {
            name,
            surname,
            salary: salary ? salary : 0,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{data: newArr};
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onChangeSalary = (id, value) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, salary: value}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;
        return items.filter(item => {
            const nameSurname = item.name + ' ' + item.surname;
            return nameSurname.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term}) //{term: term}
    }

    filterElement = (items, filterName) => {
        if (filterName == 'more1k') {
            return items.filter(item => item.salary > 1000)

        }
        else if (filterName == 'rise') return items.filter(item => item.rise)
        else if (filterName == 'sort_alf') {
            return items.sort((a, b) => a.name > b.name ? 1: -1)
        }
        else {
            return items;
        }
    }

    onFilter = (filterName) => {
        this.setState({filterName})
    }
    

     
    render() {
        const {data, term, filterName} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterElement(this.searchEmp(data, term), filterName);
        return (
            <DivApp>
                <AppInfo
                    employees={employees}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        onFilter={this.onFilter}/>
                </div>
                <EmployersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}
                />
                <EmployersAddForm
                    onAdd={this.addItem}
                />
            </DivApp>
        )
    }
}


export default App;