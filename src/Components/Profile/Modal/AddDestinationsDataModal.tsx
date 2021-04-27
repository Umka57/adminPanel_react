import React, {useState} from "react";
import {
    Button,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import css from "../Profile.module.css";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import {useActions} from "../../../Hooks/useActions";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur
    }
}

/*const useValidation = (value,validations) => {
    const [isEmpty,setEmpty] = useState(true)

    useEffect(()=>{
        for (const validation in validations) {
            switch(validation){
                case '':
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    },[value])
}*/
const AddDestinationDataModal: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const [] = useActions()
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                onClick={}>
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
const DestinationDataTable: React.FC = () => {
    let tableRows = []
    const dsName = useInput('')
    const dsPerformanceIndicator = useInput('')
    const dsVerificationIndicatorValue = useInput('')
    const dsPlan = useInput('')
    const dsPresentValue = useInput('')

    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Направление</TableCell>
                        <TableCell align="right">Показатель результативности</TableCell>
                        <TableCell align="right">Верификация значения показателя</TableCell>
                        <TableCell align="right">План на 1 квартал</TableCell>
                        <TableCell align="right">Текущее значение показателя</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        {/* Сделать выпадающий список для выбора показателя верификации
                                    <TableCell align="right"><Input name={'dsVerification'} placeholder="документ, курирующая служба" inputProps={{ 'aria-label': 'description' }} required={true}/></TableCell>*/}
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button
                variant="contained"
                color="primary"
                size="medium"
                className={css.button}
                startIcon={<AddIcon/>}>
                onClick={}
            </Button>
        </TableContainer>
    );
}
