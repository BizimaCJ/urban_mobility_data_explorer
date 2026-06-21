from flask import Flask
from flask_cors import CORS
from config import db_config
from routes import api_blueprint

app = Flask(__name__)
CORS(app)

# Register API blueprint
app.register_blueprint(api_blueprint)

@app.before_request
def before_request():
    if not db_config.connection:
        db_config.connect()

if __name__ == '__main__':
    db_config.connect()
    app.run(debug=True, host='0.0.0.0', port=5000)