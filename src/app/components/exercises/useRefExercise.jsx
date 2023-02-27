import React, {useRef} from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef(null)

    const onBlockChange = () => {
        blockRef.current.style = 'height: 80px; width: 150px; color: white;'
        blockRef.current.innerText = 'text'
    }

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={blockRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button onClick={onBlockChange} className='btn btn-secondary mt-3'>change block</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
