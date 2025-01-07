import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  padding: 25px;
  svg {
    height: 60px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavSpan = styled.span`
  padding: 10px 15px;
  cursor: pointer;
`;
