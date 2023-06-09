

const Contact = () => {
    return (
        <>
         {/* start hero  */}
			<div
				id="hero"
				className="hero jarallax"
				data-speed="0.6"
				data-img-position="50% 48%"
				style={{backgroundImage: "url(img/hero_img/1.jpg)", backgroundPosition: "15% center", backgroundColor: "#2d69b9"}}>

				<div className="hero__inner">
					<div className="container">
						<div className="row">
							<div className="col-11 col-sm-12">
								<h1 className="hero__title">Contact Us</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			 {/* end hero  */}

			 {/* start main  */}
			<main role="main">
				{/* <link rel="stylesheet" href="css/style.min.css" type="text/css"> */}

				<section className="section">
					<div className="container">
						<div className="row">
							<div className="col-12">

								<div className="company-contacts">
									<div className="__inner">
										<div className="row">
				
											<div className="col-12 col-sm-6 col-lg-3">
												<div className="__item">
													<div className="d-table">
														<div className="d-table-cell align-top">
															<i className="__ico fontello-location-outline"></i>
														</div>

														<div className="d-table-cell align-top">
															<h4 className="__title">Location</h4>

															<div>
																Richardson, TX
															</div>
														</div>
													</div>
												</div>
											</div>
											 

											 
											<div className="col-12 col-sm-6 col-lg-3">
												<div className="__item">
													<div className="d-table">
														<div className="d-table-cell align-top">
															<i className="__ico fontello-phone"></i>
														</div>

														<div className="d-table-cell align-top">
															<h4 className="__title">Phone</h4>

															<div>
																<p>
																	<a href="tel:214-901-7481">(214) 901-7481</a>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											 

											
											<div className="col-12 col-sm-6 col-lg-3">
												<div className="__item">
													<div className="d-table">
														<div className="d-table-cell align-top">
															<i className="__ico fontello-envelope"></i>
														</div>

														<div className="d-table-cell align-top">
															<h4 className="__title">Email</h4>

															<div>
																<a href="mailto:ctvendingsolutions@gmail.com">ctvendingsolutions@gmail.com</a><br/>
																<a href="mailto:jeff@ctvend.com">jeff@ctvend.com</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											

											 
											<div className="col-12 col-sm-6 col-lg-3">
												<div className="__item">
													<div className="d-table">
														<div className="d-table-cell align-top">
															<i className="__ico fontello-share"></i>
														</div>

														<div className="d-table-cell align-top">
															<h4 className="__title">Social</h4>

															 
															<div className="s-btns s-btns--gray">
																<ul className="d-flex flex-row flex-wrap align-items-center">
																	<li><a className="f" href="#"><i className="fontello-facebook"></i></a></li>
																	<li><a className="t" href="#"><i className="fontello-twitter"></i></a></li>
																	<li><a className="y" href="#"><i className="fontello-youtube-play"></i></a></li>
																	<li><a className="i" href="#"><i className="fontello-instagram"></i></a></li>
																</ul>
															</div>
															 
														</div>
													</div>
												</div>
											</div>
											 
										</div>
									</div>
								</div>
								 

							</div>
						</div>
					</div>
				</section>
				 

				{/* <section className="section section--no-pt section--no-pb">
					<div className="g_map" data-api-key="AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U" data-longitude="44.958309" data-latitude="34.109925" data-marker="img/marker.png" style={{minHeight: "500px"}}></div>
				</section>

				<iframe
				 width="600"
				 height="450"
				 style={{border: "0"}}
				 loading="lazy"
				 allowFullScreen
				 src="https://www.google.com/maps/embed/v1/view?zoom=11&center=32.9483%2C-96.7299&key=AIzaSyAFVT5Oz6yKYUVxZ5PVgkfKAJ-y5Gjkq6A">
			    </iframe> */}

             </main>
             </>
    )
}

export default Contact;