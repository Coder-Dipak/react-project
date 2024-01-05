import "./App.css";
// import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
// import Categories from './components/categories/Categories';
// import Carousel from './components/carousel/Carousel';
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
// import MyInterceptor from './utils/MyInterceptor';

function App() {
  // MyInterceptor();// fires for every axios api calls
  //this is app component
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Categories/> */}
      {/* <Carousel/> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
