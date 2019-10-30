import React, {Component} from 'react';
import NavBar from '../../layout/Navbar/Navbar.component'
import BookmarkList from '../BookmarkList/BookmarkList.component'
import Footer from '../../layout/Footer/Footer.component'
import styles from '../../layout/Landing/Landing.module.css'
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/index'


class Bookmark extends Component{
    render(){
        return (
                <div className={styles.container}>
                    <NavBar/>
                    <BookmarkList/>
                    <Footer/>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(Bookmark)