import React, {useEffect} from "react";
import {useTypedSelector} from "../../../Hooks/useTypeSelector";
import {useActions} from "../../../Hooks/useActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import css from "../Header.module.css";

import {NavLink} from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

const UniverMenu: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    const {university,loading,error} = useTypedSelector(state => state.university)
    const {fetchUniversity} = useActions()
    const param = 'university'

    useEffect(()=> {
        fetchUniversity()
    },[])

    return (
        <div>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button className={css.menu__navlink}>
                    <NavLink
                        className={css.navlink}
                        to={`/university/${param}`}>
                        Университеты
                    </NavLink>
                </Button>
                <Button
                    color="primary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}>
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu"
                                >
                                    {university.map(univer =>
                                        <MenuItem
                                            key={univer.id} >
                                            <NavLink
                                                className={css.navlink}
                                                to={`/user/${univer.id}`}>
                                                {univer.lastname} {univer.name.substr(0,1)}.{univer.patronymic.substr(0,1)}
                                            </NavLink>
                                        </MenuItem>)}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default class UniversityMenu extends React.Component {
    render() {
        return (
            <UniverMenu/>
        );
    }
}