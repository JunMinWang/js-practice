'use strict'

class Set {

    /**
     * 建構式
     *
     * @return {void}
     */
    constructor() 
    {
        this.items = {};
    }

    /**
     * 新增一個項目至Set
     *
     * @param {integer} value 值
     * @return {boolean}
     */
    add(value) 
    {
        if(!this.has(value)) {
            this.items[value] = value
            return true;
        }
        return false;
    }

    /**
     * 從Set中移除項目
     *
     * @param {integer} value 值
     * @return {void}
     */
    remove(value)
    {
        if(this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }

    /**
     * 查看項目是否存在於Set
     *
     * @param {integer} value 值
     * @return {boolean}
     */
    has(value)
    {
        return value in this.items;
    }

    /**
     * 移除Set中的所有項目
     *
     * @param {integer} value 值
     * @return {void}
     */
    clear()
    {
        this.items = {};
    }

    /**
     * 回傳Set中的項目數量
     *
     * @return {integer}
     */
    size()
    {
        return Object.keys(this.items).length;
    }

    /**
     * 回傳一個包含Set中的所有項目的陣列
     *
     * @return {array}
     */
    values()
    {
        return Object.keys(this.items);
    }

    /**
     * 聯集
     *
     * @param {Set} otherSet 另一個集合
     * @return {Set}
     */
    union(otherSet)
    {
        let unionSet = new Set();

        let vals = this.values();
        for(let i = 0 ; i < vals.length ; i++) {
            unionSet.add(vals[i]);
        }

        vals = otherSet.values();
        for (let i = 0; i < vals.length; i++)
        {
            unionSet.add(vals[i]);
        }

        return unionSet;
    }

    /**
     * 差集(存在於此集合但不存在於另一集合)
     *
     * @param {Set} otherSet 另一個集合
     * @return {Set}
     */
    difference(otherSet)
    {
        let diffSet = new Set();

        let vals = this.values();

        for(let i = 0 ; i < vals.length ; i++)
        {
            if(!otherSet.has(vals[i])) {
                diffSet.add(vals[i]);
            }
        }

        return diffSet;
    }

    /**
     * 子集(存在於此集合中的每個項目也要同時存在於另一集合)
     *
     * @param {Set} otherSet 另一個集合
     * @return {boolean}
     */
    subSet(otherSet)
    {
        if(this.size() > otherSet.size()) {
            return false;
        }

        let vals = this.values();

        for(let i = 0 ; i < vals.length ; i++)
        {
            if(!otherSet.has(vals[i])) {
                return false;
            }
        }
        return true;
    }
}

export default Set;