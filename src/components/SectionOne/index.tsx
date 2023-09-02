import React, { useContext } from "react";
import {BiArrowToBottom} from 'react-icons/bi'
import { SessionOneContainer } from "./styles";
import image from "../../assets/avatar.jpeg";
export const SectionOne: React.FC = () => {
  return (
    <>
      <SessionOneContainer>
        <section className="banner">
          <div className="textBanner">
            <h2 className="teste">

            </h2>
            <h3>Monitoria</h3>
            <div className="containerBtn">
            <button className="btn1">teste <BiArrowToBottom /></button>
            <button className="btn2">Contato</button>
            </div>
          </div>
        </section>
        <section></section>
      </SessionOneContainer>
    </>
  );
};

export default SectionOne;
