import RollUpCard from './RollUpCard';
import StripeCard from './StripeCard';
import AntBorderCard from './AntBorderCard';

var list = [
  {
    name: 'RollUpCard',
    title:'边框内圆角',
    description:'',
    component:RollUpCard
  },
  {
    name: 'StripeCard',
    title:'条纹背景',
    description:'CSS 线性渐变,background-size',
    component:StripeCard
  },
  {
    name: 'AntBorderCard',
    title:'蚂蚁行军效果',
    description:'CSS 线性渐变,background,css动画',
    component:AntBorderCard
  },
]
export default list;
