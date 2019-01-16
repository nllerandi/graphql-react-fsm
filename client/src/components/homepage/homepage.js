import React, {Component} from "react";

// Components
import SidebarNav from '../sidebar-nav/sidebar-nav'
import QuestionsList from '../questions-list/questions-list'

class Homepage extends Component {
    render() {
        return (
            <div className='Homepage'>
                <div className='container'>
                    <div className='row'>
                        <SidebarNav/>
                        <QuestionsList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;