import React from "react";
import { MiNavbar } from "./MiNavbar";
import { MiFooter } from "./MiFooter";

export const MiLayout = ({ children }) => {
    return (
        <>
            <MiNavbar />
            <main> {children} </main>
            <MiFooter />
        </>
    );
};
