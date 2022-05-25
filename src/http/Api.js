import axios from "axios";

const Api = ({url, setResult}) => {
    try{
        const API = `https://api.shrtco.de/v2/shorten?url=${url}very/long/link.html`;
            axios(API)
                .then(res => {
                    setResult(res.data)
                })
    }catch(error) {
        console.error(error);
    }
}
export default Api