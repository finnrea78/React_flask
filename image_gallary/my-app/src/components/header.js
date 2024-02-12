import React from "react";
import { Navbar } from 'react-bootstrap';
// import React from "react";
// import {Navbar} from 'react-bootstrap';

// const Header = () => {
//   return (
//     <Navbar bg="light" variant="light">
//         <NavBar.Brand href="/"> Image Gallary</NavBar.Brand>
//     </Navbar>
//   );
// };

// export default Header;
const Header = ({title}) => {
    return (
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    );
};

export default Header;

