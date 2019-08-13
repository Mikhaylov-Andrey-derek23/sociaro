export default function data( state=[], action ){
    if( action.type == 'GET_DATA' ){
        return [...state, ...action.data];
    }

    return state;
}