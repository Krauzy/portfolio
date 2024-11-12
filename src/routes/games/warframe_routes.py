from fastapi import APIRouter

from src.services import warframe_world_status

router = APIRouter(prefix="/games/warframe")


@router.get('/world-status', tags=['games'])
def get_warframe_world_status(language: str = 'en'):
    # avoid injection
    lang = 'pt' if language is not 'en' else language

    response = warframe_world_status(lang)
    return response
