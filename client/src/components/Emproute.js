import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function EProtectedRoute ({empauth: empauth, component: Component, ...rest}){

    return ( <Route {...rest} render={(props)=>{
                if(empauth){
                        return <Component/>
                }else{
                        return <Redirect to={{pathname: "./", state: {from: props.location }}}/>
                }
    }}
    />
    );
}


    export default EProtectedRoute;