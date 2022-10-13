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

export const formatDate = (date: string, mode = 1, suffixed = true) => {
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

    const suffix = (day) => {
      switch (day) {
        case 1:
          return "st";
        case 2:
          return "2nd";
        case 3:
          return "3rd";
        default:
          return "th";
      }
    };

    return suffixed === true ? `${month} ${day}${suffix(day)}, ${year}` : `${day} ${month}, ${year}`;
  } else if (mode === 3) {
    const time = new Intl.DateTimeFormat(undefined, { timeStyle: "short" })
      .format(new Date(date))
      .toUpperCase();
    return time;
  } else {
    return date.replaceAll("-", "/");
  }
};

export const formatCurrency = (value: number, mode = 1) => {
  if(!value) return "-"
  return mode === 1 ? (
    "₦" +
    new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(value)
  ) : ("₦" +
  new Intl.NumberFormat("en-US", { minimumFractionDigits: 0 }).format(value))
};

export const toDateTime = (date: string) =>
  new Date(date).toISOString().substring(0, 16);

export const checkObjectValues = (myObj, propsLength) => {
  let valuesArray;
  let bankArray;
  valuesArray = Object.values(myObj);
  let result = [];
  for (var i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].hasOwnProperty("bank_name")) {
      bankArray = Object.values(valuesArray[i]);
      for (var j = 0; j < bankArray.length; j++) {
        if (bankArray[j].length > 0) {
          result = result.concat(bankArray[j]);
        }
      }
    } else {
      if (valuesArray[i].length > 0) {
        result.push(valuesArray[i]);
      }
    }
  }
  return result.length >= propsLength ? true : false;
};

export const capitalizeFirstLetter = (name: string) => {
  const firstLetter = name?.substring(0, 1)?.toUpperCase();
  const otherLetters = name?.substring(1)?.toLowerCase();
  return firstLetter + otherLetters;
};

export const duration = (t1: any) => {
  let d = new Date().getTime() - new Date(t1).getTime();
  let months = Math.floor(d / 1000 / 60 / 60 / 24/ 7 / 30);
  let weeks = Math.floor(d / 1000 / 60 / 60 / 24/ 7);
  let days = Math.floor(d / 1000 / 60 / 60 / 24);
  let hours = Math.floor(d / 1000 / 60 / 60);
  let minutes = Math.floor(d / 1000 / 60);
  let seconds = Math.floor(d / 1000);
  let t;
  if (seconds < 60) {
    t = seconds + "s";
  }
   if (seconds > 60) {
    t = minutes + "m";
  }  if (minutes > 60) {
    t = hours + "h";
  }  if (hours > 24) {
    t = days + "d";
  }if(days > 7){
    t = weeks + "w"
  }if(weeks > 4){
    t = months + "m"
  }

  return t;
};

export const getMonth = (date: string) =>{
  
  if(date.length < 1) return
  const month_value = date.split("-")[0]
  const year = date.split("-")[1]
  let month;
  switch(month_value){
    case "1" : month = "Jan";
    break;
    case "2" : month =  "Feb";
    break;
    case "3": month =  "Mar";
    break;
    case "4" : month =  "Apr";
    break;
    case "5" : month =  "May";
    break;
    case "6": month =  "Jun"  
    break; 
     case "7" : month =  "Jul";
     break;
    case "8" : month =  "Aug";
    break;
    case "9": month =  "Sep"
    break;
    case "10" : month =  "Oct";
    break;
    case "11" : month =  "Nov";
    break;
    case "12": month =  "Dec"
    break;
    default: month =  ""
    return month + date
  }
  return month + " " + year

}

export const filterEmptyUrlQuery = (skips, limit, startDate, endDate, search, filter) => {
  let url

  if(startDate){
 url =  `&startDate=${startDate}&endDate=${endDate}`
  }
  else if(search){
    url =  `&search=${search}`
  }
  else if(filter){
    url =  `&filter=${filter}`
  }
  else if(startDate && search){
    url =  `&startDate=${startDate}&endDate=${endDate}&search=${search}`
  }
  else if(startDate && filter){
    url =  `&startDate=${startDate}&endDate=${endDate}&filter=${filter}`
  }
  else if(search && filter){
    url =  `&search=${search}&search=${search}`
  }
  else if(search && filter && startDate){
    url =  `&startDate=${startDate}&endDate=${endDate}&search=${search}&search=${search}`
  }
  return `/transaction?skip=${skips}&limit=${limit}` + url
}