'use strict';

class Queue {

    /**
     * 建構式
     *
     * @return {void}
     */
    constructor() {
        this.queue = []
    }

    /**
     * 向佇列尾端新增一個元素
     *
     * @param {element} element 元素
     * @return {void}
     */
    enqueue(element) {
        this.queue.push(element)
    }

    /**
     * 移除佇列的第一個元素，並回傳
     *
     * @return {element} 元素
     */
    dequeue() {
        return this.queue.shift();
    }

    /**
     * 取得佇列的第一個元素(但對佇列不做任何異動)
     *
     * @return {element} 元素
     */
    front() {
        if(!this.isEmpty()) {
            return this.queue[0];
        }
    }

    /**
     * 佇列是否為空
     *
     * @return {boolean} 是否為空
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * 取得佇列的大小
     *
     * @return {integer} 大小
     */
    size() {
        return this.queue.length;
    }
}

export default Queue;