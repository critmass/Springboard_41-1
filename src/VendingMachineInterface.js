import { NavLink } from "react-router-dom";

import "./VendingMachineInterface.css"

const VendingMachineInterface = ({productList}) => {
    return (<ul className="VendingMachineInterface-product-list">{productList.map(item => {
        return (<li className="VendingMachineInterface-product-list-item">
            <span className="VendingMachineInterface-product">
                < NavLink
                    exact to={`/${item.product_code}`}
                    className="VendingMachineInterface-product-link"
                >
                    {item.product_name}
                </NavLink>
            </span>
        </li>)
    })}</ul>)

}

export default VendingMachineInterface