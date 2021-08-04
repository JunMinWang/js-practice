'use strict'

/**
 * 鍊結串列的節點
 * 
 */
class Node 
{
    /**
     * 建構式
     *
     * @param {string} element 元素
     * @return {void}
     */
    constructor(element) 
    {
        this.prev = null;
        this.element = element;
        this.next = null;
    }
}

class doublyLinkedList
{
    /**
     * 建構式
     *
     * @return {void}
     */
    constructor()
    {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * 向串列尾端新增一個節點
     *
     * @param {element} element 節點
     * @return {void}
     */
    append(element)
    {
        let node = new Node(element);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let tail = this.tail;
            tail.next = node;
            node.prev = tail;
            this.tail = node;
        }
        this.length++;

        return true;
    }

    /**
     * 由串列指定位置新增一個節點
     *
     * @param {integer} position 位置
     * @param {element} element  元素
     * @return {boolean} 新增結果
     */
    insert(position, element)
    {
        if(position >= 0 && position <= this.length) {
            let node = new Node(element);
            let current = this.head;

            if(position === 0) {
                if(!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }                
            } else {
                let index = 0;
                let previos = null;

                while(index++ < position) {
                    previos = curret;
                    current = current.next
                }

                previos.next = node;
                current.prev = node;
                node.prev = previos;
                node.next = current;
            }

            this.length++;
            return true;
        }
        return false;
    }

    /**
     * 由串列指定位置刪除一個節點
     *
     * @param {integer} position 位置
     * @return {element} 移除的元素值
     */
    removeAt(position)
    {
        if(position >= 0 && position < this.length)
        {
            let current = this.head;

            if(position === 0) {
                this.head = current.next;

                if(this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if(position === this.length - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                let previous = null;
                let index = 0;

                while (index++ < current)
                {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }

            this.length--;
            return current.element;
        }
        return null;
    }

    /**
     * 此串列是否為空
     *
     * @return {boolean} 是否為空
     */
    isEmpty()
    {
        return this.length === 0;
    }

    /**
     * 此串列包含的元素個數
     *
     * @return {integer} 串列元素個數
     */
    size()
    {
        return this.length;
    }

    /**
     * 取得第一個節點
     *
     * @return {Node} 第一個節點
     */
    getHead()
    {
        return this.head;
    }

    /**
     * 取得最後一個節點
     *
     * @return {Node} 最後一個節點
     */
    getTail()
    {
        return this.tail;
    }
}