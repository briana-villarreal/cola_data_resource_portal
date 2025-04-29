import './App.css';
import { RoutesCmp } from './routes';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';

const Wrapper = styled.div`
  margin: 16px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: 48px;
  margin: 0 -16px;
  padding: 0 16px;
  border-bottom: 1px solid #e3e3e3;
`;

const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.$open ? '15vw' : 0};
  padding-top: 16px;
  height: 100vh;
  position: absolute;
  background-color: white;
  transition: width 0.5s;
  border-right: ${props => props.$open ? '1px solid #e3e3e3' : ''};
  overflow: hidden;
  z-index: 1000;

  > * {
    text-wrap: nowrap;
  }
`;


function App() {
  const [isNavSidebarShowing, setIsNavSidebarShowing] = useState(false);

  return (
    <Wrapper>
      <Header toggle={() => setIsNavSidebarShowing(!isNavSidebarShowing)} />
      <NavSidebar isOpen={isNavSidebarShowing} closeSidebar={() => setIsNavSidebarShowing(false)} />
      <RoutesCmp />
    </Wrapper>
  );
}

const Header = ({ toggle }) => {
  return (<HeaderWrapper>
    <Link to="/">
      <IconWrapper>
        <svg width="79px" height="40px" viewBox="0 0 78 40">
          <g id="surface1">
            <path fill="#bf5700" d="M 76.925781 0.648438 C 74.140625 -0.113281 70.765625 0.453125 68.054688 1.289062 C 62.875 2.964844 58.453125 6.507812 53.636719 9.042969 C 51.097656 10.125 47.601562 10.347656 45.257812 8.871094 C 44.695312 8.46875 43.675781 8.757812 43.675781 8.757812 C 43.351562 8.511719 42.984375 8.417969 42.542969 8.574219 C 41.371094 9.4375 40.148438 8.109375 38.902344 8.796875 C 37.65625 8.109375 36.4375 9.4375 35.261719 8.574219 C 34.820312 8.417969 34.457031 8.511719 34.132812 8.757812 C 34.132812 8.757812 33.113281 8.46875 32.550781 8.871094 C 30.207031 10.347656 26.710938 10.125 24.167969 9.042969 C 19.355469 6.507812 14.933594 2.964844 9.753906 1.289062 C 7.039062 0.453125 3.667969 -0.113281 0.882812 0.648438 C 0.515625 0.894531 0.0976562 1.339844 0.199219 1.878906 C 0.394531 2.199219 0.589844 2.644531 1.003906 2.71875 C 10.972656 1.214844 16.351562 11.183594 24.707031 13.820312 C 24.722656 13.925781 24.234375 14.335938 23.703125 14.625 C 22.523438 15.28125 20.773438 15.027344 20.652344 16.652344 C 20.96875 17.660156 22.191406 18.03125 23.070312 18.421875 C 25.148438 19.605469 27.640625 18.621094 29.519531 17.660156 C 29.742188 17.4375 30.105469 17.5625 30.277344 17.785156 C 30.132812 22.339844 33.578125 25.367188 34.210938 29.601562 C 34.578125 31.570312 33.355469 33.023438 33.210938 34.867188 C 33.195312 35.550781 33.722656 35.097656 34.007812 37.355469 C 34.132812 37.765625 35.148438 38.914062 36.070312 39.398438 C 36.917969 39.734375 37.902344 39.832031 38.902344 39.808594 C 39.902344 39.832031 40.886719 39.734375 41.738281 39.398438 C 42.65625 38.914062 43.675781 37.765625 43.796875 37.355469 C 44.082031 35.097656 44.613281 35.550781 44.597656 34.867188 C 44.449219 33.023438 43.226562 31.570312 43.59375 29.601562 C 44.230469 25.367188 47.675781 22.339844 47.527344 17.785156 C 47.699219 17.5625 48.066406 17.4375 48.285156 17.660156 C 50.167969 18.621094 52.660156 19.605469 54.738281 18.421875 C 55.617188 18.03125 56.839844 17.660156 57.15625 16.652344 C 57.035156 15.027344 55.28125 15.28125 54.101562 14.625 C 53.574219 14.335938 53.085938 13.925781 53.101562 13.820312 C 61.457031 11.183594 66.832031 1.214844 76.804688 2.71875 C 77.21875 2.644531 77.414062 2.199219 77.609375 1.878906 C 77.703125 1.339844 77.289062 0.894531 76.921875 0.648438 " />
          </g>
        </svg>
      </IconWrapper>
    </Link>
    <IconWrapper onClick={toggle}>
      <svg viewBox="0 0 100 80" width="40" height="40" fill="currentColor">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </IconWrapper>
  </HeaderWrapper>)
};

const NavSidebar = ({ isOpen, closeSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);


  return (
    <SidebarWrapper ref={sidebarRef} $open={isOpen}>
      <IconWrapper className="align-self-end mr-3" onClick={closeSidebar}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729" />
        </svg>
      </IconWrapper>
      <Link to={'/diagnosing-data-issues'}><p>Diagnosing data issues</p></Link>
      <Link to={'/python-setup'}><p>Python setup</p></Link>
      <Link to={'/tableau-overview'}><p>Tableau overview</p></Link>
      <Link to={'/vba-in-excel'}><p>VBA in Excel</p></Link>
    </SidebarWrapper>
  )
}

export default App;
