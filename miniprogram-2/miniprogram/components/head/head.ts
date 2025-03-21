// components/head/head.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navbarHeight:0,

  },
  lifetimes: {
    attached() {
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect(); // 获取菜单按钮（右上角小图标）信息
      const navbarHeight = menuButtonInfo.top + menuButtonInfo.height ;  // 自定义导航栏的高度
      this.setData({ navbarHeight });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})