import CSSPage from "./CSSPage";
import JSPage from "./JSPage";
import {Copyright, CloudCircle} from '@material-ui/icons';

const appRoutes=[
  {
    path:'/csspage',
    name:'CSS动效',
    component:CSSPage,
    icon:Copyright
  },
  {
    path:'/jspage',
    name:'JS进阶',
    component:JSPage,
    icon:CloudCircle
  }
]
export default appRoutes;
