import ProductCard from "../components/productCard";

const productArr = [
	{
		title: 'DORITOS® Nacho Cheese Flavored',
		src: 'https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png',
		price: '1'
	},
	{
		title: 'Clif Bar - Crunchy Peanut Butter',
		src: 'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/10120022_DTC_CLF_CRP_2048x2048_068112ba-200e-4ed4-9655-38b5d4064c5f_768x.png?v=1670870346',
		price: '2'
	},
	{
		title: 'KIT KAT® Milk Chocolate Candy Bar',
		src: 'https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00246_7_701_24600_070_Item_Front?fmt=png-alpha&hei=3103',
		price: '1.50'
	},
	{
		title: 'SkinnyPop - White Cheddar Popped Popcorn',
		src: 'https://www.skinnypop.com/wp-content/uploads/2018/11/white_cheddar_main@2x.png',
		price: '1'
	},
	{
		title: 'PLANTERS® Salted Peanuts, 1 Oz',
		src: 'https://www.planters.com/wp-content/uploads/2022/05/web_640_PLANTERS_Salted-Peanuts-1-oz-packet.png',
		price: '1.25'
	},
	{
		title: "REESE'S Milk Chocolate Peanut Butter Cups Standard Size 1.5oz",
		src: 'https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw8fd16f40/images/hi-res/034000004409_1.jpg?sw=700&sh=700&sm=fit',
		price: '1.50'
	},
]

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

											{
												productArr.map((e) => {
													return (
														<ProductCard title={e.title} src={e.src} price={e.price}/>
													)
												})
											}
											
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