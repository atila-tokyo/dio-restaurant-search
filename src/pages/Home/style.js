import styled from 'styled-components';

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #4E4F50;
    color: #B1B1B1;
    padding: 16px;
`;
