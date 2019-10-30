import React , { Component }from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/index'
import styles from '../SearchForm/SearchForm.module.css'


class SearchForm extends Component {

    handleSubmit(event)  {
        let input = this.refs.input;
        event.preventDefault();
        if (!input.value.trim()) {
            return
        }
        this.props.showList();
        this.props.getRepos(input.value);
        input.value = ''
    }

    render(){
    return (
        <div>
        <form onSubmit={this.handleSubmit.bind(this)} className={styles.container}>
            <input  className={styles.inputSearchForm}
                    type="text"
                    ref="input"
                    placeholder="Which repo are you looking for today ?"
                    required
                    />
            <button className={styles.button} type="submit">GET REPOS !</button>
        </form>
        </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return state
};



export default connect(mapStateToProps, actionCreators)(SearchForm)