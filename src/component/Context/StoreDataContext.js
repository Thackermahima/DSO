
import React, { useState, createContext, useEffect } from "react";
import { Web3Storage } from 'web3.storage';
import axios from "axios";
import {Buffer} from 'buffer';
import { create } from "ipfs-http-client";

export const StoreDataContext = createContext();
export const  StoreDataContextProvider = (props) => {

    // const apitoken = process.env.REACT_APP_WEB_STORAGE_API_TOKEN;
    // const client = new Web3Storage({ token: apitoken });
    const [NewData, setData] = useState([]);
    const projectId = process.env.REACT_APP_INFURA_PROJECT_KEY;
  const projectSecret = process.env.REACT_APP_INFURA_APP_SECRET_KEY;
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
  const ifpsConfig = {
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  };
  const client = create('https://ipfs.infura.io:5001/api/v0');

  const ipfs = create(ifpsConfig);
  const addDataToIPFS = async (metadata) => {
    const ipfsHash = await ipfs.add(metadata);
    console.log(ipfsHash.cid, "IPFSHash cid");
    console.log(ipfsHash.path, "IPFSHash path");
    return ipfsHash.path;
  };
    function addData(Item) {
        console.log(Item, "Item")
        const blob = new Blob(
            [
                JSON.stringify(Item),
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "data.json"),
        ];
        console.log(files);
        return files;

    }
    async function storeFiles(Item) {
        var array = [];
        // let files = addData(Item);
        const blob = new Blob(
            [
                JSON.stringify(Item),
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "data.json"),
        ];
        console.log(files);
        //const cid = await i.add(files);
        //console.log("stored files with cid", cid);
        const path = await addDataToIPFS(files[0]);
        const uri = `https://ipfs.io/ipfs/${path}`;
         console.log(uri, " uri from storeFiles");
        axios.get(uri)
            .then(function (response) {
                console.log(response.data,"response data from storeFiles function")
                array.push(response.data);
                console.log(array,"array from storeFiles");
                setData(array);
                console.log(NewData, "Newdata after setData(array) code")
            })
            .catch(function (error) {
                console.log(error);
            })
console.log(NewData, "NewData from storeFiles function"); 

        //return cid;
    }
    console.log(NewData, "NewdData from StoredDataContext");
    localStorage.setItem("Data", NewData);

//    async function storeInIPFS(){
//      const blob = new Blob(
//           [
//             JSON.stringify({
//               name,
//               symbol,
//               tokenPrice,
//               tokenQuantity,
//               imageArr
//             }),
//           ],
//           { type: "application/json" }
//         );
//         const files = [
//           new File([blob], "data.json"),
//         ];
//         const cid = await  .put(files);
//         console.log(cid, "Cid of files");

//         const path = await addDataToIPFS(files[0]);
//         const uri = `https://ipfs.io/ipfs/${path}`;
//         console.log(uri);


//    }

   



    return (
        <StoreDataContext.Provider
            value={{
                addData,
                storeFiles,
                NewData,
                addDataToIPFS
            }}
        >
            {props.children}
        </StoreDataContext.Provider>
    );
}