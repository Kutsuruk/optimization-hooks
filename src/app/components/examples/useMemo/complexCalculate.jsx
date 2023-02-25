import React, {useEffect, useMemo, useState} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const  factorial = (n) => {
    return n ? n * factorial(n - 1) : 1
}
const runFactorial = (n) => {
    console.log('Run factorial')
    return factorial(n)
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100)
    const [otherState, setOtherState] = useState(false)

    const btnColor = otherState ? 'primary' : 'secondary'
    const fact = useMemo(() => runFactorial(value), [value])

    useEffect(() => {
        console.log('render')
    }, [btnColor])

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />

                <p>Value: {value}</p>
                <p>Factorial Result: {fact}</p>
                <button className='btn btn-primary m-1'
                        onClick={ () => setValue(value + 10) }
                >
                    +
                </button>
                <button className='btn btn-primary'
                        onClick={ () => setValue(value - 10) }
                >
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />

                <button onClick={() => setOtherState((prevState) => !prevState)}
                        className={'btn btn-' + btnColor}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
