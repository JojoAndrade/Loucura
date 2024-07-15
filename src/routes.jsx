import  { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/index'
import Sobre from "./Pages/Sobre"
import Projetos from './Pages/Projetos'
import Contatos from './Pages/Contatos'
import Page404 from "./Pages/Page404"
import Pagebase from "./Pages/Pagebase"

function AppRoutes(){
    return(

<BrowserRouter>
<Routes>
    <Route path="/" element= {<Pagebase/>}>
    <Route index element= {<Home/>}></Route>
    <Route path="/sobre" element= {<Sobre/>}></Route>
    <Route path="/projetos" element= {<Projetos/>}></Route>
    <Route path="/contatos" element= {<Contatos/>}></Route>
    <Route path="*" element= {<Page404/>}></Route>
    </Route>
</Routes>

</BrowserRouter>


    )
}
export default AppRoutes