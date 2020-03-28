import sys
from flask import jsonify, request
from productRoutes import productRoutes
from products import products


def routes(app):
    
    #PING
    @app.route('/')
    def ping():
        return "Hola master"

    productRoutes(app)



