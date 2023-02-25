import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import PropTypes from "prop-types";
const CollapseWrapper = ({ children, title, name }) => {
    const [display, setDisaplay] = useState(false);
    const collapseRef = useRef();
    const toggleDisplay = () => {
        setDisaplay((prevState) => !prevState);
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

    return (
        <div className="card  my-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    {title}
                    {
                        !display ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 fill="currentColor"
                                 className="bi bi-caret-down-fill"
                                 viewBox="0 0 16 16"
                                 onClick={toggleDisplay}
                            >
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 fill="currentColor"
                                 className="bi bi-caret-up-fill"
                                 viewBox="0 0 16 16"
                                 onClick={toggleDisplay}
                            ><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                        )
                    }
                </div>
                <div className="collapse" ref={collapseRef} id={name + title}>
                    {children}
                </div>
            </div>
        </div>
    );
};
CollapseWrapper.defaultProps = {
    title: "Информация"
};
CollapseWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    title: PropTypes.string,
    name: PropTypes.string
};

export default CollapseWrapper;
