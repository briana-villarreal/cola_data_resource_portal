import logo from './logo.svg';
import './App.css';
import { RoutesCmp } from './routes';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router';

const Wrapper = styled.div`
  margin: 16px;
`;

const HeaderWrapper = styled.div`
  height: 48px;
  margin: -16px;
  padding: 16px;
  padding-bottom: 4px;
  border-bottom: 1px solid #e3e3e3;
`;

const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const SidebarWrapper = styled.div`
  width: ${props => props.$open ? '30vw' : 0};
  margin-top: 16px;
  height: 100vh;
  position: absolute;
  background-color: white;
  transition: width 0.5s;
  border-right: ${props => props.$open ? '1px solid #e3e3e3' : ''};
  overflow: hidden;
`;


function App() {
  const [isNavSidebarShowing, setIsNavSidebarShowing] = useState(false);

  return (
    <Wrapper>
      <Header expandSidebar={() => setIsNavSidebarShowing(!isNavSidebarShowing)}/>
      <NavSidebar isOpen={isNavSidebarShowing}/>
      <RoutesCmp />
    </Wrapper>
  );
}

const Header = ({expandSidebar}) => {
  return (<HeaderWrapper>
    <IconWrapper onClick={expandSidebar}>
      <svg viewBox="0 0 100 80" width="40" height="40" fill="currentColor">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </IconWrapper>
  </HeaderWrapper>)
};

const NavSidebar = ({isOpen}) => {
  return (
    <SidebarWrapper $open={isOpen}>
        <Link to={'/cola_data_resource_portal/diagnosing-data-issues'}><p>Diagnosing data issues</p></Link>
        <Link to={'/cola_data_resource_portal/python-setup'}><p>Python setup</p></Link>
        <Link to={'/cola_data_resource_portal/tableau-overview'}><p>Tableau overview</p></Link>
        <Link to={'/cola_data_resource_portal/vba-in-excel'}><p>VBA in Excel</p></Link>
    </SidebarWrapper>
  )
}

export default App;
