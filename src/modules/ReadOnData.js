/* 
    @ Descript
    : Business Logic Part

*/

// Read Data with "fetch API"
const ReadOnData = async (e) => {

    const URL = "http://192.168.200.123:8000/brd/read";

    const requestOption = {
        method: "get",
        headers: {
            "Content-type": "application/json"
        },
    };

    const req = await fetch(URL, requestOption);
    const res = await req.json();
    
    return res;
}

export default ReadOnData;