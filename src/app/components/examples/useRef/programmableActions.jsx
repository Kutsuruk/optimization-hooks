import React, {useRef} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef(null)

    const onFocusHandle = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }

    const onWidthChange = () => {
        inputRef.current.style = 'width: 250px; border-color: red'
    }

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />

            <label htmlFor='email'
                   className='form-label'
            >
                Input
            </label>
            <input ref={inputRef}
                   type="email"
                   className='form-control'
                   id='email'
            />
            <button onClick={onFocusHandle}
                    className='btn btn-primary mt-0.5'
            >
                Focus input
            </button>
            <button onClick={onWidthChange}
                    className='btn btn-secondary m-3'
            >
                Change width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
