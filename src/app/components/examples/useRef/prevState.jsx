import React, {useEffect, useRef, useState} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const [otherState, setOtherState] = useState('false')
    const prevStateRef = useRef('')

    const toggleOtherState = () => {
        setOtherState((prevState) => prevState === 'false' ? 'true' : 'false')
    }

    useEffect(() => {
        prevStateRef.current = otherState
    }, [otherState])

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />

            <p>PrevState: {prevStateRef.current}</p>
            <p>CurrentState: {otherState}</p>

            <button className='btn btn-primary' onClick={toggleOtherState}>click</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
