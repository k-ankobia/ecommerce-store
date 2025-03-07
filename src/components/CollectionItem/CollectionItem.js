import React from "react";
import "./collection-item.styles.scss";
import { CustomButton } from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-card">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {" "}
      </div>

      <div className="collection-footer">
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        {" "}
        ADD to cart{" "}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
