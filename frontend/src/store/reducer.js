const defaultState = {
  inputName:'',
  inputAge:0,
  
  list: [
    { name: "mark", age: 20 }
  ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState,action) => {

    console.log(state,action)
    if(action.type ==='change_name_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputName = action.value
        return newState
    }

    if(action.type ==='change_age_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputAge = action.value
        return newState
    }

    if(action.type ==='add_person'){
        const newState = JSON.parse(JSON.stringify(state))
        console.log(newState);
        let person = {
            name : newState.inputName,
            age : newState.inputAge
        }
        newState.list.push(person)
        console.log(`Added data is：${newState.list}`);
        newState.inputName = ''
        newState.inputAge = 0
        return newState
    }

    if(action.type === 'delete_person'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}
