import React , { Component }from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/index'
import styles from '../SearchList/SearchList.module.css'
import bookmark_icon from '../../../assets/img/favorite.png'



class SearchList extends Component {
    render(){
        if(this.props.show_search_list){
            return (
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Stars</th>
                        <th>URL</th>
                        <th className={styles.empty}></th>
                    </tr>
                    {this.props.data.map(
                            item => 
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.owner.login}</td>
                                <td>{item.stargazers_count}</td>
                                <td>
                                    <a className={styles.a} 
                                        href={item.html_url}  
                                        rel="noopener noreferrer" 
                                        target="_blank">Link</a></td>
                                <td className={styles.empty}>
                                    <input 
                                        type='image' 
                                        src={bookmark_icon} 
                                        className={styles.inputSearchList}
                                        onClick={ () => { this.props.addBookmark_react(item); this.props.addBookmark({item}); this.props.getBookmarks({item})}}/>
                                </td>
                            </tr>
                            
                    )}
                    </tbody>
                </table>
            )
                    
        }
        else
            return null;
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(SearchList)
