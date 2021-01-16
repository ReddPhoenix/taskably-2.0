import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import API from '../util/api.js';

// Route components
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard.jsx';
import Inventory from './Inventory/Inventory';
import Techs from './Techs/Techs';
import Customers from './Customers/Customers';
import Orders from './Orders/Orders';
import NewCustomer from './New-Customer/NewCustomer';
import NewTech from './New-Tech/NewTech';
import CustomerPortal from './CustomerPortal/Customer-Portal';
import NewWO from './New-WorkOrder/NewWorkOrder';
import UpdateWO from './Update-WO/UpdateWorkOrder';



class App extends Component {

    state = {
        user: undefined
    }


    // how do I use this to check to see if they can go to the page?? Can I use the role with it (so customers can only log into the customer portal and everyone else can go where they need to)
    getJWT = () => {
        API.getUserJWT(localStorage.getItem('JWT')).then(response => {
            console.log('response:', response);
            this.setState({ user: response.data });
        });
    }
    componentDidMount() {
        this.getJWT();
    }

    render() {
        // console.log('this.props: ', this.props);


        return (


            <BrowserRouter>
                <div>

                    <Route exact path='/' render={() => <Login getJWT={this.getJWT} />} />
                    {
                        this.state.user && (this.state.user.role === 'Customer' ?
                            <Route path='/customer-portal' component={CustomerPortal} />
                            :
                            <>
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/inventory' component={Inventory} />
                                <Route path='/customers' component={Customers} />
                                <Route path='/new-customer' component={NewCustomer} />
                                <Route path='/techs' component={Techs} />
                                <Route path='/new-tech' component={NewTech} />
                                <Route path='/orders' component={Orders} />
                                <Route path='/new-workorder' component={NewWO} />
                                <Route path='/update-workorder/:id' component={UpdateWO} />
                            </>)
                    }

                </div>
            </BrowserRouter>

        );
    }
}



export default App;