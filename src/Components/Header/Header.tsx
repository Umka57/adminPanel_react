import React, {useEffect, useState} from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {Typography} from "@material-ui/core";
// Import NavLink from react-router lib
import {NavLink} from "react-router-dom";
import {getProrectors, getStruct} from "../../api";

function ProrectorsMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="prorectors-menu" aria-haspopup="true" onClick={handleClick}>
                Проректора
            </Button>
            <Menu
                id="prorectors-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                foreach(){

            }
                <MenuItem onClick={handleClose}><NavLink to={`/prorectors`}>Asdas</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>

    );
}
function UniversityMenu(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <Button aria-controls="university-menu" aria-haspopup="true" onClick={handleClick}>
                Университеты
            </Button>
            <Menu
                id="university-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
function StructuresMenu(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <Button aria-controls="structures-menu" aria-haspopup="true" onClick={handleClick}>
                Структурные
            </Button>
            <Menu
                id="structures-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
export default class Header extends React.Component{
    componentDidMount() {
        getProrectors().then(response => {
            this.setState({person: response.data})
        });

        getStruct().then(response => {
            this.setState()
        })
    }

    render() {
        return (
        <AppBar position="relative">
            <Toolbar>
                <Typography className="h1">
                    Мгуту Статистика
                </Typography>
                <Button><a href={'/users'}>Пользователи</a></Button>
                <ProrectorsMenu/>
                <UniversityMenu/>
                <StructuresMenu/>
                <Button>
                    Работники
                </Button>
            </Toolbar>
        </AppBar>
        )
    }
}
