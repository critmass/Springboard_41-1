import React from "react"
import { Link } from "react-router-dom"
import "./VendingMachineItem.css"


const VendingMachineItem = (props) => {
    return (<div>
        <h2 className="VendingMachineItem-product-name">{props.productName}</h2>
        <img src={props.imageURL} className="VendingMachineItem-product-image"/>
        <p>
            <span className="VendingMachineItem-product-code">
                PRODUCT CODE# {props.productCode}
            </span>
        </p>
        <Link to="./" className="VendingMachineItem-return">
            Return
        </Link>
    </div>)
}

export default VendingMachineItem