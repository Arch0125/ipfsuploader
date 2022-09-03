import React, { useState } from 'react';
import { NFTStorage, File } from 'nft.storage'
import mime from 'mime';
import fs from 'fs';
import path from 'path';

const Uploader = () => {

    const [filePath, setFilePath] = React.useState(null);
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM0QThkRENiMGM1MjQwQTJDYjdBMzIwZGRGMDg5QUJhMERDNDVDZkYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MjE5NTgzMzEwMywibmFtZSI6InRwZyJ9.ncleHk0ziyvHC-8RSKo07nxdgJ9OidmguX_YzX-L0p4'

    const storeNFT=async(filePath,name,description)=>{

        console.log(filePath instanceof File)
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

        var res = nftstorage.store({
            image : filePath,
            name,
            description,
        }).then(console.log)

        
    }

    return ( 
        <div>
            <input type={'file'} onChange={(e)=>setFilePath(e.target.files[0])} />
            <button onClick={()=>storeNFT(filePath,name,description)} >Upload to IPFS</button>
        </div>
     );
}
 
export default Uploader;