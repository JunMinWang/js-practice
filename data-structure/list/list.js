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
        this.element = element;
        this.next = null;
    }
}

class LinkedList 
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
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next
            }

            current.next = node;
        }

        this.length++;
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
        if(position >= 0 && position < this.size()) {
            let node = new Node(element);
            let current = this.head;
            if(position = 0) {
                node.next = current;
                this.head = node;
            } else {
                let count = 0;
                let previous = null;
                while (count++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = node;
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
        if(position >= 0 && position < this.size())
        {
            let current = this.head;
            if(position === 0) {
                this.head = current.next;
            } else {
                let previous = null;
                let count = 0;

                while (count++ < position)
                {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }            
            this.length--;

            return current.element;
        }
        return null;
    }

    /**
     * 由串列中刪除一個節點
     *
     * @param {element} element 元素
     * @return {void}
     */
    remove(element)
    {
        return this.removeAt(this.indexOf(element));
    }

    /**
     * 取得節點位於串列中的位置
     *
     * @param {element} element 節點
     * @return {integer} 索引位置 | -1
     */
    indexOf(element)
    {
        let current = this.head;
        let count = 0;

        while(current.next) 
        {
            if(current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }

        return -1;
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
     * 由於串列元素使用了Node類別，需要複寫繼承自JS物件預設的toString方法，讓其只輸出節點的值。
     *
     * @return {string} 節點元素值
     */
    toString()
    {
        let current = this.head;
        let string = '';

        while(current) {
            string += current.element;
            current = current.next;
        }

        return string;
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
}

export default LinkedList;