// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgPostRound1Data } from "./types/mycelia/mycelia/tx";
import { QueryRound1Data } from "./types/mycelia/mycelia/query";
import { QueryRound2Data } from "./types/mycelia/mycelia/query";
import { MsgUpdateParamsResponse } from "./types/mycelia/mycelia/tx";
import { QueryParamsRequest } from "./types/mycelia/mycelia/query";
import { QueryRound1DataResponse } from "./types/mycelia/mycelia/query";
import { MsgPostRound2Data } from "./types/mycelia/mycelia/tx";
import { QueryParamsResponse } from "./types/mycelia/mycelia/query";
import { Params } from "./types/mycelia/mycelia/params";
import { GenesisState } from "./types/mycelia/mycelia/genesis";
import { MsgUpdateParams } from "./types/mycelia/mycelia/tx";
import { MsgPostRound1DataResponse } from "./types/mycelia/mycelia/tx";
import { MsgPostRound2DataResponse } from "./types/mycelia/mycelia/tx";
import { QueryRound2DataResponse } from "./types/mycelia/mycelia/query";
export { MsgPostRound1Data, QueryRound1Data, QueryRound2Data, MsgUpdateParamsResponse, QueryParamsRequest, QueryRound1DataResponse, MsgPostRound2Data, QueryParamsResponse, Params, GenesisState, MsgUpdateParams, MsgPostRound1DataResponse, MsgPostRound2DataResponse, QueryRound2DataResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendMsgPostRound1Data({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgPostRound1Data: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgPostRound1Data({ value: MsgPostRound1Data.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgPostRound1Data: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryRound1Data({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryRound1Data: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryRound1Data({ value: QueryRound1Data.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryRound1Data: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryRound2Data({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryRound2Data: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryRound2Data({ value: QueryRound2Data.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryRound2Data: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryRound1DataResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryRound1DataResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryRound1DataResponse({ value: QueryRound1DataResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryRound1DataResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgPostRound2Data({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgPostRound2Data: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgPostRound2Data({ value: MsgPostRound2Data.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgPostRound2Data: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgPostRound1DataResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgPostRound1DataResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgPostRound1DataResponse({ value: MsgPostRound1DataResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgPostRound1DataResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgPostRound2DataResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgPostRound2DataResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgPostRound2DataResponse({ value: MsgPostRound2DataResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgPostRound2DataResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryRound2DataResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryRound2DataResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryRound2DataResponse({ value: QueryRound2DataResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryRound2DataResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        msgPostRound1Data({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.MsgPostRound1Data", value: MsgPostRound1Data.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgPostRound1Data: Could not create message: ' + e.message);
            }
        },
        queryRound1Data({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.QueryRound1Data", value: QueryRound1Data.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryRound1Data: Could not create message: ' + e.message);
            }
        },
        queryRound2Data({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.QueryRound2Data", value: QueryRound2Data.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryRound2Data: Could not create message: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        queryRound1DataResponse({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.QueryRound1DataResponse", value: QueryRound1DataResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryRound1DataResponse: Could not create message: ' + e.message);
            }
        },
        msgPostRound2Data({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.MsgPostRound2Data", value: MsgPostRound2Data.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgPostRound2Data: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        msgPostRound1DataResponse({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.MsgPostRound1DataResponse", value: MsgPostRound1DataResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgPostRound1DataResponse: Could not create message: ' + e.message);
            }
        },
        msgPostRound2DataResponse({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.MsgPostRound2DataResponse", value: MsgPostRound2DataResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgPostRound2DataResponse: Could not create message: ' + e.message);
            }
        },
        queryRound2DataResponse({ value }) {
            try {
                return { typeUrl: "/mycelia.mycelia.QueryRound2DataResponse", value: QueryRound2DataResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryRound2DataResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            MyceliaMycelia: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
