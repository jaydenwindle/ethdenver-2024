package types

const (
	// ModuleName defines the module name
	ModuleName = "mycelia"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_mycelia"
)

var (
	ParamsKey = []byte("p_mycelia")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
