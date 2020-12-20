import React, {FC} from 'react';
import './InputError.css';

type Props = {
    error: string | null
    extent: boolean
}

const InputError:FC<Props> = ({ error ,extent}) => {
    const clazz = extent ? 'input-error input-error__extent' : 'input-error input-error__line'

    return  error ? <div className={clazz}>{error}</div> : <div/>
}

export default InputError;
