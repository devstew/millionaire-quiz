import React from 'react';
import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";
import '../Button/Button.css';

const ErrorPage = (): any | null => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {
            console.log(error.status);
        } else if (error.status === 404) {
            console.error('Oops!', error.status);
        }

        return (
            <div id="error-page">
                <h1>Oops! {error.status}</h1>
                <p>{error.statusText}</p>
                <p>Refresh or try another route</p>
                <Link to={'/'} className="primary_button errorpage_homelink">Go to start page</Link>
                {error.data?.message && (
                    <p>
                        <i>{error.data.message}</i>
                    </p>
                )}
            </div>
        );
    } else if (error instanceof Error) {
        <div id="error-page">
            <h1>Oops! Unexpected Error</h1>
            <p>Something went wrong.</p>
            <p>
                <i>{error.message}</i>
            </p>
        </div>;
    } else {
        return <></>;
    }
}
export default ErrorPage;
