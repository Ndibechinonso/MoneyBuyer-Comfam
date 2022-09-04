import { language } from "../language/en"

export const getFirstLevelPath = (value:string) => { 
    return value.substring(1).split("/")[0]
 }

  export type GetObjReturn = {
     title: string,
     subtitle: string,
     newUser?: object | any,
     existingUser?: object | any
 } | null

 export const displayHeaderBtn = (path:string, newUser?:boolean, incompletereg?:boolean) => { 

   if (incompletereg === true && newUser === true) {
      return false
   }

   if (newUser === true && !["notifications"].includes(getFirstLevelPath(path))) {
      return true
   }

  if (newUser === false && !["notifications","messages"].includes(getFirstLevelPath(path))) {
   return true
  }

}
 export const displayPageInfo = (path:string, newUser?:boolean, incompletereg?:boolean) => { 

   if (incompletereg === true || newUser === true ) {
      return true
   }

   // if (newUser === true) {
   //    return true
   // }

  if (newUser === false && !["messages"].includes(getFirstLevelPath(path))) {
   return true
  }

}

export const getObject = (path:string): GetObjReturn=> { 
    let value = null
    if (path === "dashboard") {
       value = language.dashboard
    }
    if (path === "wallet") {
       value = language.wallet
    }
    if (path === "transaction") {
       value = language.transaction
    }
    if (path === "messages") {
      value = language.messages
   }
   //  if (path === "delivery") {
   //     value = language.delivery
   //  }
    if (path === "dispute") {
       value = language.dispute
    }
    if (path === "setting") {
       value = language.setting
    }
    if (path === "notifications") {
       value = language.notifications
    }

    return value
 }

 export const toNaira = (amount: string) =>
  parseInt(amount === ""? "0":amount)?.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });