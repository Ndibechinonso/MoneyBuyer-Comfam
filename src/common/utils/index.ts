export const formatMoney = (num: number) => {
  if (Number(num) >= 1000000000) {
    return (
      "₦" + (Number(num) / 1000000000).toFixed(1).replace(/\.0$/, "") + "B"
    );
  }
  if (Number(num) >= 1000000) {
    return "₦" + (Number(num) / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (Number(num) >= 1000) {
    return "₦" + (Number(num) / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return (
    "₦" +
    new Intl.NumberFormat("en-us", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(num))
  );
};

export const validateEmail = (email: any) => {
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
};

export const validatePassword = (password: any) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
};

export const formatDate = (date: string, mode = 1) => {
  if (!date) date = new Date().toISOString();
  if (mode === 1) {
    const dateArray = new Date(date).toDateString().split(" ");
    const timeString = new Date(date).toTimeString().substring(0, 8);
    return (
      (dateArray[2].length < 2 ? `0${dateArray[2]}` : dateArray[2]) +
      "/" +
      dateArray[1] +
      "/" +
      dateArray[3] +
      " - " +
      timeString
    );
  } else if (mode === 2) {
    const year = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format(
      new Date(date)
    );
    const month = new Intl.DateTimeFormat(undefined, { month: "short" }).format(
      new Date(date)
    );
    const day = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format(
      new Date(date)
    );
    const time = new Intl.DateTimeFormat(undefined, { timeStyle: "short" })
      .format(new Date(date))
      .toLowerCase();
    
      const suffix = (day) =>{
        switch(day){
          case 1: return "st";
          case 2: return "2nd";
          case 3: return "3rd"
          default: return "th"
        }
      }

    return `${month} ${day}${suffix(day)}, ${year}`;
  } else if(mode === 3){
    const time = new Intl.DateTimeFormat(undefined, { timeStyle: "short" })
      .format(new Date(date))
      .toUpperCase();
      return time
  }
  else {
    return date.replaceAll("-", "/");
  }
};

export const formatCurrency = (value: number) => {
  return (
    "₦" +
    new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(value)
  );
};


export const toDateTime = (date: string) => new Date(date).toISOString().substring(0, 16);

export const checkObjectValues = (myObj, propsLength) => {
  let valuesArray;
  let bankArray;
  valuesArray = Object.values(myObj)
let result = []
for(var i = 0; i < valuesArray.length; i++){
if(valuesArray[i].hasOwnProperty("bank_name")){
  bankArray = Object.values(valuesArray[i])
  for (var j = 0; j < bankArray.length; j++){
    if(bankArray[j].length > 0){
      result = result.concat(bankArray[j])
    }
  }
}else{
  if(valuesArray[i].length > 0){
    result.push(valuesArray[i])
  }
}
}
return result.length >= propsLength ? true : false
};

export const capitalizeFirstLetter = (name: string) =>{
  const firstLetter = name.substring(0, 1).toUpperCase()
  const otherLetters = name.substring(1).toLowerCase()
  return firstLetter + otherLetters
}