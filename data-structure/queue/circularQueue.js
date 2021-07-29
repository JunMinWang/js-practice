'use strict';

/**
 * 環狀陣列
 * 
 */
class CircularQueue
{
    /**
     * 建構式
     *
     * @return {void}
     */
    constructor()
    {
        // 佇列的大小
        this.maxSize = 3;
        this.queue = [];
        this.currentSize = 0;
        this.front = 0;
        this.rear = -1;
    }

    /**
     * 在正確的佇列位置插入元素
     *
     * @param {element} element  元素
     * @return {boolean} 是否成功
     */
    enqueue(element)
    {
        console.log(`call enqueue(${element})`)
        if(!this.isFull()) {
            this.rear = (++this.rear) % this.maxSize;
            this.queue[this.rear] = element;
            this.currentSize++;
            console.log(`success`);
            return true;
        }
        console.log(`queue is full`)
        return false;
    }

    /**
     * 移除環狀佇列的第一個元素，並回傳
     *
     * @return {boolean} 結果
     */
    dequeue()
    {
        console.log(`call dequque()`)
        if(!this.isEmpty()) {
            this.queue[this.front] = null;
            this.front = (++this.front) % this.maxSize;
            this.currentSize--;
            console.log(`success`);
            return true;
        }
        console.log(`queue is empty`)
        return false
    }

    /**
     * 取得佇列的第一個元素(但對佇列不做任何異動)
     *
     * @return {element} 元素
     */
    getFront()
    {
        if (!this.isEmpty())
        {
            return this.queue[this.front];
        }
        return -1;
    }

    /**
     * 取得佇列的最後一個元素(但對佇列不做任何異動)
     *
     * @return {element} 元素
     */
    getRear() 
    {
        if (!this.isEmpty())
        {
            return this.queue[this.rear];
        }
        return -1;
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
     * 環狀佇列是否放滿了
     *
     * @return {boolean} 是否為滿
     */
    isFull()
    {
        return this.size() === this.maxSize;
    }

    /**
     * 取得佇列的大小
     *
     * @return {integer} 大小
     */
    size()
    {
        return this.currentSize;
    }
}

export default CircularQueue;