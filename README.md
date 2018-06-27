# drag-to-exchange

HTML-CSS-JS

其中有几个重要的点：

1. dragable=true，要设置好，不然是默认不允许被拖动的

2. 使用事件委托，实现对所有拖动操作的监听

3. 注意区分dragover与dragend两个事件：
	dragover是悬浮，我一开始理解成“拖动结束”了；dragend才是拖动结束
	而且dragend在drop之后执行

4. 至于dragover需要使用preventDefault的原因是
	默认时间是不触发drop事件，不过可以使用dragend代替
	需要注意的是dragend与drop的差别：
		-- dragend是指拖动结束，所以触发的情况是结束拖动的那一刻（即鼠标左键弹起的那一刻）
		-- drop是指目标放置，所以触发的情况是drop事件监听节点上有东西放下时候
		-- 从上面两个的区别可以看出，dragend是无论拖放到何处都触发的，event.target要区分一下；而drop就在当前事件监听节点上放置才会触发的，所以event.target有个安全范围

