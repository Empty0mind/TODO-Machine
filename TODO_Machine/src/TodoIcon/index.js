import { ReactComponent as CloseSVG } from './close-icon.svg';
import { ReactComponent as CheckSVG } from "./check-icon.svg";
import "./TodoIcon.css"

const iconTypes = {
    "delete": (color) => <CloseSVG className='Icon-svg' fill={color}/>,
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`}
        onClick={onClick}>
            
        {iconTypes[type](color)}
        </span>

    )
}

export { TodoIcon }