@radioHeight: 20px;
.stripe {
  height: calc(100% - @radioHeight);
  &-horizontal {
    background: linear-gradient(#fb3 50%, #58a 0);
    background-size: 100% 30px;
  }
  &-vertical {
    background: linear-gradient(to right, #fb3 50%, #58a 0);
    background-size: 30px 100%;
  }
  &-Declining {
    background: linear-gradient(45deg, #fb3 25%, #58a 0,
    #58a 50%, #fb3 0, #fb3 75%, #58a 0);
    background-size: 42px 42px;
  }
}
