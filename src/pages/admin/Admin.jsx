import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Klientet from './components/Klientet';
import Profili from './components/Profili';

export default function Admin() {


    return (
        <>
            <Header />
            <div className="admin" >
                <div className="admin-container container">
                    <Switch>
                        <Route exact path="/admin" component={Klientet} />
                        <Route path="/admin/profili" component={Profili} />
                    </Switch>
                </div>
            </div>
        </>
    )
}
