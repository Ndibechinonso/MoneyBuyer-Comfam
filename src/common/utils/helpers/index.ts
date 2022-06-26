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
    if (path === "delivery") {
       value = language.delivery
    }
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