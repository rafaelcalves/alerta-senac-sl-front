import './FireButton.css'

function FireButton(props) {
    const {handleClick} = props;

    return (
        <button class="fireButton" onClick={handleClick}>
            <span>SOS</span>
         
        </button>
    )
}

export default FireButton;