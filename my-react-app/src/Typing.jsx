import React, {useState} from "react";

function Typing(){

    const [name,setName] = useState("Guest");
    const [quant,setQuant] = useState();
    const [comment, setComment]= useState();
const [pay,setPay] = useState();
    const [shipping,setShipping] = useState();

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantChange(event){
        setQuant(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePayChange(event){
        setPay(event.target.value);
    }

    function handleShippingChage(event){
        setShipping(event.target.value)
    }

    return (<div>
            <p>Name: {name}</p>
            <input value= {name} onChange={handleNameChange} />
            
            <p>Quantity: {quant}</p>
            <input value={quant} onChange={handleQuantChange} type="number" />
            
            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleCommentChange}placeholder="Enter delivery instruction"></textarea>
            
           <p>Payment: {pay}</p>
            <p>Shipping: {shipping}</p>
            <select value={pay} onChange={handlePayChange}>
                <option value="">Select an option:</option>
                <option value="Visa">Visa</option>
                <option value="MatsterCard">MatsterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>

            
            <p>Shipping: {shipping}</p>
            <label>
                <input type="radio" value="Pick Up" 
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChage}/>
                Pick up
            </label><br />
            <label>
                <input type="radio" value="Delivery" 
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChage}/>
                Delivery
            </label>
        </div>);
}

export default Typing