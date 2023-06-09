type productProps = {
    title: string,
    src: string,
    price: string
}

const ProductCard = ({title, src, price}: productProps) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 d-sm-flex">
            <div className="__item">
                <div className="d-flex flex-wrap">
                    <figure className="__image">
                        <img src={src} alt="" />
                    </figure>

                    <div className="__content">
                        <h4 className="__title"><a href="#0">{title}</a></h4>

                        <div className="product-price">
                            <span className="product-price__item product-price__item--new">{`$${price}`}</span>
                        </div>


                    </div>
                </div>

                {/* <span className="product-label product-label--discount">Sale</span> */}
            </div>
        </div>
    )
}

export default ProductCard;