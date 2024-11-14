from fastapi import APIRouter

from src.services import get_warframe_world_status, get_warframe_stats

router = APIRouter(prefix="/games/warframe")


@router.get('/world-status', tags=['games'])
def get_warframe_game_world_status(language: str = 'en'):
    # avoid injection
    lang = 'pt' if language != 'en' else language

    return get_warframe_world_status(lang)


@router.get('/stats', tags=['games'])
def get_warframe_game_stats():
    return get_warframe_stats()
