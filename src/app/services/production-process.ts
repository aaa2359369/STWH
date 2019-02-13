export interface ProductionProcess{
    order_number:number;    //工序号
    order:string;           //工序
    plan_start_time:Date;     //计划开始
    plan_end_time:Date;       //计划结束
    actual_start_time:Date;       //实际开始
    actual_end_time:Date;         //实际结束
    person_in_charge:string         //负责人
}

const order_set = ['铁芯叠装','绕线','压装','器身装配','干燥处理','二次线','总装','实验'];

const person_in_charge_set = ['张三','李四','晨五','王六'];


export const items_Production_process:ProductionProcess[] = [];

for(var i=0;i<100;i++){
    items_Production_process.push(
        {
            order_number: i,
            order: order_set[Math.floor(Math.random()*8)],
            plan_start_time: new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
            plan_end_time:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
            actual_start_time: new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
            actual_end_time:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
            person_in_charge: person_in_charge_set[Math.floor(Math.random()*4)]
        }
    )
}