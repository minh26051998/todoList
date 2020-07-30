import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/checkComplete.svg';

class TodoItem extends Component{

    render(){
        const { item, onClick } = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }
        
        return(
            <div  className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src ={url} width={32} height={32}></img>
                <p >{this.props.item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string.isRequired
    }),
    onclick: PropTypes.func
};

export default TodoItem;