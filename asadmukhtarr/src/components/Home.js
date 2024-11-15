const Home = () => {
    return (
       <div>
        <div class="bg-primary text-white text-center py-5">
            <h1>Welcome to Our Website</h1>
            <p>Your one-stop solution for everything</p>
            <a href="#about" class="btn btn-light btn-lg">Learn More</a>
        </div>
        <div id="about" class="container my-5">
            <div class="row">
                <div class="col-md-6">
                    <h2>About Us</h2>
                    <p>
                        We are a dedicated team working together to provide the best services for our clients. We offer innovative solutions that help individuals and businesses grow.
                    </p>
                    <a href="about.html" class="btn btn-primary">Read More</a>
                </div>
                <div class="col-md-6">
                    <img src="https://via.placeholder.com/500" class="img-fluid" alt="Team 1" />
                </div>
            </div>
        </div>
        <div class="container my-5">
            <h2 class="text-center">Our Services</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/500" class="card-img-top" alt="Service 1" />
                        <div class="card-body">
                            <h5 class="card-title">Service 1</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
                            <a href="/"class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/500" class="card-img-top" alt="Service 2" />
                        <div class="card-body">
                            <h5 class="card-title">Service 2</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
                            <a href="/"class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/500" class="card-img-top" alt="Service 3" />
                        <div class="card-body">
                            <h5 class="card-title">Service 3</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
                            <a href="/"class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       </div>
    )
}
export default Home;