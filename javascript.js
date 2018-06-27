function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function exchange(ev) {
    ev.preventDefault();
    //获取当前放置位置的后一个位置的节点
    let nextElement = ev.target.nextSibling;
    while (nextElement != null && nextElement.nodeType != 1) {
        nextElement = nextElement.nextSibling;
    }

    let data = ev.dataTransfer.getData("Text");
    let dragElement = document.getElementById(data);
    if(nextElement == null){
   		//1.没有下一个兄弟节点，代表是最后一个
	    ev.currentTarget.insertBefore(ev.target, dragElement);
    	ev.currentTarget.appendChild(dragElement);
    }else if(nextElement == dragElement){
    	//2.下一个兄弟节点即是被拖动节点，只需将被拖动节点插入位置节点之前即可
    	ev.currentTarget.insertBefore(dragElement, ev.target);
    }else{
    	//3.正常情况，正常处理
	    //先将当前位置的节点转移到被拖动节点前
	    ev.currentTarget.insertBefore(ev.target, dragElement);
	    //再移动被拖动节点
	    ev.currentTarget.insertBefore(dragElement, nextElement);
    }
}

let div1 = document.getElementById("div1");
div1.addEventListener("dragstart", drag);
div1.addEventListener("dragover", allowDrop);
div1.addEventListener("drop", exchange);