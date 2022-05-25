import { useEffect, useState} from "react";
import Api from "../http/Api";


const useSingleLink = () => {
    const [url, setUrl] = useState('')
    const [result, setResult] = useState([])
	
    useEffect(() => {
        if(url !== ''){
            Api({url, setResult})
        }
    }, [url])

    return { setUrl, result};
}

export default useSingleLink ;
