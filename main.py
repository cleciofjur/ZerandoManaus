from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.gameficacao import router as gameficacao_router

jogo = FastAPI(title="ZerandoManaus")

jogo.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

jogo.include_router(gameficacao_router)