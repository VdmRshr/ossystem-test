import React from 'react';
import Container from "@material-ui/core/Container";
import {
    Switch,
    Route
} from "react-router-dom";
import Header from "../Header";
import Catalog from "../Catalog";
import AddProduct from "../AddProductPage";
import GeneralInformation from "../GeneralInformation/GeneralInformation";
import NoticePage from "../NoticePage";

const containerStyles = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
}
const mainStyles = {
    flex: 1
}

function App() {
    return (
        <Container style={containerStyles}>
            <Header/>
            <main style={mainStyles}>
                <Switch>
                    <Route path='/'
                           component={Catalog}
                           exact/>
                    <Route path='/add-product'
                           component={AddProduct}
                           exact/>
                    <Route path='/notice-page'
                           component={NoticePage}
                           exact/>

                </Switch>
            </main>
            <GeneralInformation/>
        </Container>
    );
}

export default App;
