export const fromDate = (time, date= Date.now())=>{
    return new Date(date + time * 1000)
}
