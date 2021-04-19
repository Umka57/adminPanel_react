import React, {useEffect} from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import {Typography} from "@material-ui/core";

import css from "./Header.module.css"

import ProrectorsMenu from "./Menus/ProrectorsMenu";
import UniversityMenu from "./Menus/UniverMenu";
import StructureMenu from "./Menus/StructureMenu";

export default class Header extends React.Component{
    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <Typography className="h1">
                        Мгуту Статистика
                    </Typography>

                    <Button className={css.menu__navlink}><a href={'/users'}>Пользователи</a></Button>

                    <ProrectorsMenu/>
                    <UniversityMenu/>
                    <StructureMenu/>

                    <Button>
                        Работники
                    </Button>
                </Toolbar>
            </AppBar>

        );
    }
}