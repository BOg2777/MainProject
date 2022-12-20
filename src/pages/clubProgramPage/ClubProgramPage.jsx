import { React, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import {  ClubProgram,} from "./ui";


function ClubProgramPage() {
    
    const { pathname } = useLocation();
    useEffect(() => {window.scrollTo(0, 0);}, [pathname]);

    return (
        <div>
            <ClubProgram/>
        </div>

    )
}

export default ClubProgramPage;