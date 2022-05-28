import { useMemo } from "react";

const MojeMemoFetchJSON = useMemo((url, setFunction) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => setFunction(data));
}, [url]);