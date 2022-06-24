const INITIAL_STATE = {
    userName: '_____',
    email: 'abc@gmail.com',
    userApi: '',
};

export default (state = INITIAL_STATE, action) => {

    if (action.type == 'transform') {
        return { ...state, userName: action.userName };

    } else if (action.type == 'transformApi') {
        return { ...state, userApi: action.userApi }
    }

    return state;
};