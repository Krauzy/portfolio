from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def get_on():
    return {
        "service": True
    }
