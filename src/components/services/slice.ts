import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UsersService } from "./serviceImpl";
import { User } from "./dto";

export type PromiseStatuses = 'idle' | 'loading' | 'successfully' | 'failed'

interface usersState{
    users: User[] ,
    deletedUsers: User[],
    newUsers: User[],
    getUsersStatus: PromiseStatuses,
    editUserStatus: PromiseStatuses,
    createUserStatus: PromiseStatuses,
    deleteUserStatus: PromiseStatuses
}

const initialState  : usersState = {
     users:[],
     deletedUsers:[],
     newUsers:[],
     getUsersStatus:'idle',
     editUserStatus:'idle',
     createUserStatus:'idle',
     deleteUserStatus:'idle'
}

const dataFetcher = new UsersService()

export const getData = createAsyncThunk('users/get', async () => {
    return dataFetcher.getData();
});

export const sendData = createAsyncThunk('users/send', async (userToAdd: User, thunkApi) => {
    try {
        return await dataFetcher.sendData(userToAdd);
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const editData = createAsyncThunk('users/edit', async (userToEdit: User, thunkApi) => {
    try {
        return await dataFetcher.editData(userToEdit);
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const deleteData = createAsyncThunk('users/delete', async (idToDelete: string, thunkApi) => {
    try {
        return await dataFetcher.deleteData(idToDelete);
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        addDeletedUser: (state, action) => {
            state.deletedUsers = [...state.deletedUsers, action.payload];
        },
        resetCreationStatusIdle: (state) => {
            state.createUserStatus = 'idle';
        },
        resetEditUserStatusIdle: (state) => {
            state.editUserStatus = 'idle';
        },
        resetDeleteUserStatus: (state) => {
            state.deleteUserStatus = 'idle';
        },
        resetGetUsersStatus: (state) => {
            state.getUsersStatus = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendData.fulfilled, (state, action) => {
                state.createUserStatus = 'successfully';
                console.log(action.payload);
            })
            .addCase(sendData.rejected, (state) => {
                state.createUserStatus = 'failed';
            })
            .addCase(sendData.pending, (state) => {
                state.createUserStatus = 'loading';
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.getUsersStatus = 'successfully';
                state.users = action.payload;
            })
            .addCase(getData.rejected, (state) => {
                state.getUsersStatus = 'failed';
            })
            .addCase(getData.pending, (state) => {
                state.getUsersStatus = 'loading';
            })
            .addCase(editData.fulfilled, (state) => {
                state.editUserStatus = 'successfully';
            })
            .addCase(editData.rejected, (state) => {
                state.editUserStatus = 'failed';
            })
            .addCase(editData.pending, (state) => {
                state.editUserStatus = 'loading';
            })
            .addCase(deleteData.fulfilled, (state) => {
                state.deleteUserStatus = 'successfully';
            })
            .addCase(deleteData.rejected, (state) => {
                state.deleteUserStatus = 'failed';
            })
            .addCase(deleteData.pending, (state) => {
                state.deleteUserStatus = 'loading';
            });
    }
});

export const selectById = (state: usersState, id:string)=>state.users.find(el=>el.id===id)

export const {addDeletedUser,resetCreationStatusIdle, resetDeleteUserStatus, resetEditUserStatusIdle, resetGetUsersStatus} = dataSlice.actions

export default dataSlice.reducer 