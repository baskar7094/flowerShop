import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./compoents/layout/layout"
import Home from "./compoents/Home/page"

function App() {

  return (
    <>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}/>
  <Route index element={<Home/>}/>
</Routes>

</BrowserRouter>
    </>
  )

}

export default App
