import React,{useState, useEffect} from 'react'
import axios from "axios";
import { create } from "ipfs-http-client";
import { renderToStaticMarkup } from "react-dom/server";
import {Buffer} from 'buffer';
import { mintParentContract } from "../../config";
import ContractABI from "../../abi/mintContractParent.json";
import { Web3Storage } from 'web3.storage';
import { ethers } from 'ethers';
import { StoreDataContext } from '../Context/StoreDataContext';
const UploadFormNFT = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [tokenPrice, setTokenPrice] = useState("");
  const [tokenQuantity, setTokenQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [ imgArr, setImgArr] = useState([]);
   

const storeDataContext = React.useContext(StoreDataContext);
  const { addData, storeFiles, NewData, addDataToIPFS} = storeDataContext;
  // const { Moralis } = useMoralis();
  // const getnftData = Moralis.Object.extend("nftMetadata");
  // const nftData = new getnftData();

  const nameEvent = (e) => {
    setName(e.target.value);
  };
  const tokenPriceEvent = (e) => {
    setTokenPrice(e.target.value || null);
  };
  const tokenQuantityEvent = (e) => {
    setTokenQuantity(e.target.value);
  };
  const symbolEvent = (e) => {
    setSymbol(e.target.value);
  }; 
  window.addEventListener('load', async () => {
    try {
               await ethereum.enable();
           } catch (error) {}
    });
  // const projectId = process.env.REACT_APP_INFURA_PROJECT_KEY;
  // const projectSecret = process.env.REACT_APP_INFURA_APP_SECRET_KEY;
  // const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  // const ifpsConfig = {
  //   host: 'ipfs.infura.io',
  //   port: 5001,
  //   protocol: 'https',
  //   headers: {
  //     authorization: auth,
  //   },
  // };
  //const ipfs = create(ifpsConfig);
  // const addDataToIPFS = async (metadata) => {
  //   const ipfsHash = await ipfs.add(metadata);
  //   console.log(ipfsHash.cid, "IPFSHash cid");
  //   console.log(ipfsHash.path, "IPFSHash path");
  //   return ipfsHash.path;
  // };
  const createSvgFromText = (text) => {
    const imgSVG = (
      <svg
        id="mysvg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 350 350"
        fill="#FFC059"
      >
        <rect width="200%" height="80%" fill="black" />
        <text
          x="50%"
          y="25%"
          textAnchor="middle"
          style={{ fontFamily: "Gochi Hand, cursive", fontSize: "28px" }}
        >
          <tspan x="50%" dy="1.2em">
            {text}
          </tspan>
        </text>
      </svg>
    );
    return renderToStaticMarkup(imgSVG);
  };
  const convertSVGToBuffer = async (svgElement) => {
    const svgBuffer = Buffer.from(svgElement);
    return svgBuffer;
  };
  
     
    const onFormSubmit = async(e) => {
      e.preventDefault();
      setLoading(true);
      setName("");
      setTokenPrice("");
      setTokenQuantity("");
      setSymbol("");
  
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(address);
      console.log(signature, "signture from onFormClick button");
      const storyMintContract = new ethers.Contract(
        mintParentContract,
        ContractABI.abi,
        signer
      );
      setLoading(false);
      let transactionCreate = await storyMintContract.createToken(name, symbol);
      console.log(transactionCreate, "createToken");
      let txc = await transactionCreate.wait();
      if (txc) {
        setLoading(false);
        console.log(txc, "Successfully created!");
      }
      let event = txc.events[0];
      console.log(event, "Event");
      // let tokenContractAddress = event?.address;
      let tokenContractAddress = event.args[1];
      let userAdd = localStorage.getItem("currentUserAddress")
      localStorage.setItem("tokenContractAddress", tokenContractAddress);
      // nftData.set("tokenContractAddress", tokenContractAddress);
      // nftData.set("CurrentUser", userAdd);
      //let userAdd = event.args[0]
      setLoading(true);
      let transactionBulkMint = await storyMintContract.bulkMintERC721(
        address,
        tokenContractAddress,
        0,
        tokenQuantity,
        parseInt(tokenPrice),
      );
      let txb = await transactionBulkMint.wait();
      if(txb){
        setLoading(false);
      } 


      

      let tokenIds = await storyMintContract.getAllTokenId(tokenContractAddress);
      let tokenIdArr = [];
      let filesArr = [];
      let imageArr = [];

      tokenIds.map(async (tokenId) => {

        tokenIdArr.push(parseInt(tokenIds.toString()));
        const imgSVG = createSvgFromText(tokenId.toString());
        console.log(imgSVG, "imgSVG")
        const svgImg = await convertSVGToBuffer(imgSVG);
        const ipfsHash = await addDataToIPFS(svgImg);
        console.log(ipfsHash, "ipfsHash from addDataToIPFS function");
        const imageUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
        //console.log(imageUrl,"imageUrl");
        const imageData = { imageUrl: imageUrl, tokenId: tokenId.toString(), sold: false }
        imageArr.push(imageData);
        setImgArr(imageArr);
        console.log(imgArr,"imgArr");
        let Item = {
          name: name ,
          tokenPrice: tokenPrice,
          tokenQuantity: tokenQuantity,
          symbol: symbol,
          imgArr: imageArr
      
        };
        storeFiles(Item)
        localStorage.setItem("name", name);
        localStorage.setItem("tokenPrice", tokenPrice);
        localStorage.setItem("tokenQuantity", tokenQuantity);
        localStorage.setItem("symbol", symbol);
        localStorage.setItem("imageArrss", JSON.stringify(imageData));
        localStorage.setItem("imageArr", imageArr);
        localStorage.setItem("imageUrls", imageUrl);








console.log(Item, "Items in Submit");
        // nftData.set("name", name);
        // nftData.set("symbol", symbol);
        // nftData.set("tokenPrice", tokenPrice);
        // nftData.set("tokenQuantity", tokenQuantity);
        // nftData.set("imageArr", imageArr);
        // nftData.save();
        // console.log(JSON.stringify({
        //  imageArr
        // }), "imageArr of json stringify");

        
        // const blob = new Blob(
        //   [
        //     JSON.stringify({
        //       name,
        //       symbol,
        //       tokenPrice,
        //       tokenQuantity,
        //       imageArr
        //     }),
        //   ],
        //   { type: "application/json" }
        // );
        // const files = [
        //   new File([blob], "data.json"),
        // ];
        // const cid = await client.put(files);
        // console.log(cid, "Cid of files");

        // const path = await addDataToIPFS(files[0]);
        // const uri = `https://ipfs.io/ipfs/${path}`;
        // console.log(uri);

/* --NFT-Port - Upload Metadata to IPFS.*/
        const options = {
          method: 'POST',
          url: 'https://api.nftport.xyz/v0/metadata',
          headers: {'Content-Type': 'application/json', Authorization: '500aad58-3747-4cfb-9e0a-f8919e7c92af'},
          data: {
            name: name,
            description : 'Uploaded Metadata to IPFS',
            file_url: imageUrl,
            attributes : [
              {
                "trait_type" : "symbol",
                "value" : symbol     
              },
              {
                "trait_type" : "tokenPrice",
                "value" : tokenPrice 
              },
              {
                "trait_type" : "tokenQuantity",
                "value" :tokenQuantity 
              },
              {
                "trait_type" : "imageArr",
                "value" : JSON.stringify({
                  imgArr
                })
              }
            ],
           
          }
        };
      
        axios.request(options).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });

       


      });
      
}

  return (
 <div style={{ backgroundColor: "#faf7f8", marginTop: "10%" }} className="col footer-top">
<div className="form-style-2 offset-4 row-8">
<h2>Create your NFT</h2>
<form action="" method="" onSubmit={onFormSubmit}>
<label for="field1">
<span>
Name <span className="required">*</span>
</span>
<input
value={name}
onChange={nameEvent}
placeholder="Your name"
type="text"
class="input-field"
name="field1"
/>
</label>{" "}
<br />
<label for="field1">
<span>
Symbol<span className="required">*</span>
</span>
<input
value={symbol}
onChange={symbolEvent}
placeholder="Enter symbol"
type="text"
class="input-field"
name="field1"
symbol={symbol}
/>
</label>{" "}
<br />
 <label for="field1">
 <span>tokenPrice <span className="required" required>*</span>
 </span>
 <input
value={tokenPrice}
onChange={tokenPriceEvent}
placeholder="Enter a token price"
type="text"
class="input-field"
name="field1"
required
/>
</label>{" "}
<br />
<label for="field1">
<span>
tokenQuantity<span className="required">*</span>
</span>
<input
value={tokenQuantity}
onChange={tokenQuantityEvent}
placeholder="Enter quantity"
type="text"
class="input-field"
name="field1"
/>
 </label>
 <br />
 <input
type="submit"
value={loading ? "Loading...." : "Submit"}
style={{ backgroundColor: "#D82148", marginLeft: "120px" }}
// onClick={notify}
disabled={loading}
/>
 </form>
 </div>
 </div>


      
      
 
    )
}

export default UploadFormNFT