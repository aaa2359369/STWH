//QRT内容
export interface QRT_content{
    init_person:string;     //触发人
    trigger_time:Date;        //触发时间
    describe:string;            //问题描述
    person_in_charge:string;         //负责人
    one_hour_decision:string;       //一小时决定
}


const people = ['张三', '王五', '李四']
const describe_set = ['无', '测试数据1','测试数据2']


export const items_QRT_content:QRT_content[] = []

for(var i =0; i<10; i++){
    items_QRT_content.push({
        init_person:people[Math.floor(Math.random()*3)],
        trigger_time:new Date (Math.floor(Math.random()*1000*3600*24*365*50)),
        describe:describe_set[Math.floor(Math.random()*3)],
        person_in_charge:describe_set[Math.floor(Math.random()*3)],
        one_hour_decision:describe_set[Math.floor(Math.random()*3)]
    })
}