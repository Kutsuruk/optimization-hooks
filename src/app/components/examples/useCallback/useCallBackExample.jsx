import React, {useCallback, useEffect, useRef, useState} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withoutCallback = useRef(0)
    const withCallback = useRef(0)

    const handleChange = ({target}) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}))
    }

    const validatorWithoutCallback = (data) => {
        console.log('validatorWithoutCallback', data)
    }

    const validatorWithCallback = useCallback((data) => {
        console.log('validatorWithCallback', data)
    }, [])

    useEffect(() => {
        validatorWithoutCallback(data)
        validatorWithCallback(data)
    }, [data])

    useEffect(() => {
        withoutCallback.current++
    }, [validatorWithoutCallback])

    useEffect(() => {
        withCallback.current++
    }, [withCallback])

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />

            <p>WithoutCallBack: {withoutCallback.current}</p>
            <p>WithCallBack: {withCallback.current}</p>

            <label htmlFor='email' className='form-label'>Email</label>
            <input onChange={handleChange}
                   type="email"
                   className='form-control'
                   id='email'
                   name='email'
                   value={data.email || ''}
            />

            <button className='btn btn-primary mt-2'>Click</button>
        </CardWrapper>
    );
};

export default UseCallBackExample;
