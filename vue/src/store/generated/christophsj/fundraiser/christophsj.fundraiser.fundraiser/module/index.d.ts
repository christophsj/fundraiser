import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateFund } from "./types/fundraiser/tx";
import { MsgCreateProject } from "./types/fundraiser/tx";
import { MsgCreateFund } from "./types/fundraiser/tx";
import { MsgUpdateProject } from "./types/fundraiser/tx";
import { MsgDeleteFund } from "./types/fundraiser/tx";
import { MsgDeleteProject } from "./types/fundraiser/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateFund: (data: MsgUpdateFund) => EncodeObject;
    msgCreateProject: (data: MsgCreateProject) => EncodeObject;
    msgCreateFund: (data: MsgCreateFund) => EncodeObject;
    msgUpdateProject: (data: MsgUpdateProject) => EncodeObject;
    msgDeleteFund: (data: MsgDeleteFund) => EncodeObject;
    msgDeleteProject: (data: MsgDeleteProject) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
