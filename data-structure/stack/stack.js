'use strict';

class Stack {

    /**
     * 建構式
     *
     * @return {void}
     */
    constructor()
    {
        this.items = [];
    }

    /**
     * 增加一個元素到堆疊中
     *
     * @param {element} element 元素
     * @return {void}
     */
    push (element)
    {
        this.items.push(element)
    }

    /**
     * 移除堆疊中第一個元素，並回傳
     *
     * @return {void}
     */
    pop () {
        return this.items.pop();
    }

    /**
     * 取得堆疊中第一個元素，但不對堆疊做任何修改
     *
     * @return {void}
     */
    top () {
        return this.items[this.size() - 1];
    }

    /**
     * 堆疊是否為空
     *
     * @return {boolean} 是否為空
     */
    isEmpty ()
    {
        return this.items.length === 0;
    }

    /**
     * 重設堆積
     *
     * @return {void}
     */
    clear () {
        this.items = [];
    }

    /**
     * 取得堆疊的大小
     *
     * @return {integer} 大小
     */
    size () {
        return this.items.length;
    }
}

export default Stack;