import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-4">
                        <h1>PcariMovie</h1>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        <h5>Join Newsletters</h5>
                        <div className="position-relative">
                            <input type="email" className="form-control me-2 w-50" style={{ backgroundColor: 'rgba(61, 61, 61, 1)' }} placeholder="Enter email" />
                            <button type="submit" className="btn position-absolute top-50 start-50  translate-middle-y">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row align-items-start">
                            <div className="col mb-5">
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                            </div>
                            <div className="col">
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                            </div>
                            <div className="col">
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                                <div className="mb-3">asdasd</div>
                            </div>
                            <div className="col-12 mt-auto d-flex justify-content-between">
                                <p>Address: 123 Main St, City, Country</p>
                                <p>Email: example@example.com</p>
                                <p>Contact: +1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
