import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import ThemeSwitch from "../Switch";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";

import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  toggleTheme(): void;
}

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="material-symbols-outlined">{children}</i>
);

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
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <Container>
      <>
        <div ref={ref} className={`dropdown ${isOpen ? "open" : ""}`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <p>Telefone</p>
            <Icon>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</Icon>
          </button>
          <div className="menu">
            <button>
              <Icon>
                <BiPhoneCall />
              </Icon>
              <span>Profile</span>
            </button>
            <button>
              <Icon>settings</Icon>
              <span>Settings</span>
            </button>
            <button>
              <Icon>lock</Icon>
              <span>Account</span>
            </button>
          </div>
        </div>

        <ThemeSwitch toggleTheme={toggleTheme} />
      </>
    </Container>
  );
};

export default Header;
