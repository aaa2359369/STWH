//生产计划信息
export interface production_plan{
    id:number; // 项目编号
    name:string; // 项目名称
    order_id:number; //工序编号
    order_name:string; // 工序名称
    plan_start:Date; // 计划开始
    plan_end:Date; // 计划结束
    actual_start:Date; // 实际开始
    actual_end:Date; // 实际结束
    note:string; //备注
}


const notes = ['正常', '异常', '测试']
const names = ['铁芯叠装', '铁芯单装']
const order_names = ['团队作业', '个人作业']


export const production_plans:production_plan[] = []

for(var i =0; i<20; i++){
    production_plans.push({
        id:i + 1,
        name:names[Math.floor(Math.random()*2)],
        order_id: (i + 1) * 10,
        order_name:order_names[Math.floor(Math.random()*2)],
        plan_start:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        plan_end:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        actual_start:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        actual_end:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        note:notes[Math.floor(Math.random()*3)]
    })
}