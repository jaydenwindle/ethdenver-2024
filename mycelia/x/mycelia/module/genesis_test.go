package mycelia_test

import (
	"testing"

	keepertest "github.com/jaydenwindle/ethdenver-2024/mycelia/testutil/keeper"
	"github.com/jaydenwindle/ethdenver-2024/mycelia/testutil/nullify"
	mycelia "github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/module"
	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MyceliaKeeper(t)
	mycelia.InitGenesis(ctx, k, genesisState)
	got := mycelia.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
