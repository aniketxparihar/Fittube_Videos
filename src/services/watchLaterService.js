import axios from "axios";

export const getWatchLater = async (authToken) => {
    try {
        const res = await axios.get("/api/user/watchLater", {
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

export const addToWatchLater = async (authToken, video) => {
    try {
        const res = await axios.post(
            "/api/user/watchLater",
            {
                video: video,
            },
            {
                headers: {
                    authorization:authToken,
                },
            }
        );
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteFromWatchLater = async (authToken, video) => {
    try {
        const res = await axios.delete(
            `/api/user/watchLater/${video._id}`,
            {
                headers: {
                    authorization: authToken,
                },
            }
        );
        return res;
    }
    catch (err) {
        console.log(err);
    }
}

