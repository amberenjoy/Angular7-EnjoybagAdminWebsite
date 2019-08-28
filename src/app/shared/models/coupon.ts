/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 10:54:50
 * @LastEditTime: 2019-08-19 15:00:56
 * @LastEditors: Please set LastEditors
 */
export class Coupon {
    id?: string;
    code: string;
    amount: string;
    type: string;
    description: string;
    expiredAt: string;
    startAt: string;
    usageCount: number;
    usageLimit: number;
    minimumAmount: number;
    usedBy: Array<string>;
    createAt: Date;
    updateAt: Date;
}