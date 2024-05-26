 import { ReactComponent as CheckSVG} from './check.svg';
 import { ReactComponent as DeleteSVG} from './check.svg';

 const iconTypes = {
    "check": <CheckSVG />,
    "delete": <DeleteSVG />,
 };
 
 function Todoicon({type}) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    );
 }

 export {Todoicon};