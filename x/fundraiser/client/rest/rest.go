package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers fundraiser-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/fundraiser/funds/{id}", getFundHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/fundraiser/funds", listFundHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/fundraiser/projects/{id}", getProjectHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/fundraiser/projects", listProjectHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/fundraiser/funds", createFundHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/fundraiser/funds/{id}", updateFundHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/fundraiser/funds/{id}", deleteFundHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/fundraiser/projects", createProjectHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/fundraiser/projects/{id}", updateProjectHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/fundraiser/projects/{id}", deleteProjectHandler(clientCtx)).Methods("POST")

}
