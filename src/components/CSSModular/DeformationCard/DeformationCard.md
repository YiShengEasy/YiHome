/*方式一 多一层div  且不能试用与非正方形*/
.diamond {
	width: 100px;
	height: 100px;
	transform: rotate(45deg);
    overflow: hidden;
    margin:21px; /*左右平起来更好根号2*/
}

.diamond img {
	max-width: 100%;
	transform: rotate(-45deg) scale(1.42);
	z-index: -1;
	position: relative;
}

/* 方法二 使用clip-path 裁剪，polygon 参数指定需要连接的坐标点 （可画其他多边形）*/
img {
	max-width: 120px;
	margin: 0 20px;
	-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	transition: 1s clip-path;
}

img:hover {
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}