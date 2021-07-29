'use strict';

class QueueElement {
    /**
     * 建構式
     * 
     * @param {string}  element  元素值
     * @param {integer} priority 優先度(數字越小，優先度越高)
     * @return {void}
     */
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}

/**
 * 最小優先佇列，優先度值越小，優先度越高
 * 
 */
class PriorityQueue {
    /**
     * 建構式
     *
     * @return {void}
     */
    constructor()
    {
        this.queue = []
    }

    /**
     * 在正確的佇列位置插入元素(依照優先度排序)
     *
     * @param {QueueElement} element  元素
     * @param {integer}      priority 順序
     * @return {void}
     */
    enqueue(element, priority)
    {
        let queueElement = new QueueElement(element, priority)

        if(this.isEmpty()) {
            this.queue.push(queueElement);
        } else {
            let added = false;
            for(let i = 0 ; i < this.size() ; i++) {  
                if(queueElement.priority < this.queue[i].priority) {
                    added = true;
                    this.queue.splice(i, 0, queueElement);
                    break;
                }
            }

            if (!added) {
                this.queue.push(queueElement);
            }
        }
    }

    /**
     * 移除佇列的第一個元素，並回傳
     *
     * @return {QueueElement} 元素
     */
    dequeue()
    {
        return this.queue.shift();
    }

    /**
     * 取得佇列的第一個元素(但對佇列不做任何異動)
     *
     * @return {QueueElement} 元素
     */
    front()
    {
        if (!this.isEmpty())
        {
            return this.queue[0];
        }
    }

    /**
     * 佇列是否為空
     *
     * @return {boolean} 是否為空
     */
    isEmpty()
    {
        return this.size() === 0;
    }

    /**
     * 取得佇列的大小
     *
     * @return {integer} 大小
     */
    size()
    {
        return this.queue.length;
    }
}

export default PriorityQueue;