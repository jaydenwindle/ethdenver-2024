package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/jaydenwindle/ethdenver-2024/mycelia/testutil/keeper"
	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.MyceliaKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
