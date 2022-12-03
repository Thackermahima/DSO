
import React, { useState, createContext, useEffect } from "react";
import { Web3Storage } from 'web3.storage';
import axios from "axios";

export const StoreDataContext = createContext();
export const  StoreDataContextProvider = (props) => {

    const apitoken = process.env.WEB_STORAGE_API_TOKEN;
    const client = new Web3Storage({ token: apitoken });
    const [NewData, setData] = useState([]);
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
        let files = addData(Item)
        console.log(client, "client");
        const cid = await client.put(files);
        console.log("stored files with cid", cid);
        axios.get(`https://${cid}.ipfs.infura-ipfs.io/data.json`)
            .then(function (response) {
                array.push(response.data);
                setData(array);
            })
            .catch(function (error) {
                console.log(error);
            })

        return cid;
    }
    console.log(NewData);
   

   



    return (
        <StoreDataContext.Provider
            value={{
                addData,
                storeFiles,
                NewData
            }}
        >
            {props.children}
        </StoreDataContext.Provider>
    );
}