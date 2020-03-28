import sys
import flask
from productRoutes import productRoutes
from products import products


def routes(app):
    
    #PING
    @app.route('/')
    def ping():
        return flask.render_template("index.html", token="Token traido desde flask para la ruta /")

    productRoutes(app)



