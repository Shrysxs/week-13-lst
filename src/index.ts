require('dotenv').config();
import express from 'express';
import { burnTokens, mintTokens, sendNativeTokens } from './mintTokens';

const app = express();

const HELIUS_RESPONSE = {
    nativeTransfers": [ { 
    "amount": 72936000000,
    "fromUserAccount": "CKs1E69a2e9TmH4mKKLrXFF8kD3ZnwKjoEuXa6sz9WqX", 
    "toUserAccount": "AAaTGaA3uVqikfVEwoSG7EwkCb4bBDsMEyueiVUS5CaU"
}

app.post('/helius', async(req, res) => {
    const incomingTx = HELIUS_RESPONSE.nativeTransfers.find(x => x.toUserAccount === VALUT)
    if (!incomingTx){
       res.json({message: "processed"})
       return
    }
    const fromAddress = incomingTx.fromUserAccount;
    const toAddress = VALUT;
    const amount = incomingTx.amount;
    const type = "received_native_sol";
      await mintTokens(fromAddress, toAddress, amount);
    //if (type === "received_native_sol") {
      
   // } else {
        // What could go wrong here?
      //  await burnTokens(fromAddress, toAddress, amount);
        //await sendNativeTokens(fromAddress, toAddress, amount);
    //}

    res.send('Transaction successful');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});