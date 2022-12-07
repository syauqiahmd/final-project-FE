import { Link } from "react-router-dom";

export default function SectionStep() {
  return (
    <>
    
    <div className="container">
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-md-6">
        <h1 className="display-4 fw-normal text-center">How To Share</h1>
        </div>
      </div>
      <div className="row mb-3 text-center d-flex justify-content-center">
      <div className="col-md-3">
        <div className="card mb-4 rounded-3 shadow-sm h-100">
          <div className="card-body">
            <h1 className="card-title pricing-card-title">#1</h1>
            <h4 className="my-4 fw-normal">Sign up for free</h4>
            Create an account Join the millions of people who trust <code>DITHUB</code> to share and search DIY projects.
            <Link to="/register" className="w-100 btn btn-lg btn-outline-primary mt-4">Sign up for free</Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card mb-4 rounded-3 shadow-sm h-100">
          <div className="card-body">
            <h1 className="card-title pricing-card-title">#2</h1>
            <h4 className="my-4 fw-normal">Share your project</h4>
            documenting your project and upload step by step how your project created
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card mb-4 rounded-3 shadow-sm h-100">
          <div className="card-body">
            <h1 className="card-title pricing-card-title">#3</h1>
            <h4 className="my-4 fw-normal">Interact with others</h4>
            Search millions projects accros the world 
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}