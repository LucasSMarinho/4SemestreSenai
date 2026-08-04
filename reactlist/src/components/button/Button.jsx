import './Button.css'

function Button(props) {

    return (
    <button className={`${props.buttonClass}Button`} type={props.buttonType} onClick={() => props.buttonFunc()} style={{backgroundColor: props.buttonColor, display: props.buttonDisplay}}> {`${props.buttonText}`} </button>
    )
}

export default Button

