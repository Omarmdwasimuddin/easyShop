import {cookies} from "next/headers";

export async function isLogin (){
    let cookie= await cookies();
    let token=cookie.get("token");
    return typeof token !== 'undefined';
}

export async  function getCookies (){
    let cookie= await cookies();
    let token=cookie.get("token");
    if(typeof token === 'undefined'){
        return false
    }else{
        return 'token='+token.value
    }
}