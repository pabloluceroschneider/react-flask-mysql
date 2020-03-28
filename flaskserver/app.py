import sys
from flask import Flask
sys.path.insert(1, './models/')
sys.path.insert(2, './routes/')
sys.path.insert(3, './routes/products/')
from routes import routes

app = Flask(__name__)

from products import products

routes(app)

if (__name__) == '__main__':
    app.run(debug=True, port=4000)