import CSSPage from "./CSSPage";
import ReactPage from "./ReactPage";
import {Copyright, CloudCircle} from '@material-ui/icons';

const appRoutes=[
  {
    path:'/csspage',
    name:'CSS动效',
    component:CSSPage,
    icon:Copyright
  },
  {
    path:'/reactPage',
    name:'JS进阶',
    component:ReactPage,
    icon:CloudCircle
  }
]
export default appRoutes;
