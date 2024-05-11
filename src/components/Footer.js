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
                            <input type="email" className="form-control me-2" placeholder="Enter email" />
                            <button className="btn btn-primary position-absolute top-0 start-0 translate-middle-x" style={{ left: '-30px' }}>Subscribe</button>
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
