const styles = {
    display: "flex", 
    flexFlow: "row-wrap",
    justifyContent: "center"
}

const Registration = () => {
    return (
        <>
            <div
                id="hero"
                className="hero jarallax"
                data-speed="0.6"
                data-img-position="50% 48%"
                style={{backgroundImage: "url(img/hero_img/1.jpg)", backgroundPosition: "15% center;background-color: #2d69b9"}}>

                <div className="hero__inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-11 col-sm-12">
                                <h1 className="hero__title">Registration</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embedded Google Form */}
            <p style={styles}><iframe id="registration" src="https://docs.google.com/forms/d/e/1FAIpQLSc_Bp-pBlszB1YpWHUpxj7_zbw5cz_uamKa8RL064mKqJmWGQ/viewform?embedded=true" width="640" height="1500" frameBorder="0" scrolling="no">Loading…</iframe></p>
        </>
    )
}

export default Registration;