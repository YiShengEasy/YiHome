import RollUpCard from './RollUpCard';
import StripeCard from './StripeCard';
import AntBorderCard from './AntBorderCard';
import EllipseCard from './EllipseCard';
import DeformationCard from './DeformationCard';
import FontAnimateCard from './FontAnimateCard';
import SignCard from './SignCard';

var list = [
  {
    name: 'RollUpCard',
    title: '边框内圆角',
    description: '',
    component: RollUpCard
  },
  {
    name: 'StripeCard',
    title: '条纹背景',
    description: 'CSS 线性渐变,background-size',
    component: StripeCard
  },
  {
    name: 'AntBorderCard',
    title: '蚂蚁行军效果',
    description: 'CSS 线性渐变,background,css动画',
    component: AntBorderCard
  },
  {
    name: 'EllipseCard',
    title: '自适应的椭圆',
    description: 'border-radius的基本用法',
    component: EllipseCard
  },
  {
    name: 'DeformationCard',
    title: '变形裁剪',
    description: 'css变形 transform 图片裁剪',
    component: DeformationCard
  },
  {
    name: 'FontAnimateCard',
    title: '文字跳动',
    description: 'css动画 transform keyframes',
    component: FontAnimateCard
  },
  {
    name: 'SignCard',
    title: 'SVG签名',
    description: 'css动画',
    component: SignCard
  },
]
export default list;
