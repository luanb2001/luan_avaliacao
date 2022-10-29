import FetchProducts from "../components/FetchProducts";
import FetchNews from "../components/FetchNews";

const { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } = require("react-router-dom");
const { PageLayout } = require("../components/PageLayout");

const ErrorComp = () =>{
    return <div>Erro</div>
}

const HomeScreen = () =>{
    return <div style={{ height: "300px"}}>Home Screen</div>
}

const SobreScreen = () =>{
    return <div style={{ height: "300px"}}>Sobre Screen</div>
}

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />} errorElement={<ErrorComp />}>
            <Route index path="/" element={<HomeScreen />}></Route>
            <Route path="produtos" element={<FetchProducts />} />
            <Route path="noticias" element={<FetchNews />} />
        </Route>
    )
);

export const RootNavigation = () => {
    return <RouterProvider router={route}/>
}