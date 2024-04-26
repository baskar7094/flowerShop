import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./compoents/layout/layout"
import Home from "./compoents/Home/page"
import About from "./compoents/about/page"
import Price from "./compoents/price/page"
import Contact from "./compoents/contact/page"
import Subabout from "./compoents/sub-compoents/about"
import Subshop from "./compoents/sub-compoents/shop"
import Subconact from "./compoents/sub-compoents/contact"
import Nopage from "./compoents/sub-compoents/Nopage"

function App() {

  return (
    <>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}/>
  <Route index element={<Home/>}/>
  <Route path="about" element={<Subabout/>}/>
  <Route path="shop" element={<Subshop/>}/>
  <Route path="contact" element={<Subconact/>}/>
  <Route path="cart"  />
  <Route path="*" element={<Nopage/>}/>
</Routes>

</BrowserRouter>
    </>
  )

}

export default App
