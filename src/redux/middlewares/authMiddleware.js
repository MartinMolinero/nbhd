export const authMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith('auth/')) {
        const { authReducer } = store.getState();
        const userToken = authReducer.userToken;
        localStorage.setItem('userToken', userToken)
    }
    return result;
};