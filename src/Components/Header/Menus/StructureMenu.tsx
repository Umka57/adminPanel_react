import React, {useEffect} from "react";
import {useTypedSelector} from "../../../Hooks/useTypeSelector";
import {useActions} from "../../../Hooks/useActions";
import Button from "@material-ui/core/Button";
import css from "../Header.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";
import {ReactComponent} from "*.svg";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";

const StrMenu: React.FC = () => {
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

    const {structure,loading,error} = useTypedSelector(state => state.structure)
    const {fetchStructure} = useActions()

    useEffect(()=> {
        if(!structure.length){
            fetchStructure()
        }
    },[])

    return(
        <div>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button className={css.menu__navlink}>
                    <NavLink
                        className={css.navlink}
                        to={`/user/${0}`}>
                        Структуры
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
                                    {structure.map(struct =>
                                        <MenuItem
                                            key={struct.id} >
                                            <NavLink
                                                className={css.navlink}
                                                to={`/user/${struct.id}`}>
                                                {struct.lastname} {struct.name.substr(0,1)}.{struct.patronymic.substr(0,1)}
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

export default class StructureMenu extends React.Component {
    render() {
        return (
            <StrMenu/>
        );
    }
}