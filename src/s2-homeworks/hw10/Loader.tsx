import s from './Loader.module.css'
import {CircularProgress} from '@mui/material';

export const Loader = () => {
    return (
        <div className={s.loader}>
            <span className={s.line}>Loading...</span>
{/*            <CircularProgress />*/}
        </div>

    )
}