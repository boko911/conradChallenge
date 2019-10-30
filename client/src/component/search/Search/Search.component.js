import React, {Component} from 'react';
import SearchForm from '../SearchForm/SearchForm.component'
import SearchList from '../SearchList/SearchList.component'
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/index'


class Search extends Component {
    render(){
        return (
            <div>
                <SearchForm></SearchForm>
                <SearchList></SearchList>
            </div>
        )}
}


const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(Search)