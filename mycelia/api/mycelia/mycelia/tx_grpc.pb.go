// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: mycelia/mycelia/tx.proto

package mycelia

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Msg_UpdateParams_FullMethodName       = "/mycelia.mycelia.Msg/UpdateParams"
	Msg_PostRound1Data_FullMethodName     = "/mycelia.mycelia.Msg/PostRound1Data"
	Msg_PostRound2Data_FullMethodName     = "/mycelia.mycelia.Msg/PostRound2Data"
	Msg_PostCommit_FullMethodName         = "/mycelia.mycelia.Msg/PostCommit"
	Msg_PostSignatureShare_FullMethodName = "/mycelia.mycelia.Msg/PostSignatureShare"
	Msg_PostDataRequests_FullMethodName   = "/mycelia.mycelia.Msg/PostDataRequests"
)

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MsgClient interface {
	// UpdateParams defines a (governance) operation for updating the module
	// parameters. The authority defaults to the x/gov module account.
	UpdateParams(ctx context.Context, in *MsgUpdateParams, opts ...grpc.CallOption) (*MsgUpdateParamsResponse, error)
	// PostRound1Data defines an operation for posting round 1 data for each
	// participant. This is the first step in the key generation for forst
	// signatures.
	PostRound1Data(ctx context.Context, in *MsgPostRound1Data, opts ...grpc.CallOption) (*MsgPostRound1DataResponse, error)
	// PostRound2Data defines an operation for posting round 2 data for each
	// participant This is the second step in the key generation for forst
	// signatures.
	PostRound2Data(ctx context.Context, in *MsgPostRound2Data, opts ...grpc.CallOption) (*MsgPostRound2DataResponse, error)
	// PostCommit defines an operation for posting commits for each
	// participant.
	PostCommit(ctx context.Context, in *MsgPostCommit, opts ...grpc.CallOption) (*MsgPostCommitResponse, error)
	// PostSignatureShare defines an operation for posting signature share for each
	// participant.
	PostSignatureShare(ctx context.Context, in *MsgPostSignatureShare, opts ...grpc.CallOption) (*MsgPostSignatureShareResponse, error)
	// PostDataRequests defines an operation for posting data requests.
	PostDataRequests(ctx context.Context, in *MsgPostDataRequests, opts ...grpc.CallOption) (*MsgPostDataRequestsResponse, error)
}

type msgClient struct {
	cc grpc.ClientConnInterface
}

