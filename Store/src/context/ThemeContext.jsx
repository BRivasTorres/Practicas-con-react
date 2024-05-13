import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState()
    
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        const updateTheme = () => {
            darkModeMediaQuery.matches ? setTheme("dark") : setTheme("ligh")
        };
        updateTheme();

        darkModeMediaQuery.addEventListener("change", updateTheme);
        return () => {
            darkModeMediaQuery.removeEventListener("change", updateTheme);
        };
    }, []);
    
    const handleChangeTheme = (theme) => setTheme(theme)
    
    const value = {theme, handleChangeTheme}
    return <ThemeContext.Provider value={value} >{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext