import styled from 'styled-components';

const InfoDiv = styled.div `
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, .15);
    color: #fff;
`

const AppInfo = ({employees, increased}) => {
    return (
        <InfoDiv>
            <h1>Учет сотрундников</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </InfoDiv>
    )
}

export default AppInfo;