import styled from "styled-components";
import Background from "../../Assets/background1.svg";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  width: 414px;
  height: 645px;
  display: flex;
  flex-direction: column;
  
  margin-top: 45px;
  border-radius: 61px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%

  
  );
`;

export const H1 = styled.h1`
  color: white;
  margin-top: 50px;
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    color: #EEEEEE;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left:61px;

`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    margin-left: 36px;
    padding-left: 25px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline:none;
    font-size: 20px;
    line-height: 28px;
    color: white;
    margin-bottom: 15px;

`;

export const Button = styled(Link)`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    margin-left: 35px;
    border-radius: 14px;
    background: #000000CC;
    border: none;
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

`;



