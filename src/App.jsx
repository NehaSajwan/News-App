import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category/:categoryName" element={<Category/>}/>
      <Route path="*" element={<PageNotFound/>}/>

     </Routes>
    </>
  );
}

export default App;
