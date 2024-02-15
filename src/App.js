




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import Products from "./Products";
// import Contact from "./Contact";
// import Cart from "./Cart";
// import SingleProduct from "./SingleProduct";
// import ErrorPage from "./ErrorPage";
// import SellPage from "./SellPage"; // Import the SellPage component
// import { GlobalStyle } from "./GlobalStyle";
// import { ThemeProvider } from "styled-components";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const App = () => {
//   const theme = {
//     colors: {
//       heading: "rgb(24 24 29)",
//       text: "rgba(29 ,29, 29, .8)",
//       white: "#fff",
//       black: " #212529",
//       helper: "#8490ff",

//       bg: "#F6F8FA",
//       footer_bg: "#0a1435",
//       btn: "rgb(98 84 243)",
//       border: "rgba(98, 84, 243, 0.5)",
//       hr: "#ffffff",
//       gradient:
//         "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
//       shadow:
//         "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
//       shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     },
//     media: {
//       mobile: "768px",
//       tab: "998px",
//     },
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <GlobalStyle />
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/singleproduct/:id" element={<SingleProduct />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/sell" element={<SellPage />} /> {/* Add the SellPage route */}
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
// import SingleProduct from "./SingleProduct";
import SellPage from "./SellPage"; 
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./Productpage";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(0, 56, 28)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#00cc66",

      bg: "#CFE0D6",
      footer_bg: "#00381C",
      btn: "#00cc66",
      border: "rgba(0, 219, 110, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(0, 204, 102) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(228, 250, 231, 0.02) 0px 1px 3px 0px,rgba(223, 245, 226, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
          <Route path="/sell" element={<SellPage />} /> {/* Add the SellPage route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;





