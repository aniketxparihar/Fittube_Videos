import axios from "axios";

export const getHistory = async (authToken) => {
    try {
        const res = await axios.get("/api/user/history", {
            headers: {
                authorization:authToken
            }
        })
        return res;
    }
    catch (err) {
        console.log(err);
    }
}

export const addToHistory = async (authToken,video) => {
    try {
        const res = await axios.post("/api/user/history", {video},{
            headers: {
                authorization: authToken
            }
        })
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteFromHistory = async (authToken, video) => {
    try {
        const res = await axios.delete(`/api/user/history/${video._id}`, {
            headers: {
                authorization: authToken
            }
        })
        return res;
    }
    catch (err) {
        console.log(err);
    }
}


export const deleteAllFromHistory = async (authToken) => {
    try {
        const res = await axios.delete("/api/user/history/all", {
            headers: {
                authorization: authToken
            }
        })
        return res;
    }
    catch (err) {
        console.log(err);
    }
}