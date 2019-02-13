export interface Dispatched_Workers_record{
    order:number;       //序号
    dispatched_worker:string;       //派工人
    send_time:Date;                   //派工时间
    workstation:string;                 //工位
    describe:string;                    //备注
}


const dispatched_worker_set = ['张三', '李四', '王五']
const workstation_set = ['绕线站1', '绕线站2', '绕线站3']
const describe_set = ['无', '测试数据1','测试数据2']

export const items_dispatcher_workers_records:Dispatched_Workers_record[] = []

for (var i=0; i<10;i++){
    items_dispatcher_workers_records.push({
        order:i,
        dispatched_worker:dispatched_worker_set[Math.floor(Math.random()*3)],
        send_time:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        workstation:workstation_set[Math.floor(Math.random()*3)],
        describe:describe_set[Math.floor(Math.random()*3)]
    })
}
