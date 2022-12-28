import Input from "./Input"

const Form = (props) =>{
    return(
        <div>
            <form>
                <span>CARDHOLDER NAME</span>
                <Input handleEvent = {props.handleEvent}/>
                <span>CARD NUMBER</span>
                <Input handleEvent = {props.handleEvent}/>
                <div>
                    <span>EXP. DATE (MM/YY)</span><span>CVC</span>
                    <Input /> <Input /> <Input />
                </div>
            </form>
        </div>
    )
}

export default Form