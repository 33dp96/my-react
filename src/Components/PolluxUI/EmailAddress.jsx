export default function EmailAddress(){
    return<>
        <div className="col-md-12 grid-margin stretch-card">
            <div className="card newsletter-card bg-gradient-warning">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <h5 className="mb-3 text-white">Newsletter</h5>
                        <form className="form d-flex flex-column align-items-center justify-content-between w-100">
                            <div className="form-group mb-2 w-100">
                                <input type="text" className="form-control" placeholder="email address"/>
                            </div>
                            <button className="btn btn-danger btn-rounded mt-1" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}