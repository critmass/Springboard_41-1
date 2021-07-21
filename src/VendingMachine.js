import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import "./VendingMachine.css"

import VendingMachineInterface from "./VendingMachineInterface"
import VendingMachineItem from "./VendingMachineItem"

import vMContents from "./vMContents"

const VendingMachine = ({vendingMachineContentList = vMContents}) => {

    return (
        <div className="VendingMachine">
            <h1 className="VendingMachine-title">React Vending Machine</h1>
            <BrowserRouter>
                <VendingMachineInterface productList={vendingMachineContentList} />
                {vendingMachineContentList.map( item => {
                    return (
                        <Route exact path={`/${item.product_code}`}>
                            <VendingMachineItem
                                key = {item.product_code}
                                productName={item.product_name}
                                productCode = {item.product_code}
                                imageURL={item.product_img}
                            />
                        </Route>
                    )
                })}
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine