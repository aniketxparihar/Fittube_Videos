import { useContext, createContext, useReducer, useState } from "react"


const UserDataContext = createContext();

const UserDataProvider = (props) => {
    const [currentId, setCurrentId] = useState("");
    const [modalVisible, setModalVisible] = useState("none");
    const [historyVideos, setHistoryVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    const [sortBy, setSortBy] = useState("All");
    const [category, setCategory] = useState("");
    const [watchLaterRender, setWatchLaterRender] = useState(true);
    const [playlistRender, setPlaylistRender] = useState(true);
    const [searchString, setSearchString] = useState("")

    const categoryHandler = (value) => {
        setCategory(value);
    }
    const modalVisibleHandler = (value) => {
        setModalVisible(value);
    }
    const currentIdHandler = (id) => {
        setCurrentId(id);
    }
    const currentVideoHandler = (video) => {
        setCurrentVideo(video);
    }
    const sortByHandler = (sortCategory) => {
        setSortBy(sortCategory);
    }


    return (
        <UserDataContext.Provider value={{
            historyVideos, setHistoryVideos, currentId, currentIdHandler, modalVisible, modalVisibleHandler, currentVideo, currentVideoHandler, sortBy, sortByHandler, category, categoryHandler, watchLaterRender, setWatchLaterRender, playlistRender,
            setPlaylistRender, searchString, setSearchString }}>
            {props.children}
        </UserDataContext.Provider>
    )
}

const useUserData = () => useContext(UserDataContext);
export { UserDataProvider, useUserData };