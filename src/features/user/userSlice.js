import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers: {
            onUserAdd: (state, action) => {
                state = {...state, [action.payload.email]: action.payload }
                return state;
            },

            onUserDelete: (state, action) => {
                const updatedState = {}
                for(const key in state){
                    if(key !== action.payload){
                        updatedState[key] = state[key]
                    }
                }
                state = {...updatedState};
                return state;
              },
        }
    }
)

export const { onUserAdd, onUserDelete } = userSlice.actions;
const usersReducer = userSlice.reducer;
export default usersReducer;