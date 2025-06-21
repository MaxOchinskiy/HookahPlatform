import React, { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.scss';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <h2>Что-то пошло не так</h2>
                        <p>Произошла непредвиденная ошибка. Пожалуйста, попробуйте обновить страницу.</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="error-button"
                        >
                            Обновить страницу
                        </button>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="error-details">
                                <summary>Детали ошибки (только для разработки)</summary>
                                <pre>{this.state.error.stack}</pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 