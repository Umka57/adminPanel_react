import React, {useEffect} from "react";

// Import Material UI components
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {Typography} from "@material-ui/core";

// Import NavLink from react-router lib
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";

import css from "./Header.module.css"

const ProrectorsMenu: React.FC = () => {
    const {prorectors,loading,error} = useTypedSelector(state => state.prorectors)
    const {fetchProrectors} = useActions()

    useEffect(()=> {
        fetchProrectors()
    },[])

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="prorectors-menu" aria-haspopup="true" onClick={handleClick} className={css.menu__navlink}>
                Проректора
            </Button>
            <Menu
                id="prorectors-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {prorectors.map(prorector =>
                <MenuItem key={prorector.id} onClick={handleClose}><NavLink className={css.navlink} to={`/user/${prorector.id}`}>{prorector.lastname} {prorector.name.substr(0,1)}.{prorector.patronymic.substr(0,1)}</NavLink></MenuItem>
                )}
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

    const {university,loading,error} = useTypedSelector(state => state.university)
    const {fetchUniversity} = useActions()

    useEffect(()=> {
        fetchUniversity()
    },[])

    return(
        <div>
            <Button aria-controls="university-menu" aria-haspopup="true" onClick={handleClick} className={css.menu__navlink}>
                Университеты
            </Button>
            <Menu

                id="university-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >{university.map(univer =>  <MenuItem key={univer.id} onClick={handleClose}><NavLink className={css.navlink} to={`/user/${univer.id}`}>{univer.lastname} {univer.name.substr(0,1)}.{univer.patronymic.substr(0,1)}</NavLink></MenuItem>)}
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

    const {structure,loading,error} = useTypedSelector(state => state.structure)
    const {fetchStructure} = useActions()

    useEffect(()=> {
        if(!structure.length){
            fetchStructure()
        }
    },[])

    return(
        <div>
            <Button aria-controls="structures-menu" aria-haspopup="true" onClick={handleClick} className={css.menu__navlink}>
                Структурные
            </Button>
            <Menu id="structures-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {structure.map(struct =>
                    <MenuItem onClick={handleClose} key={struct.id}><NavLink className={css.navlink} to={`/user/${struct.id}`}>{struct.lastname} {struct.name.substr(0,1)}.{struct.patronymic.substr(0,1)}</NavLink></MenuItem>
                )}
            </Menu>
        </div>
    );
}
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
                    <StructuresMenu/>
                    <Button>
                        Работники
                    </Button>
                </Toolbar>
            </AppBar>

        );
    }
}