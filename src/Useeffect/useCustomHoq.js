import React,{useState,useEffect} from 'react'

const useCustomHoq = (url) => {
    const [deta, setdeta] = useState(null);
    const [isloading,setisloading]=useState(true)
    const [err, seterr] = useState(null)
    
    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("here is an ERROR!!!");
          }else
          return response.json();
        })
        .then((deta) => {
          setdeta(deta);
            setisloading(false);
            seterr(null)
        })
        .catch((err) => {
          seterr(err.message);
          setisloading(false);
        });
      
    },[url]);
    return { deta, isloading, err };
}

export default useCustomHoq