import "./Slide_HomePage/styled";
import SimpleSlider from "./Slide_HomePage/SlideView";
import Menu from "../../components/Menu/index";
import CategoryBanner from "./../../containers/Homepage/Category_HomePage/Category";
import { Product } from "./Product_HomePage/Product";
import { SlideMenu } from "../../components/Menu/slideMenu/SlideMenu";
import Layout from "../../components/Layout";


function HomePage() {
  return (
    <Layout>
      <Menu />
      <SlideMenu />
      <SimpleSlider />
      <CategoryBanner />
      <Product />
    </Layout>
  );
}

export default HomePage;
