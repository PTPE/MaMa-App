import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import DogIcon from "./icon/DogIcon";
import Button from "./Button";

const navLinks = [{ 案主資料: "clientData" }, { 製作班表: "create" }];

const navLinksComponents = navLinks.map((link, i) => (
  <NavLink
    to={Object.values(link)[0]}
    key={i}
    style={{ textDecoration: "none" }}
  >
    <Button
      styles={{
        fontSize: "20px",
        fontWeight: "400",
        padding: "10px 15px",
        backgroundColor: "transparent",
      }}
    >
      {Object.keys(link)}
    </Button>
  </NavLink>
));

export function AppNav() {
  return (
    <>
      <Header>
        <Logo>
          <DogIcon width="60px" height="60px" />
          <h1>
            <span>MaMa</span> APP
          </h1>
        </Logo>
        <Nav>{navLinksComponents}</Nav>
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  padding-bottom: 10px;
  border-bottom: 3px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 40px;
  }
  span {
    color: #fcc822;
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: 40px;
  .active {
    background: #fcc822;
    border-radius: 10px;
  }
`;
