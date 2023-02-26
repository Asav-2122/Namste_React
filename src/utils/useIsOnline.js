import { useState,useEffect } from "react";

const useIsOnline=()=>{
   const [isOnline,setIsOnline] = useState(true);
       const checkOnline=()=>{
           setIsOnline(true);
       }
       const checkOffline=()=>{
           setIsOnline(false);
       }
    useEffect(()=>{
        window.addEventListener('online',checkOnline);
        window.addEventListener('offline',checkOffline);

        return ()=>{
            window.removeEventListener('online',checkOnline);
            window.removeEventListener('offline',checkOffline);
        }
    },[])
  return isOnline;
}
export default useIsOnline;