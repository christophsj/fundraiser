// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateFund } from "./types/fundraiser/tx";
import { MsgDeleteProject } from "./types/fundraiser/tx";
import { MsgDeleteFund } from "./types/fundraiser/tx";
import { MsgCreateProject } from "./types/fundraiser/tx";
import { MsgUpdateFund } from "./types/fundraiser/tx";
import { MsgUpdateProject } from "./types/fundraiser/tx";


const types = [
  ["/christophsj.fundraiser.fundraiser.MsgCreateFund", MsgCreateFund],
  ["/christophsj.fundraiser.fundraiser.MsgDeleteProject", MsgDeleteProject],
  ["/christophsj.fundraiser.fundraiser.MsgDeleteFund", MsgDeleteFund],
  ["/christophsj.fundraiser.fundraiser.MsgCreateProject", MsgCreateProject],
  ["/christophsj.fundraiser.fundraiser.MsgUpdateFund", MsgUpdateFund],
  ["/christophsj.fundraiser.fundraiser.MsgUpdateProject", MsgUpdateProject],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgCreateFund: (data: MsgCreateFund): EncodeObject => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgCreateFund", value: data }),
    msgDeleteProject: (data: MsgDeleteProject): EncodeObject => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgDeleteProject", value: data }),
    msgDeleteFund: (data: MsgDeleteFund): EncodeObject => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgDeleteFund", value: data }),
    msgCreateProject: (data: MsgCreateProject): EncodeObject => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgCreateProject", value: data }),
    msgUpdateFund: (data: MsgUpdateFund): EncodeObject => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgUpdateFund", value: data }),
    msgUpdateProject: (data: MsgUpdateProject): EncodeObject => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgUpdateProject", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
