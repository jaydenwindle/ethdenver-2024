/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';

export default function useMyceliaMycelia() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.MyceliaMycelia.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryRound1Data = ( options: any) => {
    const key = { type: 'QueryRound1Data',  };    
    return useQuery([key], () => {
      return  client.MyceliaMycelia.query.queryRound1Data().then( res => res.data );
    }, options);
  }
  
  const QueryRound2Data = (query: any, options: any) => {
    const key = { type: 'QueryRound2Data', query };    
    return useQuery([key], () => {
      const {query } = key
      return  client.MyceliaMycelia.query.queryRound2Data(query ?? undefined).then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QueryRound1Data,QueryRound2Data,
  }
}
