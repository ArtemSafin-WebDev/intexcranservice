import documents from "./pages-data/documents";
import home from "./pages-data/home";
import newsDetail from "./pages-data/news-detail";
import pressCenter from "./pages-data/press-center";
import service from "./pages-data/service";
import career from "./pages-data/career";
import contacts from "./pages-data/contacts";
import product from "./pages-data/product";
import categories from "./pages-data/categories";

const pagesConfig = {
  ...home,
  ...service,
  ...pressCenter,
  ...newsDetail,
  ...documents,
  ...career,
  ...contacts,
  ...product,
  ...categories,
};

export default pagesConfig;
