export interface Any {
    "@type"?: string;
}
export interface Status {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: {
        "@type"?: string;
    }[];
}
export interface Class {
    id?: string;
    name?: string;
    symbol?: string;
    description?: string;
    uri?: string;
    uri_hash?: string;
    data?: {
        "@type"?: string;
    };
}
export interface NFT {
    class_id?: string;
    id?: string;
    uri?: string;
    uri_hash?: string;
    data?: {
        "@type"?: string;
    };
}
export interface PageRequest {
    /** @format byte */
    key?: string;
    /** @format uint64 */
    offset?: string;
    /** @format uint64 */
    limit?: string;
    count_total?: boolean;
    reverse?: boolean;
}
export interface PageResponse {
    /** @format byte */
    next_key?: string;
    /** @format uint64 */
    total?: string;
}
export interface QueryBalanceResponse {
    /** @format uint64 */
    amount?: string;
}
export interface QueryClassResponse {
    class?: {
        id?: string;
        name?: string;
        symbol?: string;
        description?: string;
        uri?: string;
        uri_hash?: string;
        data?: {
            "@type"?: string;
        };
    };
}
export interface QueryClassesResponse {
    classes?: {
        id?: string;
        name?: string;
        symbol?: string;
        description?: string;
        uri?: string;
        uri_hash?: string;
        data?: {
            "@type"?: string;
        };
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryNFTResponse {
    nft?: {
        class_id?: string;
        id?: string;
        uri?: string;
        uri_hash?: string;
        data?: {
            "@type"?: string;
        };
    };
}
export interface QueryNFTsResponse {
    nfts?: {
        class_id?: string;
        id?: string;
        uri?: string;
        uri_hash?: string;
        data?: {
            "@type"?: string;
        };
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryOwnerResponse {
    owner?: string;
}
export interface QuerySupplyResponse {
    /** @format uint64 */
    amount?: string;
}
export type MsgSendResponse = object;
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title HTTP API Console cosmos.nft.v1beta1
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBalance
     * @request GET:/cosmos/nft/v1beta1/balance/{owner}/{class_id}
     */
    queryBalance: (owner: string, classId: string, params?: RequestParams) => Promise<AxiosResponse<{
        amount?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryClasses
     * @request GET:/cosmos/nft/v1beta1/classes
     */
    queryClasses: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: {
                "@type"?: string;
            };
        }[];
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryClass
     * @request GET:/cosmos/nft/v1beta1/classes/{class_id}
     */
    queryClass: (classId: string, params?: RequestParams) => Promise<AxiosResponse<{
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: {
                "@type"?: string;
            };
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryNfTs
     * @request GET:/cosmos/nft/v1beta1/nfts
     */
    queryNFTs: (query?: {
        class_id?: string;
        owner?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        nfts?: {
            class_id?: string;
            id?: string;
            uri?: string;
            uri_hash?: string;
            data?: {
                "@type"?: string;
            };
        }[];
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryNft
     * @request GET:/cosmos/nft/v1beta1/nfts/{class_id}/{id}
     */
    queryNFT: (classId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<{
        nft?: {
            class_id?: string;
            id?: string;
            uri?: string;
            uri_hash?: string;
            data?: {
                "@type"?: string;
            };
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOwner
     * @request GET:/cosmos/nft/v1beta1/owner/{class_id}/{id}
     */
    queryOwner: (classId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<{
        owner?: string;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySupply
     * @request GET:/cosmos/nft/v1beta1/supply/{class_id}
     */
    querySupply: (classId: string, params?: RequestParams) => Promise<AxiosResponse<{
        amount?: string;
    }>>;
}
