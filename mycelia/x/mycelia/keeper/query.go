package keeper

import (
	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
)

var _ types.QueryServer = Keeper{}
