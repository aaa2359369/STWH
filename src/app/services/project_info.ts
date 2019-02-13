//项目信息
export interface project_info{
    id:number; // 项目编号
    name:string; // 项目名称
    type:string; // 项目类型
    manager:string; // 项目经理
    plan_start:Date; // 计划开始
    plan_end:Date; // 计划结束
    actual_start:Date; // 实际开始
    actual_end:Date; // 实际结束
}


const people = ['张三', '王五', '李四', '赵六']
const names = ['铁芯叠装', '铁芯单装']
const types = ['团队作业', '个人作业']


export const project_infos:project_info[] = []

for(var i =0; i<20; i++){
    project_infos.push({
        id:i + 1,
        manager:people[Math.floor(Math.random()*4)],
        name:names[Math.floor(Math.random()*2)],
        type:types[Math.floor(Math.random()*2)],
        plan_start:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        plan_end:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        actual_start:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        actual_end:new Date (Math.floor(Math.random()*1000*3600*24*365*50))
    })
}