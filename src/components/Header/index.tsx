import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import ThemeSwitch from "../Switch";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiFileFind } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";

import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
} from "react";

interface Props {
  toggleTheme(): void;
}

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const [isOpenTelefone, setIsOpenTelefone] = useState<boolean>(false);
  const [isOpenEmails, setIsOpenEmails] = useState<boolean>(false);

  const telefoneRef = useRef<HTMLDivElement>(null);
  const emailsRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(telefoneRef, () => setIsOpenTelefone(false));
  useOnClickOutside(emailsRef, () => setIsOpenEmails(false));

  return (
    <Container>
      <>
        <div className="container">
          <div
            ref={telefoneRef}
            className={`dropdown ${isOpenTelefone ? "open" : ""}`}
          >
            <button onClick={() => setIsOpenTelefone(!isOpenTelefone)}>
              <p>Telefone</p>
              {isOpenTelefone ? <BiChevronUp /> : <BiChevronDown />}
            </button>
            <div className="menu">
              <button className="btnHeader">
                <BiPencil />
                <span>Inserção manual</span>
              </button>
              <button className="btnHeader">
                <BiPhoneCall />
                <span>Procurar</span>
              </button>
              <button className="btnHeader">
                <BiFileFind />
                <span>Settings</span>
              </button>
            </div>
          </div>

          <div
            ref={emailsRef}
            className={`dropdown ${isOpenEmails ? "open" : ""}`}
          >
            <button onClick={() => setIsOpenEmails(!isOpenEmails)}>
              <p>E-mails</p>
              {isOpenEmails ? <BiChevronUp /> : <BiChevronDown />}
            </button>
            <div className="menu">
              <button className="btnHeader">
                <BiPencil />
                <span>Inserção</span>
              </button>
              <button className="btnHeader">
                <BiFileFind />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
        <ThemeSwitch toggleTheme={toggleTheme} />
      </>
    </Container>
  );
};

export default Header;
