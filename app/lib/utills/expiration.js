export const fromDate = (time, date= (Date.now() / 1000))=>{
    return new Date(date + time * 1000)
}
