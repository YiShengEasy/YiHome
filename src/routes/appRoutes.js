import CSSPage from "./CSSPage";
import JSPage from "./JSPage";

const appRoutes=[
  {
    path:'/csspage',
    name:'CSS动效',
    component:CSSPage
  },
  {
    path:'/jspage',
    name:'JS进阶',
    component:JSPage
  }
]
export default appRoutes;
