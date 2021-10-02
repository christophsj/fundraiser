import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateProject } from "./types/fundraiser/tx";
import { MsgDeleteProject } from "./types/fundraiser/tx";
import { MsgUpdateProject } from "./types/fundraiser/tx";
import { MsgCreateFund } from "./types/fundraiser/tx";
import { MsgDeleteFund } from "./types/fundraiser/tx";
import { MsgUpdateFund } from "./types/fundraiser/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateProject: (data: MsgCreateProject) => EncodeObject;
    msgDeleteProject: (data: MsgDeleteProject) => EncodeObject;
    msgUpdateProject: (data: MsgUpdateProject) => EncodeObject;
    msgCreateFund: (data: MsgCreateFund) => EncodeObject;
    msgDeleteFund: (data: MsgDeleteFund) => EncodeObject;
    msgUpdateFund: (data: MsgUpdateFund) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
