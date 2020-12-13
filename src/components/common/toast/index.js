import Toast from './Toast'

const toastPlugin = {}

toastPlugin.install = function (Vue) {
  // 创建一个组件构造器
  const toastConstructor = Vue.extend(Toast);

  // 根据创建出的组件构造器，创建出一个组件对象
  const toast = new toastConstructor();

  // 将组件对象挂载到某个元素上
  toast.$mount(document.createElement('div'));

  // 将这个元素添加到 body 中（toast.$el => div）
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default toastPlugin