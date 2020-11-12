// 模拟后台接口返回数据
let list:object[] = []
let i:number; 
 
for(i = 0;i<23;i++) {
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