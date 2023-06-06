import { Component } from 'react';
import styled from 'styled-components';

const Buttons = styled.div `
    margin-top: 20px;
`

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            more1k: false,
            rise: false,
            all: true,
            sort_alf: false
        }
    }

    onFilter = (e) => {
        const filterName = [e.currentTarget.name];
        this.setState({
            more1k: false,
            rise: false,
            all: false,
            sort_alf: false,
            [e.target.name]: true
        })
        this.props.onFilter(filterName)
    }

    render() {
        const {all, rise, more1k, sort_alf} = this.state;
        const active = "btn btn-light";
        const disabled = "btn btn-outline-light";
        
        return (
            <Buttons>
                <button className={all ? active : disabled}
                type="button"
                name='all'
                onClick={this.onFilter}>
                    Все сотрудники
                </button>
                <button className={rise ? active : disabled}
                type="button"
                name='rise'
                onClick={this.onFilter}>
                    На повышение
                </button>
                <button className={more1k ? active : disabled}
                type="button"
                name='more1k'
                onClick={this.onFilter}>
                    З/П больше 1000$
                </button>
                <button className={sort_alf ? active : disabled}
                    type="button"
                    name='sort_alf'
                    onClick={this.onFilter}>
                    По алфавиту
                </button>
            </Buttons>
        )
    }
}

export default AppFilter;