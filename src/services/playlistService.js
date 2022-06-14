import axios from "axios";

export const getPlaylists = async (authToken) => {
    try {
        const res = await axios.get("/api/user/playlists", {
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

export const createNewPlaylist = async (authToken, playlist) => {
    try {
        const res = await axios.post("/api/user/playlists", { playlist }, {
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

export const deletePlaylist = async (authToken, playlist) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlist._id}`, {
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

export const getPlaylist = async (authToken, playlist) => {
    try {
        const res = await axios.get(`/api/user/playlists/${playlist._id}`, {
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

export const addToPlaylist = async (authToken,playlist,video) => {
    try {
        const res = await axios.post(`/api/user/playlists/${playlist._id}`, {video}, {
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

export const deleteFromPlaylist = async (authToken, playlist, video) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlist._id}/${video._id}`, {
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