import styled from 'styled-components';
import Slider from "react-slick"

export const Wrapper = styled.div`
    display: flex;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 400px;
    height: 100vh;
    overflow-y: scroll;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #B1B1B1;
    color: #B1B1B1;
    padding: 22px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

export const Carousel = styled(Slider)`
    .slick-track {
        display: flex;
    }
    .slick-slide {
        margin-right: 15px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    margin-top: 10px;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.1px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height 30px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.regular};
    line-height 20px;
    font-size: 16px;
    font-weight: normal;   
`;