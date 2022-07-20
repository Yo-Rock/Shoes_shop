import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

function ProductCard({ img01, img02, name, price, slug }) {
  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card_img">
          <img src={img01} alt="" />
          <img src={img02} alt="" />
        </div>
        <h3 className="product-card_name">{name}</h3>
        <div className="product-card_price">
          {numberWithCommas(price)}
          <span className="product-card_price_old">
            <del>{numberWithCommas(400000)}</del>
          </span>
        </div>
      </Link>

      <div className="product-card_btn">
        <Button size="sm" icon="bx bx-cart" animate={true}>
          Chon mua
        </Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
