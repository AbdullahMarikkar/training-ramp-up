import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LogInState {
    email: string
    password: string
}
export interface LogIn {
    users: LogInState[]
    successRole: string
    successMessage: string
    successState: boolean
    authState: boolean
}

const initialState: LogIn = {
    users: [],
    successRole: '',
    successMessage: '',
    successState: false,
    authState: false,
}

const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        logInUser: (state, action: PayloadAction<LogInState>) => {
            state.users.push(action.payload)
        },
        logInSuccessfull: (state, action: PayloadAction<string>) => {
            state.successMessage = action.payload
        },
        logInAssignRole: (state, action: PayloadAction<string>) => {
            state.successRole = action.payload
        },
        logInSuccessfulState: (state, action: PayloadAction<boolean>) => {
            state.successState = action.payload
        },
        logOutInvoke: () => {
            console.log('Log Out Invoked')
        },
        setAuthState: (state, action: PayloadAction<boolean>) => {
            state.authState =
                action.payload === state.authState
                    ? state.authState
                    : action.payload
        },
    },
})

export const {
    logInUser,
    logInSuccessfull,
    logInSuccessfulState,
    logInAssignRole,
    logOutInvoke,
    setAuthState,
} = signInSlice.actions
export default signInSlice.reducer
