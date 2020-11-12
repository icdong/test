/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-12 21:41:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-12 21:43:52
 */
// 模拟后台接口返回数据
let list: object[] = []

for (let i: number = 0; i < 10; i++) {
    list.push({
        id: `id${i}`,
        name: `name${i}`,
    })
}

export const data = {
    data: {
        list: list,
        total: 23,
    },
    success: true,
    message: 'xxx',
};
