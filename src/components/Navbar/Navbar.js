import { useState } from "react"
import { 
    ContainerNavbar,
    Wrapper,
    LogoContainer,
    Menu,
    MenuItem,
    MenuLink,
    MobileIcon 
} from "./Navbar.elements"
import { FaBars } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import Logo from '../../assets/img/AUDesign-logo.svg'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <ContainerNavbar>
            <Wrapper>
                <LogoContainer>
                    <img src={Logo} alt="Logo AUDesign" />
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FaBars />
                </MobileIcon>
                <Menu show={showMobileMenu}>
                    <MenuItem>
                        <MenuLink to="/">
                            <FormattedMessage id="header.item1" defaultMessage="Inicio" />
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/">
                            <FormattedMessage id="header.item2" defaultMessage="Nosotros" />
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/">
                            <FormattedMessage id="header.item3" defaultMessage="Servicios" />
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/">
                            <FormattedMessage id="header.item4" defaultMessage="Contacto" />
                        </MenuLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </ContainerNavbar>
    )
}

export default Navbar