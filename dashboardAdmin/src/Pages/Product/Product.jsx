import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Chart from "../../Components/Chart/Chart";
import { productsData } from "../../Datas";
import PublishIcon from '@mui/icons-material/Publish';
import "./Product.css";
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h4 className="productTitle">Product</h4>
        <Link to="/newProduct">
          <Button variant="contained" color="success" size="small">
            Create
          </Button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale in Month" data={productsData} dataKy="Sale" />
        </div>
        <div className="productTopRight">
          <div className="productTopInfo">
            <img src='/Images/avatar.jpg' alt="" className="productInfoImg" />
            <span className="productInfoName">Del Loptop</span>
          </div>
          <div className="productInfoBottom">
          <div className="productInfoItem">
            <div className="productInfoKey">ID:</div>
            <div className="productInfoValue">123</div>
          </div>

          <div className="productInfoItem">
            <div className="productInfoKey">Name:</div>
            <div className="productInfoValue">Dell</div>
          </div>

          <div className="productInfoItem">
            <div className="productInfoKey">Sale:</div>
            <div className="productInfoValue">$123</div>
          </div>

          <div className="productInfoItem">
            <div className="productInfoKey">Active:</div>
            <div className="productInfoValue">yes</div>
          </div>

          <div className="productInfoItem">
            <div className="productInfoKey">In Stock:</div>
            <div className="productInfoValue">No</div>
          </div>
        </div>
        </div>
       
      </div>
       <div className="productBottom">
        <div className="productForm">
          <div className="productFormLeft">
            <h3>Product Name</h3>
            <input type="text" placeholder="Edit Loptop" />
            <label  >in stock</label>
            <select name="" id="inStock">
              <option value="yse">Yes</option>
              <option value="no">No</option>
            </select>

            <label  >Action</label>
            <select name="" id="inStock">
              <option value="yse">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productFormUploader">
              <img src="/Images/avatar.jpg" alt="" />
              <label>
<PublishIcon/>
              </label>
              <input type="file" style={{display:"none"}}/>
            </div>
            <Button variant="contained">Upload Edit</Button>
          </div>
        </div>
      </div> 
    </div>
  );
}
