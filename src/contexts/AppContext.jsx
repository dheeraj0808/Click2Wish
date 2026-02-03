import { useState, createContext, useContext } from 'react';

// Create a context for app state management
const AppContext = createContext();

// Custom hook to use the app context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

// App provider component
export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    // Global loading state
    const setLoadingState = (isLoading) => {
        setLoading(isLoading);
    };

    // Global error handling
    const setErrorState = (error) => {
        setError(error);
    };

    // Clear error
    const clearError = () => {
        setError(null);
    };

    // User management
    const setUserState = (userData) => {
        setUser(userData);
    };

    const value = {
        loading,
        error,
        user,
        setLoading: setLoadingState,
        setError: setErrorState,
        clearError,
        setUser: setUserState,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
