import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RouteGuard = ({ children, requiredState = [] }) => {
    const location = useLocation();

    // Check if all required state properties are present
    const hasRequiredState = requiredState.every(key =>
        location.state && location.state[key] !== undefined
    );

    if (!hasRequiredState) {
        // Redirect to home if required state is missing
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RouteGuard;
