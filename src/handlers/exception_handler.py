from fastapi import HTTPException, Request
from fastapi.responses import JSONResponse


def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "status_code": exc.status_code,
            "message": "A business error occurred",
            "details": exc.detail,
            "path": str(request.url),
        },
    )


def generic_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    return JSONResponse(
        status_code=500,
        content={
            "message": "An unexpected error occurred",
            "details": str(exc),
            "path": str(request.url),
        },
    )
