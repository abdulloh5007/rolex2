import { createContext, useState } from "react";


const Context = createContext()
function Provider ({ children }) {
    const [login, setLogin] = useState('')
    const [moon, setMoon] = useState('white')
    return (
        <Context.Provider value={{ login, setLogin, moon, setMoon }}>
            { children }
        </Context.Provider>
    )
}

export {
    Context,
    Provider
}