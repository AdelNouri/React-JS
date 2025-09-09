// Actions
const action01 = {type: "counter/increment", payload: 1}

// Actions Creators 
const increment = (number) => {
    return  {
        type: "counter/increment",
        payload: number
    }
}

// Reducers 
(state , action) => newState;

const initialState = {value: 0}

const counterReducer = (state = initialState, action) => {
    if(action.type === "counter/increment") {
        const copyState = {...state}
        return {
            value: copyState.value += 1 
        }
    }
    return state
}