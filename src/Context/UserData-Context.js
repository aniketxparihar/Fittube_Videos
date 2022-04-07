import { useContext, createContext, useReducer, useState } from "react"


const UserDataContext = createContext();

const UserDataProvider = (props) => {
    const [currentId, setCurrentId] = useState("");
    const [modalVisible, setModalVisible] = useState("none");
    const [currentVideo, setCurrentVideo] = useState({});
    const [sortBy, setSortBy] = useState("All");
    const [category, setCategory] = useState("");
    const [historyRender, setHistoryRender] = useState(true);
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
        <UserDataContext.Provider value={{ currentId, currentIdHandler, modalVisible, modalVisibleHandler, currentVideo, currentVideoHandler, sortBy, sortByHandler, category, categoryHandler,historyRender,setHistoryRender }}>
            {props.children}
        </UserDataContext.Provider>
    )
}

const useUserData = () => useContext(UserDataContext);
export { UserDataProvider, useUserData };