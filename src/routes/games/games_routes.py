from fastapi import APIRouter

from src.services.runners import run_steam_info_collector

router = APIRouter(prefix="/games")


@router.get('/steam-info', tags=['games'])
async def get_steam_info():
    return await run_steam_info_collector()