func NewMsgClient(cc grpc.ClientConnInterface) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) UpdateParams(ctx context.Context, in *MsgUpdateParams, opts ...grpc.CallOption) (*MsgUpdateParamsResponse, error) {
	out := new(MsgUpdateParamsResponse)
	err := c.cc.Invoke(ctx, Msg_UpdateParams_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) PostRound1Data(ctx context.Context, in *MsgPostRound1Data, opts ...grpc.CallOption) (*MsgPostRound1DataResponse, error) {
	out := new(MsgPostRound1DataResponse)
	err := c.cc.Invoke(ctx, Msg_PostRound1Data_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) PostRound2Data(ctx context.Context, in *MsgPostRound2Data, opts ...grpc.CallOption) (*MsgPostRound2DataResponse, error) {
	out := new(MsgPostRound2DataResponse)
	err := c.cc.Invoke(ctx, Msg_PostRound2Data_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) PostCommit(ctx context.Context, in *MsgPostCommit, opts ...grpc.CallOption) (*MsgPostCommitResponse, error) {
	out := new(MsgPostCommitResponse)
	err := c.cc.Invoke(ctx, Msg_PostCommit_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) PostSignatureShare(ctx context.Context, in *MsgPostSignatureShare, opts ...grpc.CallOption) (*MsgPostSignatureShareResponse, error) {
	out := new(MsgPostSignatureShareResponse)
	err := c.cc.Invoke(ctx, Msg_PostSignatureShare_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) PostDataRequests(ctx context.Context, in *MsgPostDataRequests, opts ...grpc.CallOption) (*MsgPostDataRequestsResponse, error) {
	out := new(MsgPostDataRequestsResponse)
	err := c.cc.Invoke(ctx, Msg_PostDataRequests_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
// All implementations must embed UnimplementedMsgServer
// for forward compatibility
type MsgServer interface {
	// UpdateParams defines a (governance) operation for updating the module
	// parameters. The authority defaults to the x/gov module account.
	UpdateParams(context.Context, *MsgUpdateParams) (*MsgUpdateParamsResponse, error)
	// PostRound1Data defines an operation for posting round 1 data for each
	// participant. This is the first step in the key generation for forst
	// signatures.
	PostRound1Data(context.Context, *MsgPostRound1Data) (*MsgPostRound1DataResponse, error)
	// PostRound2Data defines an operation for posting round 2 data for each
	// participant This is the second step in the key generation for forst
	// signatures.
	PostRound2Data(context.Context, *MsgPostRound2Data) (*MsgPostRound2DataResponse, error)
	// PostCommit defines an operation for posting commits for each
	// participant.
	PostCommit(context.Context, *MsgPostCommit) (*MsgPostCommitResponse, error)
	// PostSignatureShare defines an operation for posting signature share for each
	// participant.
	PostSignatureShare(context.Context, *MsgPostSignatureShare) (*MsgPostSignatureShareResponse, error)
	// PostDataRequests defines an operation for posting data requests.
	PostDataRequests(context.Context, *MsgPostDataRequests) (*MsgPostDataRequestsResponse, error)
	mustEmbedUnimplementedMsgServer()
}

// UnimplementedMsgServer must be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (UnimplementedMsgServer) UpdateParams(context.Context, *MsgUpdateParams) (*MsgUpdateParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateParams not implemented")
}
func (UnimplementedMsgServer) PostRound1Data(context.Context, *MsgPostRound1Data) (*MsgPostRound1DataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PostRound1Data not implemented")
}
func (UnimplementedMsgServer) PostRound2Data(context.Context, *MsgPostRound2Data) (*MsgPostRound2DataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PostRound2Data not implemented")
}
func (UnimplementedMsgServer) PostCommit(context.Context, *MsgPostCommit) (*MsgPostCommitResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PostCommit not implemented")
}
func (UnimplementedMsgServer) PostSignatureShare(context.Context, *MsgPostSignatureShare) (*MsgPostSignatureShareResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PostSignatureShare not implemented")
}
func (UnimplementedMsgServer) PostDataRequests(context.Context, *MsgPostDataRequests) (*MsgPostDataRequestsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PostDataRequests not implemented")
}
func (UnimplementedMsgServer) mustEmbedUnimplementedMsgServer() {}

// UnsafeMsgServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MsgServer will
// result in compilation errors.
type UnsafeMsgServer interface {
	mustEmbedUnimplementedMsgServer()
}

func RegisterMsgServer(s grpc.ServiceRegistrar, srv MsgServer) {
	s.RegisterService(&Msg_ServiceDesc, srv)
}

func _Msg_UpdateParams_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateParams(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_UpdateParams_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateParams(ctx, req.(*MsgUpdateParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_PostRound1Data_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPostRound1Data)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PostRound1Data(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_PostRound1Data_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PostRound1Data(ctx, req.(*MsgPostRound1Data))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_PostRound2Data_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPostRound2Data)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PostRound2Data(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_PostRound2Data_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PostRound2Data(ctx, req.(*MsgPostRound2Data))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_PostCommit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPostCommit)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PostCommit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_PostCommit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PostCommit(ctx, req.(*MsgPostCommit))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_PostSignatureShare_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPostSignatureShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PostSignatureShare(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_PostSignatureShare_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PostSignatureShare(ctx, req.(*MsgPostSignatureShare))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_PostDataRequests_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPostDataRequests)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PostDataRequests(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Msg_PostDataRequests_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PostDataRequests(ctx, req.(*MsgPostDataRequests))
	}
	return interceptor(ctx, in, info, handler)
}

// Msg_ServiceDesc is the grpc.ServiceDesc for Msg service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Msg_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "mycelia.mycelia.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateParams",
			Handler:    _Msg_UpdateParams_Handler,
		},
		{
			MethodName: "PostRound1Data",
			Handler:    _Msg_PostRound1Data_Handler,
		},
		{
			MethodName: "PostRound2Data",
			Handler:    _Msg_PostRound2Data_Handler,
		},
		{
			MethodName: "PostCommit",
			Handler:    _Msg_PostCommit_Handler,
		},
		{
			MethodName: "PostSignatureShare",
			Handler:    _Msg_PostSignatureShare_Handler,
		},
		{
			MethodName: "PostDataRequests",
			Handler:    _Msg_PostDataRequests_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "mycelia/mycelia/tx.proto",
}
