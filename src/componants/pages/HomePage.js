import React from 'react'
import { CartContaxtProvider } from '../contaxt/CartContaxtProvider'
import { Footer } from '../Footer/Footer'
import { Displaydata } from '../Main/Displaydata'
import { NavBar } from '../navbar/NavBar'
import { Search } from '../Searchbar/Search'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { CheckOut } from '../payment/CheckOut'
export const HomePage = () => {

    return (
        <Router>
            <CartContaxtProvider>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Search />
                        <Displaydata />
                        <Footer />
                    </Route>
                    <Route path="/bag" component={CheckOut} />
                </Switch>
            </CartContaxtProvider>
        </Router>
    )
}
