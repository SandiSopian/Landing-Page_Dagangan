import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function MenuItem({ image, name, desc, order }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>

      <p>{desc}</p>
      <a href="https://api.whatsapp.com/send?text=Mau Pesan Daging!&phone=+6281321349581" target="_blank">
        <span className="order">
          <AddShoppingCartIcon />
          &nbsp;
          {order}
        </span>
      </a>
    </div>
  );
}

export default MenuItem;
