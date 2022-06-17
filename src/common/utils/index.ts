export const formatMoney = (num: number) => {
    if (Number(num) >= 1000000000) {
        return (Number(num) / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (Number(num) >= 1000000) {
        return (Number(num) / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (Number(num) >= 1000) {
        return (Number(num) / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return new Intl.NumberFormat("en-us", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(num));
};
