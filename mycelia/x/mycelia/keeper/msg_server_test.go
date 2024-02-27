package keeper_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/jaydenwindle/ethdenver-2024/mycelia/testutil/keeper"
	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/keeper"
	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
)

func setupMsgServer(t testing.TB) (keeper.Keeper, types.MsgServer, context.Context) {
	k, ctx := keepertest.MyceliaKeeper(t)
	return k, keeper.NewMsgServerImpl(k), ctx
}

func TestMsgServer(t *testing.T) {
	k, ms, ctx := setupMsgServer(t)
	require.NotNil(t, ms)
	require.NotNil(t, ctx)
	require.NotEmpty(t, k)
}
