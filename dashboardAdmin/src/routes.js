import Home from "./Pages/Home/Home"
import UserList from "./Pages/Users/UserList"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product"

let routes=[
    {path:'/',element:<Home/>},
    {path:'/users',element:<UserList/>},
    {path:'/newUser',element:<NewUser/>},
    {path:'/products',element:<Products/>},
    {path:'/product/:productId',element:<Product/>},
]

export default routes