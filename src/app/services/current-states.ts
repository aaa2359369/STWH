const states_set = ['FINISH', 'PROCESS', 'WAIT']
const describe_set = ['铁芯叠装','绕线', '工序', '压装', '器身', '二次线', '总装', '实验']

export interface current_state{
    describe:string,
    state:string
}

export const items_current_states:current_state[] = []

for (var i=0; i<8; i++){
    items_current_states.push({
        describe:describe_set[i],
        state:states_set[Math.floor(Math.random()*3)]
    })
}