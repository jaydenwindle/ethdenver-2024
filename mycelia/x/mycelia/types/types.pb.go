// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: mycelia/mycelia/types.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/tx/amino"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type STATUS int32

const (
	STATUS_REQUESTED STATUS = 0
	STATUS_ATTESTED  STATUS = 1
	STATUS_SIGNED    STATUS = 2
)

var STATUS_name = map[int32]string{
	0: "REQUESTED",
	1: "ATTESTED",
	2: "SIGNED",
}

var STATUS_value = map[string]int32{
	"REQUESTED": 0,
	"ATTESTED":  1,
	"SIGNED":    2,
}

func (x STATUS) String() string {
	return proto.EnumName(STATUS_name, int32(x))
}

func (STATUS) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_c3db94ad5e44b750, []int{0}
}

// DataRequests defines the data requests posted to the state.
type DataRequest struct {
	Id             uint64   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Payload        *PayLoad `protobuf:"bytes,2,opt,name=payload,proto3" json:"payload,omitempty"`
	Status         STATUS   `protobuf:"varint,3,opt,name=status,proto3,enum=mycelia.mycelia.STATUS" json:"status,omitempty"`
	CommitCount    uint64   `protobuf:"varint,4,opt,name=commit_count,json=commitCount,proto3" json:"commit_count,omitempty"`
	SignatureCount uint64   `protobuf:"varint,5,opt,name=signature_count,json=signatureCount,proto3" json:"signature_count,omitempty"`
}

func (m *DataRequest) Reset()         { *m = DataRequest{} }
func (m *DataRequest) String() string { return proto.CompactTextString(m) }
func (*DataRequest) ProtoMessage()    {}
func (*DataRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_c3db94ad5e44b750, []int{0}
}
func (m *DataRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DataRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DataRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DataRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DataRequest.Merge(m, src)
}
func (m *DataRequest) XXX_Size() int {
	return m.Size()
}
func (m *DataRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DataRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DataRequest proto.InternalMessageInfo

func (m *DataRequest) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *DataRequest) GetPayload() *PayLoad {
	if m != nil {
		return m.Payload
	}
	return nil
}

func (m *DataRequest) GetStatus() STATUS {
	if m != nil {
		return m.Status
	}
	return STATUS_REQUESTED
}

func (m *DataRequest) GetCommitCount() uint64 {
	if m != nil {
		return m.CommitCount
	}
	return 0
}

func (m *DataRequest) GetSignatureCount() uint64 {
	if m != nil {
		return m.SignatureCount
	}
	return 0
}

