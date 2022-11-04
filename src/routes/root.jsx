import LBFetchProducts from "../components/LBFetchProducts";
import LBFetchNews from "../components/LBFetchNews";
import LBHome from "../components/LBHome";
import LBAbout from "../components/LBAbout";

const { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } = require("react-router-dom");
const { PageLayout } = require("../components/LBPageLayout");

const ErrorComp = () =>{
    return <div>Erro</div>
}


const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />} errorElement={<ErrorComp />}>
            <Route path="paginaInicial" element={<LBHome />} />
            <Route path="produtos" element={<LBFetchProducts />} />
            <Route path="noticias" element={<LBFetchNews />} />
            <Route path="sobre" element={<LBAbout />} />
        </Route>
    )
);

export const RootNavigation = () => {
    return <RouterProvider router={route}/>
}