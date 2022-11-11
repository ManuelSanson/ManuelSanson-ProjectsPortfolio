import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, } from '@chakra-ui/react'
import { IconButton, } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Show } from '@chakra-ui/react'
import './NavBar.css';
import { useRef } from 'react';
import { useScrollSection } from '../../context/ScrollContext';

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    
    const { home, projects, aboutMe, contact, scrollToSection } = useScrollSection();

    const scrollHamburger = (elementRef) => {
        scrollToSection((elementRef))
        onClose()
    }

    return (
        <nav>
            {/* Menu on small screens */}
            <Show breakpoint='(max-width: 576px)'>
                <Button 
                    ref={btnRef} 
                    onClick={onOpen} 
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    className='hamburgerMenuButton'>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size='full'
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <ul className='linkContainer'>
                                <li className='link' onClick={()=> scrollHamburger(home)}>HOME</li>
                                <li className='link' onClick={()=> scrollHamburger(projects)}>PROJECTS</li>
                                <li className='link' onClick={()=> scrollHamburger(aboutMe)}>ABOUT ME</li>
                                <li className='link' onClick={()=> scrollHamburger(contact)}>CONTACT</li>
                            </ul>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Show>

            {/* Menu on big screens */}
            <Show breakpoint='(min-width: 577px)'>
                <Breadcrumb separator='' className='largeMenuContainer'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' className='link'>HOME</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={()=> scrollToSection(projects)} className='link'>PROJECTS</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' className='link'>ABOUT ME</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#' className='link'>CONTACT</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Show>
        </nav>
    )
}

export default NavBar;