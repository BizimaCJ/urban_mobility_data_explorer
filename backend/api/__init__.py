# API 
from flask import Flask

def create_app():
    """Create and configure the Flask app"""
    app = Flask(__name__)
    from .routes import api_blueprint
    app.register_blueprint(api_blueprint)
    return app