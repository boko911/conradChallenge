import React, {Component} from 'react'
import styles from '../BookmarkList/BookmarkList.module.css'
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/index'
import delete_icon from '../../../assets/img/delete.png'

class BookmarkList extends Component {
    render(){
            console.log(this.props.bookmarks_react)
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
                    {this.props.bookmarks_react.map(
                            (bookmark, index) => 
                            <tr delete={this.props.delete} key={bookmark.id}>
                                <td>{bookmark.name}</td>
                                <td>{bookmark.owner.login}</td>
                                <td>{bookmark.stargazers_count}</td>
                                <td>
                                    <a className={styles.a} 
                                        href={bookmark.html_url}  
                                        rel="noopener noreferrer" 
                                        target="_blank">Link</a></td>
                                <td className={styles.empty}>
                                    <input 
                                        type='image' 
                                        src={delete_icon} 
                                        className={styles.inputSearchList}
                                        onClick={() => {
                                            console.log(bookmark.index);
                                            this.props.deleteBookmark_react(bookmark.id); 
                                            this.props.deleteBookmark(bookmark.id); 
                                            }}/>
                                </td>
                            </tr>
                            
                    )}
                    </tbody>
                </table>
            )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(BookmarkList)