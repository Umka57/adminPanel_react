import React, {useState} from "react";
import {
    Button,
    Modal,
    TextField
} from "@material-ui/core";
import css from "../Profile.module.css";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import {useActions} from "../../../Hooks/useActions";

const AddDestinationDataModal: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const {pushDestinations,pushDestinationsValues} = useActions()
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const pushValues = () => {
        pushDestinations()
        pushDestinationsValues()
    };

    const body = (
        <div>
            <h2 id="simple-modal-title">Добавить новое назначение</h2>
            <form id="simple-modal-description">
                <TextField placeholder="Название" label='Направление' variant={'outlined'} required={true}/>
                <TextField placeholder="значение" label='Показатель результативности' variant={'outlined'}
                           required={true}/>
                <TextField label='Верификация значения показателя' placeholder="документ, курирующая служба"
                           variant={'outlined'} required={true}/>
                {/* Сделать выпадающий список для выбора показателя верификации
                <Input name={'dsVerification'} placeholder="документ, курирующая служба" required={true}/>*/}
                <TextField label={'План на 1 квартал'} placeholder="план" variant={'outlined'} required={true}/>
                <TextField label={'Текущее значение показателя'} placeholder="значение" variant={'outlined'}
                           required={true}/>
            </form>
            <Button
                variant="contained"
                color="primary"
                size="medium"
                className={css.button}
                startIcon={<SaveIcon/>}
                onClick={() => { pushValues()}}>
                Сохранить
            </Button>
            <AddDestinationDataModal/>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
