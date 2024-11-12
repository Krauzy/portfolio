from fastapi import APIRouter
from src.services import github_info

router = APIRouter(prefix="/integration")


@router.get('/github-info', tags=['integration'])
def github_post():
    response = github_info()
    return response
