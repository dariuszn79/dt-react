import * as React from "react"
import { useEffect, useState } from "react"

// @ts-ignore
// import { useSwitch } from "@framer/tishogeorgiev.switch/code"
// @ts-ignore
import { useFocusable } from "react-sunbeam";
import {
    useAnimation,
    Frame,
    Stack,
} from "framer"
// import { url } from "framer/resource"
// import { createStore } from "../setter"

// export const useSwitcherStore = createStore({
//     tile: "",
//     tileFocused: false,
//     tilePosX: 0,
//     tilePosY: 0,
//     tileWidth: 0,
//     tileHeight: 0,
// })

export default function TileSwitcher(props) {
    const {
        logo,
        text1,
        text2,
        radius,
        progress,
        gradient,
        showLogo,
        showTitle,
        showSubtitle,
        showProgress,
        switchName,
        children,
        scale,
        onKeyPress,
        onTap,
        focusKey,
        ...rest
    } = props
    const ref = React.useRef(null)
    const controls = useAnimation()
    const controls2 = useAnimation()
    const controls3 = useAnimation()
    // const switchControls = useSwitch()
    // const [storeSwitcher, setSwitcherStore] = useSwitcherStore()
    const [stateProgress, setProgress] = useState(showProgress)

    const transition = {
        yoyo: 1,
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 300,
    }
    const transition2 = {
        duration: 0.35,
        type: "spring",
        damping: 60,
        stiffness: 400,
    }
    useEffect(function () {
        if (props.progress && props.progress !== 0) {
            console.log("Progress:" + props.progress)
            setProgress(true)
            console.log("Progress:" + props.showProgress)
        }
    }, [])
    // const { focused } = useFocusable(focusKey, ref, {
        // onKeyPress: (event) => {
        //     if (event.key === "Enter") {
        //         let childname = children[0]?.props.name
        //         childname &&
        //             // switchControls.setSwitchState(switchName, childname)
        //         console.log("KeyPressed: " + childname)
        //         controls.start({
        //             scale: 0.9,
        //             transition: transition,
        //         })

        //         event.stopPropagation()
        //     }
        // },
        // onFocus: () => {
        //     let tileParameters = ref.current.getBoundingClientRect()

        //     controls.start({
        //         scale: 1.08,
        //         boxShadow: "16px 16px 20px 0px rgba(0, 0, 0, 0.12)",
        //         opacity: 1,
        //         transition: transition2,
        //     })
        //     controls2.start({
        //         opacity: 1,
        //     })
        //     controls3.start({
        //         opacity: 1,
        //         transition: transition2,
        //     })
            // setSwitcherStore({
            //     tile: focusKey,
            //     tileFocused: true,
            //     tilePosX: tileParameters.x,
            //     tilePosY: tileParameters.y,
            //     tileWidth: tileParameters.width,
            //     tileHeight: tileParameters.height,
            // })
            // console.log(`${storeSwitcher.tile} is Focused`)
        // },
    //     onBlur: () => {
    //         controls.start({
    //             scale: 1,
    //             boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.12)",
    //             transition: transition2,
    //             // opacity: 0.85,
    //         })
    //         controls2.start({
    //             opacity: 0.5,
    //             transition: transition2,
    //         })
    //         controls3.start({
    //             opacity: 0.5,
    //             transition: transition2,
    //         })
    //         // setSwitcherStore({ tileFocused: false })
    //         // console.log(`${storeSwitcher.tile} is Blured`)
    //     },
    // })

    return (
        <Frame
            ref={ref}
            width={props.width}
            height={props.height}
            backgroundColor={"#000"}
            borderRadius={props.radius}
            overflow="hidden"
            animate={controls}
            onKeyPress={onKeyPress}
            onTap={onTap}
            style={{
                opacity: 1,
                boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.12)",
            }}
        >
            <Frame
                backgroundColor={"transparent"}
                width={"100%"}
                height={"100%"}
                animate={controls3}
                image={props.image}
                style={{
                    opacity: 0.5,
                }}
            />
            <Frame
                backgroundColor={"transparent"}
                width={"100%"}
                height={"100%"}
                image={gradient}
                style={{
                    opacity: 1,
                }}
            />
            <Frame
                width={props.width}
                height={props.height}
                borderRadius={radius}
                overflow="hidden"
                animate={controls2}
                backgroundColor={"transparent"}
                style={{
                    opacity: 0.5,
                    border: 1,
                    borderImageWidth: 1,
                    borderStyle: "solid",
                    borderImageSlice: 1,
                    borderImageSource:
                        "radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.15) 100%)",
                }}
            />

            <Frame
                backgroundColor={"transparent"}
                width={"100%"}
                height={"100%"}
                borderRadius={props.radius}
                animate={controls2}
                image={gradient}
                style={{
                    opacity: 0.5,
                    border: 1,
                    borderImageWidth: 1,
                    borderStyle: "solid",
                    borderImageSlice: 1,
                    borderImageSource:
                        "radial-gradient(400% 100% at 100% 0%, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.15) 100%)",
                }}
            />

            <Stack
                distribution="end"
                alignment="start"
                animate={controls2}
                width="100%"
                height="100%"
                style={{
                    opacity: 0.5,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingBottom: 12,
                    justifyItems: "end",
                    color: "#fff",
                    fontFamily: "Sky Text Medium",
                    fontSize: props.fontsize,
                }}
            >
                <Frame
                    image={logo}
                    width={365}
                    height={75}
                    visible={showLogo}
                    left={0}
                    style={{ backgroundColor: "transparent" }}
                />

                <Frame
                    width="100%"
                    height="auto"
                    visible={showTitle}
                    style={{
                        alignItems: "start",
                        justifyContent: "start",
                        background: "transparent",
                        color: "#fff",
                        fontFamily: "Sky Text Medium",
                        fontSize: 36,
                        textAlign: "left",
                    }}
                >
                    {text1}
                </Frame>
                <Frame
                    width="100%"
                    height="auto"
                    visible={showSubtitle}
                    style={{
                        justifyContent: "start",
                        background: "transparent",
                        color: "#fff",
                        fontFamily: "Sky Text ",
                        fontSize: 28,
                        textAlign: "left",
                    }}
                >
                    {text2}
                </Frame>
                <Frame
                    width={"100%"}
                    height={6}
                    visible={stateProgress}
                    backgroundColor={"transparent"}
                >
                    <Frame
                        width={"100%"}
                        height={6}
                        borderRadius={3}
                        backgroundColor={"rgba(255,255,255,0.1)"}
                    ></Frame>
                    <Frame
                        width={progress + "%"}
                        height={6}
                        borderRadius={3}
                        backgroundColor={"rgb(0, 135, 255)"}
                    ></Frame>
                </Frame>
            </Stack>
        </Frame>
    )
}

TileSwitcher.defaultProps = {
    height: 315,
    width: 560,
    gradient: "https://i.imgur.com/J9BHehk.png",
    showLogo: true,
    showTitle: true,
    showSubtitle: true,
    showProgress: false,
    text1: "Programme Title",
    text2: "Subtitle/Tag/Subline",
    radius: 10,
    switchName: "sharedSwitch",
}


