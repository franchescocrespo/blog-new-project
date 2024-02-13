import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Image,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import logoImg from "../assets/logo_2-removebg.png";

export const MiNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const menuItems = [
        {
            label: "LAN MERKATU SARRERA",
            link: "/blog-new-project/lan-merkatu-sarrera",
        },
        {
            label: "CURRICULUM",
            link: "/blog-new-project/curriculum",
        },
        {
            label: "Aholkuak",
            link: "/blog-new-project/aholkuak",
        },
        {
            label: "Aurkezpen Gutuna",
            link: "/blog-new-project/aurkezpen-gutuna",
        },
        {
            label: "INMIGRAZIO-BALIABIDEAK",
            link: "/blog-new-project/inmigrazio",
        },
        {
            label: "Podkast",
            link: "/blog-new-project/podcast",
        },
        {
            label: "Aldizkaria",
            link: "/blog-new-project/magazine",
        },
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-[#eee4e1]"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link color="foreground" href="/blog-new-project">
                        <Image width={20} alt="Image Logo" src={logoImg} />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="hidden sm:flex gap-4">
                <NavbarBrand>
                    <Link color="foreground" href="/blog-new-project">
                        <Image width={50} alt="Image Logo" src={logoImg} />
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/blog-new-project/lan-merkatu-sarrera"
                    >
                        LAN MERKATU SARRERA
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem isActive>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                ORIENTAZIOA
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem key="autoscaling">
                            <Link
                                href="/blog-new-project/curriculum"
                                className="w-full"
                            >
                                {" "}
                                Curriculum
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="autoscaling">
                            <Link
                                href="/blog-new-project/aholkuak"
                                className="w-full"
                            >
                                Aholkuak
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="autoscaling">
                            <Link
                                href="/blog-new-project/aurkezpen-gutuna"
                                className="w-full"
                            >
                                Aurkezpen Gutuna
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/blog-new-project/inmigrazio"
                    >
                        INMIGRAZIO-BALIABIDEAK
                    </Link>
                </NavbarItem>

                <Dropdown>
                    <NavbarItem isActive>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                MULTIMEDIA
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem key="autoscaling">
                            <Link
                                href="/blog-new-project/podcast"
                                className="w-full"
                            >
                                Podkast
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="autoscaling">
                            <Link
                                href="/blog-new-project/magazine"
                                className="w-full"
                            >
                                {" "}
                                Aldizkaria
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <NavbarItem>
                    <Button onPress={onOpen} color="foreground" href="#">
                        KONTAKTUAK
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <Modal
                isOpen={isOpen}
                className="top-0 left-0"
                // placement="top"
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Kontaktua
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex">
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
                                        />
                                    </svg>
                                    <span className="mr-1">
                                        Somera kalea 94, 6B, Bilbao, Spain 48001
                                    </span>
                                </div>

                                <div className="flex">
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                                        />
                                    </svg>
                                    <span>944 089 066</span>
                                </div>

                                <div className="flex">
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                    <span>09:00-13:00 | 16:30-20:30</span>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Itxi
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full uppercase"
                            href={item.link}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};
