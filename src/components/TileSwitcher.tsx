import React, {ReactNode, useRef} from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'
import {useHistory } from "react-router-dom";
import { useFocusable } from "react-sunbeam";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 1.3,
    opacity: 0,
    transition
  }
};
interface Props {
  children: ReactNode;
  to:string;
  name:string;
  ref:string;
  onKeyPress:KeyboardEvent;
}

function TileSwicther({children, ...props }: Props) {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null)
    const { focused } = useFocusable({
        elementRef: ref,
        onKeyPress(event) {
            if (event.key === "Enter") {
              history.push(props.to);
                event.stopPropagation()
              
            }
        },
        onBlur(event){

        },
        onFocus(event){

        }
    })
     const handleClick=()=> {
      history.push(props.to);
  
    }
    return (
        <motion.div variants={thumbnailVariants} style={{transformOrigin:" 50% 50%"}}>
            <Tile ref={ref} onClick={handleClick} style={{ border: focused ? "2px solid var(--colors-white-24)" : "2px solid transparent" }}>
            {props.name}
            </Tile>
        </motion.div>
  );
};

export default TileSwicther;

const Tile = styled.div`
  font-family:var(---typography-h-5-font-size);
  font-size:var(----typography-h-5-font-size);
  background: var(--colors-white-6);
  box-shadow: calc(var(--elevation-lrg-0-offset-x)*1px) calc(var(--elevation-lrg-0-offset-y)*1px) 30px calc(var(--elevation-lrg-0-spread)*1px) var(--elevation-lrg-0-color),
  calc(var(--elevation-lrg-1-offset-x)*1px) calc(var(--elevation-lrg-1-offset-y)*1px) calc(var(--elevation-lrg-1-radius)*1px) calc(var(--elevation-lrg-1-spread)*1px)  var(--elevation-lrg-1-color) ;
  color:var(--colors-white-100);
  margin: 0 1em;
  border-radius:calc(var(--radii-sml-radius)*1px);
  padding: 0.25em 1em;
  outline:none;
  height: 234px;
  width: 414px;
  display:block;
`

