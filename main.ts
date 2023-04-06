namespace Radio {
    let menssageS: string
    let menssageN: number
    //% block='send number %num%'
    export function sendNumber(num: number){
        menssageN = num
    }
    //% block='send string %text%'
    export function sendString(text: string) {
        menssageS = text
    }
    //% block='resived a number?'
    export function onResiveNumber() {
        if(menssageN != null){
            return true
        }else{
            return false
        }
    }
}