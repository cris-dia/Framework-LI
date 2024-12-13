import React from 'react';

const Documentation = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Documentation</h2>
            <div className="d-flex justify-content-center gap-3">
                <a
                    href="/documents/technical-requirements.txt"
                    className="btn btn-primary"
                    download
                >
                    Technical Requirements
                </a>
                <a
                    href="/documents/complete-documentation.pdf"
                    className="btn btn-primary"
                    download
                >
                    Complete Documentation
                </a>
                <a
                    href="/documents/faq.pdf"
                    className="btn btn-primary"
                    download
                >
                    FAQ
                </a>
            </div>
        </div>
    );
};

export default Documentation;
