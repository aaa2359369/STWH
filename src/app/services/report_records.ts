export interface ReportRecord{
    order:number;   //序号
    operator:string;    //操作人
    workstation:string;     //工位
    start_time:Date;      //开工时间
    report_time:Date;         //报工时间
    teammate:string;            //团队成员
    report_content:string;          //报工内容
}


const people = ['张三','李四','王五']
const workstation_set = ['绕线站1', '绕线站2', '绕线站3']
const describe_set = ['无', '测试数据1','测试数据2']


export const items_report_record:ReportRecord[] = []

for(var i=0;i<10;i++){
    items_report_record.push({
        order:i,
        operator:people[Math.floor(Math.random()*3)],
        workstation:workstation_set[Math.floor(Math.random()*3)],
        start_time:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        report_time:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        teammate:people[Math.floor(Math.random()*3)],
        report_content:describe_set[Math.floor(Math.random()*3)]
    })
}