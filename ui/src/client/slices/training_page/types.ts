export interface initialInterface {
    result: Array<any>,
    ifInputCorrect: boolean,
    training: {
        push_ups: {
            first_att: { label: string, value: number },
            second_att: { label: string, value: number },
            third_att: { label: string, value: number },
            fourth_att: { label: string, value: number },
        },
        squats: {
            first_att: { label: string, value: number },
            second_att: { label: string, value: number },
            third_att: { label: string, value: number },
            fourth_att: { label: string, value: number },
        },
        plank: {
            first_att: { label: string, value: number },
        },
    },
}
