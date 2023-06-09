const Products = () => {
    return (
        <>
				<section className="section">
					<div className="container">
						<div className="row align-items-md-end">
							<div className="col-12 col-md">
								<div className="section-heading section-heading--left">


									<h2 className="__title">Products We Carry</h2>
								</div>
							</div>

							<div className="col-12 col-lg-auto">
								<div className="d-none d-lg-block">
									<a className="custom-btn custom-btn--big custom-btn--s1" href="#">All Products</a>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="spacer py-6"></div>

								 {/* start ingredients */}
								<div className="ingredients">
									<div className="__inner">
										<div className="row">

											<div className="col-12 col-md-6 col-lg-4 d-sm-flex">
												<div className="__item">
													<div className="d-flex flex-wrap">
														<figure className="__image">
															<img className="lazy" src="img/blank.gif" data-src="img/ingredients_img/1.png" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="__title"><a href="#">Combo Machine Snack</a></h4>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10$</span>
															</div>


														</div>
													</div>

													<span className="product-label product-label--discount">Sale</span>
												</div>
											</div>
											 

											 
											<div className="col-12 col-md-6 col-lg-4 d-sm-flex">
												<div className="__item">
													<div className="d-flex flex-wrap">
														<figure className="__image">
															<img className="lazy" src="img/blank.gif" data-src="img/ingredients_img/2.png" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="__title"><a href="#">Combo Machine Snack</a></h4>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10$</span>
															</div>

															<div className="__btn">
																<a className="__add-to-cart" href="#"><i className="fontello-shopping-cart"></i>Add to Cart</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											

											
											<div className="col-12 col-md-6 col-lg-4 d-sm-flex">
												<div className="__item">
													<div className="d-flex flex-wrap">
														<figure className="__image">
															<img className="lazy" src="img/blank.gif" data-src="img/ingredients_img/3.png" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="__title"><a href="#">Combo Machine Snack</a></h4>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10$</span>
															</div>

															<div className="__btn">
																<a className="__add-to-cart" href="#"><i className="fontello-shopping-cart"></i>Add to Cart</a>
															</div>
														</div>
													</div>
												</div>
											</div>

											 
											<div className="col-12 col-md-6 col-lg-4 d-sm-flex">
												<div className="__item">
													<div className="d-flex flex-wrap">
														<figure className="__image">
															<img className="lazy" src="img/blank.gif" data-src="img/ingredients_img/4.png" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="__title"><a href="#">Combo Machine Snack</a></h4>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10$</span>
															</div>

															<div className="__btn">
																<a className="__add-to-cart" href="#"><i className="fontello-shopping-cart"></i>Add to Cart</a>
															</div>
														</div>
													</div>
												</div>
											</div>

											 
											<div className="col-12 col-md-6 col-lg-4 d-sm-flex">
												<div className="__item">
													<div className="d-flex flex-wrap">
														<figure className="__image">
															<img className="lazy" src="img/blank.gif" data-src="img/ingredients_img/5.png" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="__title"><a href="#">Combo Machine Snack</a></h4>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10$</span>
															</div>

															<div className="__btn">
																<a className="__add-to-cart" href="#"><i className="fontello-shopping-cart"></i>Add to Cart</a>
															</div>
														</div>
													</div>
												</div>
											</div>

											 
											<div className="col-12 col-md-6 col-lg-4 d-sm-flex">
												<div className="__item">
													<div className="d-flex flex-wrap">
														<figure className="__image">
															<img className="lazy" src="img/blank.gif" data-src="img/ingredients_img/6.png" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="__title"><a href="#">Combo Machine Snack</a></h4>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10$</span>
															</div>

															<div className="__btn">
																<a className="__add-to-cart" href="#"><i className="fontello-shopping-cart"></i>Add to Cart</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											
										</div>
									</div>
								</div>

								<div className="text-center d-lg-none">
									<div className="spacer py-5"></div>

									<a className="custom-btn custom-btn--big custom-btn--s1" href="#">All Products</a>
								</div>
							</div>
						</div>
					</div>
				</section>
            </>
    )
}

export default Products;