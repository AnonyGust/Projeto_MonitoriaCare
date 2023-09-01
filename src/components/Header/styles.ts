import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  h2{
    color: ${props => props.theme.colors.secundary};
  }
  li{
    display: flex;

  }
  .header{
    display: flex;
    flex-direction: row;
  }
  .dropdown {
  position: relative;
}

.dropdown > button {
  position: relative;
  z-index: 2;
}

p{
  color: ${(props) => props.theme.colors.primary};
}

.dropdown button {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  border: 0;
  cursor: pointer;
  font-size: 13px;
  font-family: sans-serif;
}

.dropdown button:hover {
}

.dropdown .menu {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 61px;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  translate: 0 -20px;
  transition: 0.4s;
}

.dropdown .menu button {
  height: 56px;
  width: 100%;
  border-radius: 0;
}

.dropdown.open .menu {
  opacity: 1;
  visibility: visible;
  translate: 0;
}
`;
