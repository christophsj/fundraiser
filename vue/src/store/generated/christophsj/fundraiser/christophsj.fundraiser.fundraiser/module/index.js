// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateFund } from "./types/fundraiser/tx";
import { MsgCreateProject } from "./types/fundraiser/tx";
import { MsgUpdateProject } from "./types/fundraiser/tx";
import { MsgDeleteFund } from "./types/fundraiser/tx";
import { MsgUpdateFund } from "./types/fundraiser/tx";
import { MsgDeleteProject } from "./types/fundraiser/tx";
const types = [
    ["/christophsj.fundraiser.fundraiser.MsgCreateFund", MsgCreateFund],
    ["/christophsj.fundraiser.fundraiser.MsgCreateProject", MsgCreateProject],
    ["/christophsj.fundraiser.fundraiser.MsgUpdateProject", MsgUpdateProject],
    ["/christophsj.fundraiser.fundraiser.MsgDeleteFund", MsgDeleteFund],
    ["/christophsj.fundraiser.fundraiser.MsgUpdateFund", MsgUpdateFund],
    ["/christophsj.fundraiser.fundraiser.MsgDeleteProject", MsgDeleteProject],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreateFund: (data) => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgCreateFund", value: data }),
        msgCreateProject: (data) => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgCreateProject", value: data }),
        msgUpdateProject: (data) => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgUpdateProject", value: data }),
        msgDeleteFund: (data) => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgDeleteFund", value: data }),
        msgUpdateFund: (data) => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgUpdateFund", value: data }),
        msgDeleteProject: (data) => ({ typeUrl: "/christophsj.fundraiser.fundraiser.MsgDeleteProject", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
