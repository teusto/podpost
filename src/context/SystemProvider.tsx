import { createContext, useContext, useState } from 'react'

const SystemContext = createContext();

const SystemProvider = ({ children }) => {
    const [socialSelected, setSocialSelected] = useState('')
    const [url, setUrl] = useState('')

    const setSocialToPost = (value) => {
        setSocialSelected(value)
    }
    const getSocialToPost = () => {
        return socialSelected;
    }

    const setUrlToPost = (value) => {
        setUrl(value);
    }

    const getUrlToPost = () => {
        return url;
    }

    return <SystemContext.Provider value={{ setSocialToPost, getSocialToPost, getUrlToPost, setUrlToPost }}>{children}</SystemContext.Provider>
};

export default SystemProvider;

export const useSystem = () => {
    return useContext(SystemContext);
};