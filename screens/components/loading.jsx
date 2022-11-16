import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import loadingAnimation from "../animations/loading.json"

const Loading = () => {
    const anim = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container:anim.current,
            renderer:"svg",
            loop: true,
            autoplay: true,
            animationData: Loading,
        })
        return () => Lottie.stop();
    }, [])
    return <div style={{ height: 100, width: 200 }} ref={anim}></div>
}

export default Loading;