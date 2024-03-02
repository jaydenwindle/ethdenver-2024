import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/mycelia.mycelia.MsgPostRound1Data", MsgPostRound1Data],
    ["/mycelia.mycelia.QueryRound1Data", QueryRound1Data],
    ["/mycelia.mycelia.QueryRound2Data", QueryRound2Data],
    ["/mycelia.mycelia.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/mycelia.mycelia.QueryParamsRequest", QueryParamsRequest],
    ["/mycelia.mycelia.QueryRound1DataResponse", QueryRound1DataResponse],
    ["/mycelia.mycelia.MsgPostRound2Data", MsgPostRound2Data],
    ["/mycelia.mycelia.QueryParamsResponse", QueryParamsResponse],
    ["/mycelia.mycelia.Params", Params],
    ["/mycelia.mycelia.GenesisState", GenesisState],
    ["/mycelia.mycelia.MsgUpdateParams", MsgUpdateParams],
    ["/mycelia.mycelia.MsgPostRound1DataResponse", MsgPostRound1DataResponse],
    ["/mycelia.mycelia.MsgPostRound2DataResponse", MsgPostRound2DataResponse],
    ["/mycelia.mycelia.QueryRound2DataResponse", QueryRound2DataResponse],
    
];

export { msgTypes }