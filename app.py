from fastapi import FastAPI, HTTPException
from src.routes import root_router, warframe_router, integration_router
from src.handlers import http_exception_handler, generic_exception_handler

app = FastAPI()

# root
app.include_router(root_router, prefix="/api")

# integrations
app.include_router(integration_router, prefix="/api")

# games
app.include_router(warframe_router, prefix="/api")

# exception handlers
app.add_exception_handler(HTTPException, http_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)


if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app)
