export const convertDate = (number) => {
    var myDate = new Date(number);
    let d = myDate.getDate() + "/" + (myDate.getMonth()+1);
    return d; 
} 