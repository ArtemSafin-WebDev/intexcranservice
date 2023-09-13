import documents from "./pages-data/documents";
import home from "./pages-data/home";
import newsDetail from "./pages-data/news-detail";
import pressCenter from "./pages-data/press-center";
import service from "./pages-data/service";

const pagesConfig = {
  ...home,
  ...service,
  ...pressCenter,
  ...newsDetail,
  ...documents,
};

export default pagesConfig;
