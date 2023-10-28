import AdminAddBrand from './Pages/Admin/AdminAddBrand';
import AdminAddCategory from './Pages/Admin/AdminAddCategory';
import AdminAddProducts from './Pages/Admin/AdminAddProducts';
import AdminAddSubCategory from './Pages/Admin/AdminAddSubCategory';
import AdminAllOrders from './Pages/Admin/AdminAllOrders';
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage';
import AdminOrderDetails from './Pages/Admin/AdminOrderDetails';
import AllBrandPage from './Pages/AllBrand/AllBrandPage';
import AllCategoryPage from './Pages/AllCategory/AllCategoryPage';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import CartPage from './Pages/Cart/CartPage';
import HomePage from './Pages/Home/HomePage';
import PageNotFound from './Pages/NotFound/PageNotFound';
import ProductsPage from './Pages/Products/ProductsPage';
import ProdutDetails from './Pages/Products/ProdutDetails';
import UserAddAdressPage from './Pages/User/UserAddAdressPage';
import UserAllAdressPage from './Pages/User/UserAllAdressPage';
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage';
import UserFavProductsPage from './Pages/User/UserFavProductsPage';
import UserProfilePage from './Pages/User/UserProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './sass/main.css';
import AdminEditProdcutPage from './Pages/Admin/AdminEditProdcutPage';
import ForgetPasswordPage from './Pages/Auth/ForgetPasswordPage';
import ReseteCodePage from './Pages/Auth/ReseteCodePage';
import ResetePasswordPage from './Pages/Auth/ResetePasswordPage';

function App() {
  return (
    <div className="font">
        <BrowserRouter>
          <Routes>
              <Route path='*' element={<PageNotFound />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/allCategory' element={<AllCategoryPage />} />
              <Route path='/allBrand' element={<AllBrandPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path='/products/:id' element={<ProdutDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
              <Route path="/auth/resete-code" element={<ReseteCodePage />} />
              <Route path="/auth/resete-password" element={<ResetePasswordPage />} />
            {/*admin*/}
            <Route path="/admin">
              <Route path="/admin/addProducts" element={<AdminAddProducts />} />
              <Route path="/admin/allProducts" element={<AdminAllProductsPage />} />
              <Route path="/admin/allOrders" element={<AdminAllOrders />} />
              <Route path="/admin/order/1432" element={<AdminOrderDetails />} />
              <Route path="/admin/addBrand" element={<AdminAddBrand />} />
              <Route path="/admin/addCategory" element={<AdminAddCategory />} />
              <Route path="/admin/addSubCategory" element={<AdminAddSubCategory />} />
              <Route path="/admin/editProduct/:id" element={<AdminEditProdcutPage />} />
            </Route>
            {/*user*/}
              <Route path="/user/allOrders" element={<UserAllOrdersPage />} />
              <Route path="/user/favProducts" element={<UserFavProductsPage />} />
              <Route path="/user/allAdress" element={<UserAllAdressPage />} />
              <Route path="/user/addAdress" element={<UserAddAdressPage />} />
              <Route path="/user/profile" element={<UserProfilePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;