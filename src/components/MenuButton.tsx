import React, {ReactNode, useRef} from "react";
import styled from 'styled-components'
import {useHistory } from "react-router-dom";
import { useFocusable } from "react-sunbeam";
import '../global/_variables.css';
interface Props {
  children: ReactNode;
  to:string;
  name:string;
  ref:string;
  onKeyPress:KeyboardEvent;
}

function MenuButton({children, ...props }: Props) {
  const history = useHistory();
  const ref = useRef<HTMLButtonElement>(null)
    const { focused } = useFocusable({
        elementRef: ref,
        onKeyPress(event) {
            if (event.key === "Enter") {
              history.push(props.to);
                event.stopPropagation()
              
            }
        },
    })
    function handleClick() {
      history.push(props.to);
      
    }
    return (
      <Button ref={ref} onClick={handleClick} style={{ border: focused ? "2px solid var(--colors-white-24)" : "2px solid transparent", }}>
        {children}{props.name}
      </Button>
  );
};

export default MenuButton;

const Button = styled.button`
  font-family:var(---typography-h-5-font-size);
  font-size:var(----typography-h-5-font-size);
  background: var(--colors-white-6);
  box-shadow: calc(var(--elevation-lrg-0-offset-x)*1px) calc(var(--elevation-lrg-0-offset-y)*1px) 30px calc(var(--elevation-lrg-0-spread)*1px) var(--elevation-lrg-0-color),
  calc(var(--elevation-lrg-1-offset-x)*1px) calc(var(--elevation-lrg-1-offset-y)*1px) 30px calc(var(--elevation-lrg-1-spread)*1px)  var(--elevation-lrg-1-color) ;
  color:var(--colors-white-100);
  margin: 0 1em;
  border-radius:calc(var(--radii-sml-radius)*1px);
  padding: 0.25em 1em;
  outline:none
`

