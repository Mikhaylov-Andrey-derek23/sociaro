export default function avtorisation( state=[{avtorization : false}], action ){
    if( action.type == 'AVTORIZATION' ){
        if(action.data.login === "test" && action.data.pass === "test"){
            const MyState = state;
            MyState[0].avtorization = true;
            console.log(MyState)
            return [...MyState]
        }
       
    }

    return state;
}