
export const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString();
    var arr = numberWithCommas.split(",");
    let n = arr.length;

    switch (n) {
        case 5:
            return arr[0] + "." + arr[1].slice(0, 2) + "T";
        case 4:
            return arr[0] + "." + arr[1].slice(0, 2) + "B";
        case 3:
            return arr[0] + "." + arr[1].slice(0, 2) + "M";
        case 2:
            return arr[0] + "." + arr[1].slice(0, 2) + "K";
        default:
            return number.toLocaleString();
    }
}