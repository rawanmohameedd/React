import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [haveError, setHaveErorr] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
            fetch(url)
                .then((res) => {
                    console.log(res)
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                })
                .catch((err) => {
                    console.log(err.message);
                    setHaveErorr(true);
                    setErrorMsg(err.message);
                    setIsPending(false);
                });
    }, []);

    return { data}
}

export default useFetch