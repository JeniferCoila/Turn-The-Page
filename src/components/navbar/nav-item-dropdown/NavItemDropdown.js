import "./NavItemDropdown.scss";
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import React from 'react';


const NavItemDropdown = (props) => {
    

    const { label, classItem, iconClass, children } = props.data;

    return (
        <Dropdown className={`vlp-navbar-list-item vlp-navbar-dropdown ${classItem}`}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className={iconClass}></i>
                {label}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <ul>
                    {children.map(child => {
                        return (
                            <li key={child.id}>
                                <Link className="dropdown-item" to={`/category/${child.slug}`}>{child.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default NavItemDropdown;
