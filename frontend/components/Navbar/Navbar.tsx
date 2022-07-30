import { useRouter } from 'next/router';
import type { FC } from 'react';
import styled from 'styled-components';
// import Calendar from '../../assets/nav/calendar_nav.svg';

const Container = styled.nav`
  padding: 0 25px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
`;

const Home = styled.div`
  bottom: 17px;
  position: relative;
  left: -15px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const Item = styled.li`
  font-size: 16px;
  margin: 0 30px;
  padding: 0.5rem 1rem;
`;

const String = styled.span`
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 18px;
    color: ${({ theme }) => theme.darkGray};
  }

  @media (max-width: 1300px) {
    font-size: 15px;
  }
`;

const LogoTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.mainColor};
`;

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <Container>
      <List>
        <Item>
          {/* <Calendar width="22px" height="100%" /> */}
          <div>main</div>
        </Item>
        <Item>
          {/* <Calendar /> */}
          <div>calendar</div>
        </Item>
        <Item>
          {/* <Navs.Home /> */}
          <div>graph</div>
        </Item>
        <Item>
          {/* <Graph /> */}
          <div>profile</div>
        </Item>
      </List>
    </Container>
  );
};

export default Navbar;
