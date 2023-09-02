import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  .header{
    display: flex;
    flex-direction: row;
  }
  .dropdown {
  position: relative;
}

.container{
  display: flex;
  gap: 10px
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
  gap: 5px;
  height: 30px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  border: 0;
  cursor: pointer;
  font-size: 13px;
  font-family: sans-serif;
}

.dropdown .btnHeader{
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};
  svg{
    color:${(props) => props.theme.colors.secundary}; ;
  }
}

.dropdown button:hover {
}

.dropdown .menu {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 43px;
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
  height: 45px;
  width: 100%;
  border-radius: 0;
}

.dropdown.open .menu {
  opacity: 1;
  visibility: visible;
  translate: 0;
}
`;
