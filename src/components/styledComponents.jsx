import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(281, 63%, 45%);
    
    `;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    `;

const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

const Logo = styled.h1`
    font-weight: bold;
    `;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    `;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    `;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    `;

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: lavender;
    `;

const Info = styled.div` 
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-colour: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease; 
    `;

const ProductContainer = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity:1;
    }
    `;


const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    `;

const Image = styled.img`
    height: 75%;
    z-index: 2;
    `;

const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
    `;

const DetailContainer = styled.div`
`;

const WrapperDetail = styled.div`
    padding: 50px;
    display: flex;
    `;

const ImgContainer = styled.div`
    flex:1;
    `;

const ImageDetail = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    `;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    `;
    
const Title = styled.h1`
    font-weight: 200;
    `;

const Desc = styled.p`
    margin: 20px 0px;
    `;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    `;

export {
    Wrapper, Logo, MenuItem, Left, Center, Right, ProductAmountContainer, ProductAmount, ProductsContainer, ProductContainer,
    Circle, Image, Info, Icon, DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price
}