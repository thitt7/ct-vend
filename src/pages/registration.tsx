import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
    display: "flex", 
    flexFlow: "row-wrap",
    justifyContent: "center"
}

const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Registration = () => {
    const query = Number(useQuery().get("tier"));
    console.log('tier param: ', query)
    const tierArr = ['usp=pp_url&entry.1407237026=Tier+1', 'usp=pp_url&entry.1407237026=Tier+2', 'usp=pp_url&entry.1407237026=Tier+3']
    console.log('result: ', tierArr[query])
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
            <p style={styles}><iframe id="registration" src={`https://docs.google.com/forms/d/e/1FAIpQLSc_Bp-pBlszB1YpWHUpxj7_zbw5cz_uamKa8RL064mKqJmWGQ/viewform?${tierArr[query - 1]}&embedded=true`} width="640" height="1500" scrolling="no">Loading…</iframe></p>
        </>
    )
}

export default Registration;

