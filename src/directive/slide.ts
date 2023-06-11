// 平滑移动自定义指令
const distance = 150;  // 移动距离
const duration = 1000; // 触发时间

const animationMap = new WeakMap();
const ob = new IntersectionObserver((entries) => {
  for (const item of entries) {
    if (item.isIntersecting) { // 判断是否进入可视区域
      const animation = animationMap.get(item.target);
      animation.play();
      ob.unobserve(item.target); // 取消监听
    }
  }
})

function isBelowViewport(el:any) {  // 判断是否在可视区域下方,只关注可视区域下方的元素
  const rect = el.getBoundingClientRect();
  return rect.top > window.innerHeight;
} 


export default {
  mounted(el:any) {
    if(!isBelowViewport(el)) { 
      return;
    }
    const animation = el.animate(
      [{ 
        transform: `translateY(${distance}px)`,
        opacity: 0
      },
      {
        transform: 'translateY(0)',
        opacity: 1
      }],
      {
        duration,
        easing: 'ease'
      }
    )
    animation.pause(); // 暂停动画
    animationMap.set(el, animation); // 保存动画对象
    ob.observe(el); // 监听元素
  },
  unmounted(el:any) {
    ob.unobserve(el);
  }
}