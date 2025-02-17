import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Jobs from "./Pages/jobs";
import ContactLayout from "./Layout/Contactlayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<ContactLayout />} />
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        <Route path="jobs" element={<Jobs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
