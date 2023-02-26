import PropTypes from "prop-types";
import React, {useCallback, useEffect, useState} from "react";
const LogOutButton = ({onLogout}) => {
    useEffect(() => {
        console.log('render button')
    })

    return(
        <button className='btn btn-primary' onClick={onLogout}>
            Logout
        </button>
    )
}

LogOutButton.propTypes = {
    onLogout: PropTypes.func
}

function areEqual (prevState, nextState) {
    if (prevState.onLogout !== nextState.onLogout)
        return false

    return true
}

const MemoizedLogoutButton = React.memo(LogOutButton, areEqual)

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false)

    const handleLogout = useCallback(() => {
        localStorage.removeItem('auth')
        console.log('logout')
    }, [props])

    return(
        <>
            <button className='btn btn-primary m-2' onClick={() => setState(!state)}>
                Initiate rerender
            </button>
            <MemoizedLogoutButton onLogout={handleLogout} />
        </>
    )
};

export default MemoWithUseCallbackExample;
