import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreDataContext } from '../../Context/StoreDataContext';

function NftReadership() {
  
  const storeDataContext = React.useContext(StoreDataContext);
  const { addData, storeFiles, NewData, addDataToIPFS} = storeDataContext;
  const [name, setName] = useState();
  const [symbol,setSymbol] = useState();
  const [tokenPrice, setTokenPrice] = useState();
  const [tokenQuantity, setTokenQuantity] = useState();
  const [imageObj, setImageObj] = useState();
  const [imageUrl, setImageUrls] = useState();

  console.log(NewData, "Data from NFTReadership file ");
  useEffect(() => {
   setName(localStorage.getItem("name"));
   setSymbol(localStorage.getItem("symbol"));
   setTokenPrice(localStorage.getItem("tokenPrice"));
   setTokenQuantity(localStorage.getItem("tokenQuantity"));
   setImageObj(localStorage.getItem("imageArrss"));
   setImageUrls(localStorage.getItem("imageUrls"));

  }, [])
  return (

    <div style={{ marginTop: "120px", listStyle: "none" }} className="container footer-top">
      <h1 className="form-style-2-heading">Explore collections</h1>


      <div className="row">
        {/* {AllItems.map((obj) => { */}
          {/* console.log(obj.name,"obj.name"); */}
          {/* console.log(obj[0].name,"obj[0].name"); */}

          {/* return ( */}
            <div className="col-md-3 col-sm-6">
              {/* <li key={obj.imageArr[0].tokenId}> */}
                {/* <Link to={`/readership-nft-detail/${}`}> */}
                  <div className="card-readership card-block">
                    <h4 className="card-title-readership text-right"></h4>
                    <img
                      className="Nft-img"
                      src={imageUrl}
                      alt="NFT Image"
                    />
                    <h1 className="card-title-readership "> {name}'s collection </h1>
                  </div>
                {/* </Link> */}
              {/* </li> */}
            </div>
          {/* ) */}
        {/* })} */}
      </div>
    </div>
  );
}
export default NftReadership;