type PayLoad struct {
	ChainId          uint64 `protobuf:"varint,1,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	ContractAddress  string `protobuf:"bytes,2,opt,name=contract_address,json=contractAddress,proto3" json:"contract_address,omitempty"`
	FunctionSignture string `protobuf:"bytes,3,opt,name=function_signture,json=functionSignture,proto3" json:"function_signture,omitempty"`
	Output           []byte `protobuf:"bytes,4,opt,name=output,proto3" json:"output,omitempty"`
}

func (m *PayLoad) Reset()         { *m = PayLoad{} }
func (m *PayLoad) String() string { return proto.CompactTextString(m) }
func (*PayLoad) ProtoMessage()    {}
func (*PayLoad) Descriptor() ([]byte, []int) {
	return fileDescriptor_c3db94ad5e44b750, []int{1}
}
func (m *PayLoad) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PayLoad) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PayLoad.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PayLoad) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PayLoad.Merge(m, src)
}
func (m *PayLoad) XXX_Size() int {
	return m.Size()
}
func (m *PayLoad) XXX_DiscardUnknown() {
	xxx_messageInfo_PayLoad.DiscardUnknown(m)
}

var xxx_messageInfo_PayLoad proto.InternalMessageInfo

func (m *PayLoad) GetChainId() uint64 {
	if m != nil {
		return m.ChainId
	}
	return 0
}

func (m *PayLoad) GetContractAddress() string {
	if m != nil {
		return m.ContractAddress
	}
	return ""
}

func (m *PayLoad) GetFunctionSignture() string {
	if m != nil {
		return m.FunctionSignture
	}
	return ""
}

func (m *PayLoad) GetOutput() []byte {
	if m != nil {
		return m.Output
	}
	return nil
}

func init() {
	proto.RegisterEnum("mycelia.mycelia.STATUS", STATUS_name, STATUS_value)
	proto.RegisterType((*DataRequest)(nil), "mycelia.mycelia.DataRequest")
	proto.RegisterType((*PayLoad)(nil), "mycelia.mycelia.PayLoad")
}

func init() { proto.RegisterFile("mycelia/mycelia/types.proto", fileDescriptor_c3db94ad5e44b750) }

var fileDescriptor_c3db94ad5e44b750 = []byte{
	// 453 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x92, 0xc1, 0x6e, 0xd3, 0x30,
	0x1c, 0xc6, 0xeb, 0x32, 0xd2, 0xf5, 0xdf, 0xd2, 0x76, 0x16, 0x82, 0x6c, 0x48, 0x51, 0x19, 0x07,
	0xca, 0x10, 0x09, 0x04, 0x4e, 0x3b, 0x20, 0x15, 0x5a, 0xa1, 0x49, 0x08, 0x41, 0x92, 0x49, 0x88,
	0x4b, 0xe5, 0xc5, 0xa6, 0x35, 0x6a, 0xec, 0x90, 0x38, 0x40, 0x5e, 0x81, 0x13, 0x8f, 0xc2, 0x81,
	0x87, 0xe0, 0xd8, 0x23, 0x47, 0xd4, 0x1e, 0x78, 0x00, 0x5e, 0x00, 0xc5, 0x49, 0x2a, 0xb4, 0x5e,
	0x62, 0xff, 0x7f, 0xf9, 0x2c, 0x7f, 0xdf, 0x27, 0xc3, 0xad, 0x28, 0x0f, 0xd9, 0x92, 0x13, 0xa7,
	0x5e, 0x55, 0x1e, 0xb3, 0xd4, 0x8e, 0x13, 0xa9, 0x24, 0xee, 0x57, 0xd0, 0xae, 0xd6, 0xa3, 0x03,
	0x12, 0x71, 0x21, 0x1d, 0xfd, 0x2d, 0x35, 0x47, 0xd7, 0xe7, 0x72, 0x2e, 0xf5, 0xd6, 0x29, 0x76,
	0x25, 0x3d, 0xfe, 0x8b, 0xa0, 0x33, 0x21, 0x8a, 0x78, 0xec, 0x63, 0xc6, 0x52, 0x85, 0x7b, 0xd0,
	0xe4, 0xd4, 0x44, 0x43, 0x34, 0xda, 0xf3, 0x9a, 0x9c, 0x62, 0x17, 0x5a, 0x31, 0xc9, 0x97, 0x92,
	0x50, 0xb3, 0x39, 0x44, 0xa3, 0x8e, 0x6b, 0xda, 0x97, 0xee, 0xb2, 0x5f, 0x93, 0xfc, 0xa5, 0x24,
	0xd4, 0xab, 0x85, 0xd8, 0x01, 0x23, 0x55, 0x44, 0x65, 0xa9, 0x79, 0x65, 0x88, 0x46, 0x3d, 0xf7,
	0xe6, 0xce, 0x11, 0x3f, 0x18, 0x07, 0xe7, 0xbe, 0x57, 0xc9, 0xf0, 0x6d, 0xe8, 0x86, 0x32, 0x8a,
	0xb8, 0x9a, 0x85, 0x32, 0x13, 0xca, 0xdc, 0xd3, 0xd7, 0x77, 0x4a, 0xf6, 0xbc, 0x40, 0xf8, 0x2e,
	0xf4, 0x53, 0x3e, 0x17, 0x44, 0x65, 0x09, 0xab, 0x54, 0x57, 0xb5, 0xaa, 0xb7, 0xc5, 0x5a, 0x78,
	0x7a, 0xe7, 0xeb, 0x9f, 0xef, 0x27, 0x56, 0x5d, 0xd2, 0x97, 0x6d, 0x5d, 0xff, 0x85, 0x4c, 0x8f,
	0x7f, 0x20, 0x68, 0x55, 0xb6, 0xf1, 0x21, 0xec, 0x87, 0x0b, 0xc2, 0xc5, 0x6c, 0x9b, 0xbb, 0xa5,
	0xe7, 0x33, 0x8a, 0xef, 0xc1, 0x20, 0x94, 0x42, 0x25, 0x24, 0x54, 0x33, 0x42, 0x69, 0xc2, 0xd2,
	0x54, 0xb7, 0xd0, 0xf6, 0xfa, 0x35, 0x1f, 0x97, 0x18, 0xdf, 0x87, 0x83, 0xf7, 0x99, 0x08, 0x15,
	0x97, 0x62, 0x56, 0x38, 0x2a, 0x0c, 0xe9, 0xf8, 0x6d, 0x6f, 0x50, 0xff, 0xf0, 0x2b, 0x8e, 0x6f,
	0x80, 0x21, 0x33, 0x15, 0x67, 0x65, 0xd2, 0xae, 0x57, 0x4d, 0xa7, 0x56, 0xe1, 0xfd, 0x70, 0xd7,
	0x7b, 0x65, 0xf5, 0xe4, 0x11, 0x18, 0x65, 0x73, 0xf8, 0x1a, 0xb4, 0xbd, 0xe9, 0x9b, 0xf3, 0xa9,
	0x1f, 0x4c, 0x27, 0x83, 0x06, 0xee, 0xc2, 0xfe, 0x38, 0x08, 0xca, 0x09, 0x61, 0x00, 0xc3, 0x3f,
	0x7b, 0xf1, 0x6a, 0x3a, 0x19, 0x34, 0x9f, 0xbd, 0xfd, 0xb9, 0xb6, 0xd0, 0x6a, 0x6d, 0xa1, 0xdf,
	0x6b, 0x0b, 0x7d, 0xdb, 0x58, 0x8d, 0xd5, 0xc6, 0x6a, 0xfc, 0xda, 0x58, 0x8d, 0x77, 0x4f, 0xe7,
	0x5c, 0x2d, 0xb2, 0x0b, 0x3b, 0x94, 0x91, 0xf3, 0x81, 0xe4, 0x94, 0x89, 0xcf, 0x5c, 0xd0, 0x25,
	0x73, 0x98, 0x5a, 0x50, 0x26, 0x3e, 0xb1, 0xe4, 0x81, 0xfb, 0xd0, 0x7d, 0xe2, 0xec, 0xda, 0xd1,
	0x2f, 0xef, 0xc2, 0xd0, 0x0f, 0xe8, 0xf1, 0xbf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x05, 0xa3, 0x33,
	0x29, 0x99, 0x02, 0x00, 0x00,
}

func (m *DataRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DataRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DataRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.SignatureCount != 0 {
		i = encodeVarintTypes(dAtA, i, uint64(m.SignatureCount))
		i--
		dAtA[i] = 0x28
	}
	if m.CommitCount != 0 {
		i = encodeVarintTypes(dAtA, i, uint64(m.CommitCount))
		i--
		dAtA[i] = 0x20
	}
	if m.Status != 0 {
		i = encodeVarintTypes(dAtA, i, uint64(m.Status))
		i--
		dAtA[i] = 0x18
	}
	if m.Payload != nil {
		{
			size, err := m.Payload.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTypes(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintTypes(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *PayLoad) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PayLoad) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *PayLoad) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Output) > 0 {
		i -= len(m.Output)
		copy(dAtA[i:], m.Output)
		i = encodeVarintTypes(dAtA, i, uint64(len(m.Output)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.FunctionSignture) > 0 {
		i -= len(m.FunctionSignture)
		copy(dAtA[i:], m.FunctionSignture)
		i = encodeVarintTypes(dAtA, i, uint64(len(m.FunctionSignture)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ContractAddress) > 0 {
		i -= len(m.ContractAddress)
		copy(dAtA[i:], m.ContractAddress)
		i = encodeVarintTypes(dAtA, i, uint64(len(m.ContractAddress)))
		i--
		dAtA[i] = 0x12
	}
	if m.ChainId != 0 {
		i = encodeVarintTypes(dAtA, i, uint64(m.ChainId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTypes(dAtA []byte, offset int, v uint64) int {
	offset -= sovTypes(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DataRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTypes(uint64(m.Id))
	}
	if m.Payload != nil {
		l = m.Payload.Size()
		n += 1 + l + sovTypes(uint64(l))
	}
	if m.Status != 0 {
		n += 1 + sovTypes(uint64(m.Status))
	}
	if m.CommitCount != 0 {
		n += 1 + sovTypes(uint64(m.CommitCount))
	}
	if m.SignatureCount != 0 {
		n += 1 + sovTypes(uint64(m.SignatureCount))
	}
	return n
}

func (m *PayLoad) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ChainId != 0 {
		n += 1 + sovTypes(uint64(m.ChainId))
	}
	l = len(m.ContractAddress)
	if l > 0 {
		n += 1 + l + sovTypes(uint64(l))
	}
	l = len(m.FunctionSignture)
	if l > 0 {
		n += 1 + l + sovTypes(uint64(l))
	}
	l = len(m.Output)
	if l > 0 {
		n += 1 + l + sovTypes(uint64(l))
	}
	return n
}

func sovTypes(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTypes(x uint64) (n int) {
	return sovTypes(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DataRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: DataRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DataRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Payload", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Payload == nil {
				m.Payload = &PayLoad{}
			}
			if err := m.Payload.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			m.Status = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Status |= STATUS(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CommitCount", wireType)
			}
			m.CommitCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CommitCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SignatureCount", wireType)
			}
			m.SignatureCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SignatureCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTypes(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *PayLoad) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: PayLoad: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PayLoad: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainId", wireType)
			}
			m.ChainId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ChainId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContractAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ContractAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FunctionSignture", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FunctionSignture = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Output", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthTypes
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTypes
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Output = append(m.Output[:0], dAtA[iNdEx:postIndex]...)
			if m.Output == nil {
				m.Output = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTypes(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTypes
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTypes(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTypes
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTypes
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTypes
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTypes
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTypes
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTypes        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTypes          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTypes = fmt.Errorf("proto: unexpected end of group")
)