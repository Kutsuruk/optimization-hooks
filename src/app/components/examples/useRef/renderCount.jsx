import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const [otherState, setOtherState] = useState(false)
    const renderCountRef = useRef(0)

    const toggleOtherState = () => {
        setOtherState(!otherState)
    }

    useEffect(() => {
        renderCountRef.current++
    })

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />

            <p>Render Count: {renderCountRef.current}</p>
            <button className='btn btn-primary' onClick={toggleOtherState}>click</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
