let initialLogin = {
    status:false,
    loginRouteConfig:{
        path:'/login',
        name:Login
    }
}

const loginReducer = (store = initialLogin,action) => {
    switch (action.type) {
        case 'Login':{
            return{
                status:true,
                LoginRouteConfig:{
                    path:'/admin',
                    name:'Dashboard'
                },
                user:action.payload
            }
        }
        case 'Logout':{
            return{
                status:true,
                LoginRouteConfig:{
                    path:'/login',
                    name:'Login'
                },
                user:action.payload
            }
        }
        default:{
            return store
        }  
    }
}

export{
    loginReducer
}