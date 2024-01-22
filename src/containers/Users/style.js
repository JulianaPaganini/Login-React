import styled from "styled-components";
import Background from "../../Assets/background2.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 83px;
`;

export const ContainerItens = styled.div`
  width: 414px;
  height: 645px;
  margin-top: 45px;
  border-radius: 61px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
 
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 200px);
`;

export const H1 = styled.h1`
  color: white;
  margin-top: 60px;
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  margin-bottom: 50px;
`;





export const Button = styled(Link)`
    width: 342px;
    height: 74px;
    margin-top: 120px;
    margin-left: 35px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid #FFFFFF;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
   
    &:hover{

      opacity: 0.5;
    }
    img{

      transform: rotateY(180deg);
    }
`;
export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline:none;
    margin-top: 20px;
    width: 342px;
    height: 58px;
    margin-left: 36px;
   
p{

    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
}

button{
    background: none;
    cursor: pointer;
    border: none;

}
`;
