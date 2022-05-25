const useContext= () => {
    const links = [];

    const getLocalStorage = ({name, value}) => {
        localStorage.setItem(name, JSON.stringify(value))
        const items = localStorage.getItem(name)
        links.push(JSON.parse(items))
        return {links}
    }

    return {getLocalStorage}
}

export default useContext