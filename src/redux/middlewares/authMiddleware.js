export const authMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith('auth/')) {
        const { authReducer } = store.getState();
        const userToken = authReducer.userToken;
        if (userToken === null) {
            localStorage.removeItem('userToken');
        } else {
            localStorage.setItem('userToken', userToken);
        }
        console.log(localStorage);
    }
    return result;
};