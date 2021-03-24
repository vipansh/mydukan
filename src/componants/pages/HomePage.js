import React from 'react'
import { CartContaxtProvider } from '../contaxt/CartContaxtProvider'
import { Displaydata } from '../Main/Displaydata'
import { NavBar } from '../navbar/NavBar'
import { Search } from '../Searchbar/Search'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { CheckOut } from '../payment/CheckOut'
import { MobileFooter } from '../Footer/MobileFooter.js'
import { ProductPage } from '../productPage/ProductPage'
import { SearchResult } from './SearchResult'
// import { ProductPage } from '../productPage/ProductPage.js'
export const HomePage = () => {

    return (
        <Router>
            <CartContaxtProvider>
                <Switch>
                    <Route path="/" exact>
                        <NavBar />

                        <Search />
                        <Displaydata />
                    </Route>
                    <Route path="/product/:category/:id" >
                        <ProductPage />
                    </Route>
                    <Route path="/search/:value" >
                        <SearchResult />
                    </Route>
                    <Route path="/bag" >
                        <NavBar />

                        <CheckOut />
                    </Route>
                </Switch>
                <MobileFooter />
            </CartContaxtProvider>
        </Router>
    )
}
