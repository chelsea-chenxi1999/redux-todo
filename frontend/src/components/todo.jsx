/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import store  from '../store/index';
import './todo.css';


class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.handleNameChange = this.handleNameChange.bind(this) 
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.hanleStoreStateChange = this.hanleStoreStateChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        
        store.subscribe(this.hanleStoreStateChange)
    }

    state = store.getState()
    
    render() { 
        return ( 
            <div>
                <div style={{width:'80%',margin:'20px auto',display:'flex',justifyContent:'center'}}>
                    <input type='text' 
                    value={this.state.inputName} 
                    onChange={this.handleNameChange}/>

                    <input type='text' 
                    value={this.state.inputAge} 
                    onChange={this.handleAgeChange}/>

                    <button type="button" onClick={this.handleBtnClick}>Add Person</button>
                </div>
                <div style={{width:'80%',margin:'0 auto'}}>
                {this.state.list.map((person,index,key) => {
                    return (
                        <div className='container' onClick={this.handleItemDelete.bind(this,index)} key={`${key}-${index}`}>
                            <h1>{person.name}</h1>
                            <p>age:{person.age}</p>
                        </div>
                    );
                })}
                </div>
        </div>
         );
    }

    handleNameChange(e){
       const val = e.target.value
       const action = {
           type:'change_name_value',
           value:val
       }

       store.dispatch(action)
       
    }

    handleAgeChange(e){
       const val = e.target.value
       const action = {
           type:'change_age_value',
           value:val
       }

       store.dispatch(action)
    }

    hanleStoreStateChange(){
        console.log('store changed see what happened')
        console.log(store.getState())
        this.setState(store.getState())
    }

    handleBtnClick(e){
        const action = {
            type:'add_person'
        }
        store.dispatch(action)
    }

    handleItemDelete(index){
        console.log(index)
        const action = {
            type:'delete_person',
            index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;