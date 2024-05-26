import React from "react";
import  {Todoicon} from './Todoicon';

function CompleteIcon({ completed, onComplete }) {
    return (
        <Todoicon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };