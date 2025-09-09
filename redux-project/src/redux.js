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

// بسته به پارامترهای دریافتی باید استیت جدید رو محاسبه کنن
// به هیچ عنوان نباید استیت فعلی رو ویرایش یا تغییر بدن
// نباید منطق ناهمزماین و محاسبه تصادفی انجام بدن یا هرگونه عواض جانبی دیگر

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