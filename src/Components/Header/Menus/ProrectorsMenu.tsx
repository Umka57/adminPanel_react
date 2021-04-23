import React, {useEffect} from "react";
import {useTypedSelector} from "../../../Hooks/useTypeSelector";
import {useActions} from "../../../Hooks/useActions";
import Button from "@material-ui/core/Button";
import css from "../Header.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";

const ProsMenu: React.FC = () => {

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

    const {prorectors,loading,error} = useTypedSelector(state => state.prorectors)
    const {fetchProrectors} = useActions()

    useEffect(()=> {
        fetchProrectors()
    },[])


    return (
        <div>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button className={css.menu__navlink}>
                    <NavLink
                        className={css.navlink}
                        to={`/user/${0}`}>
                        Проректора
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
                                    {prorectors.map(prorector =>
                                        <MenuItem
                                            key={prorector.id} >
                                            <NavLink
                                                className={css.navlink}
                                                to={`/user/${prorector.id}`}>
                                                {prorector.lastname} {prorector.name.substr(0,1)}.{prorector.patronymic.substr(0,1)}
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

export default class ProrectorsMenu extends React.Component {
    render() {
        return (
            <ProsMenu/>
        );
    }
}