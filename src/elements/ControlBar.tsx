import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiSun } from 'react-icons/hi';
import { IoMoon } from 'react-icons/io5';

const Container = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;
const BackButton = styled.button`
  padding: 0.2rem 0.7rem;
  border-radius: 1rem;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.bgColor};
    transition: all 0.2s ease-in-out;
  }
`;

const Switch = styled.label<IProps>`
  position: relative;
  float: right;
  vertical-align: bottom;
  text-align: center;
  width: 3.3rem;
  height: 1.5rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Slider = styled.span<IProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isDark ? '#000' : '#ccc')};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1rem;
  &:before {
    position: absolute;
    content: '';
    height: 1.2rem;
    width: 1.2rem;
    left: 0.25rem;
    bottom: 0.15rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  svg:nth-child(2) {
    margin-left: 0.5rem;
    margin-top: 0.1rem;
  }
`;

interface IProps {
  isDark?: boolean;
}

interface ITheme {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlBar = ({ isToggled, setIsToggled }: ITheme) => {
  const location = useLocation();

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <Container>
      {location.pathname === '/' ? null : (
        <BackButton>
          <Link to="/">Back</Link>
        </BackButton>
      )}

      <Switch>
        <input type="checkbox" checked={isToggled} />
        <Slider onClick={handleClick}>
          <IoMoon size={'1rem'} color={'yellow'} />
          <HiSun size={'1.2rem'} color={'tomato'} />
        </Slider>
      </Switch>
    </Container>
  );
};

export default ControlBar;
