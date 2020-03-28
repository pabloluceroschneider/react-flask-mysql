from flask import jsonify, request
from products import products

def productRoutes(app):
    #GET
    @app.route('/products', methods=['GET'])
    def getProducts():
        return jsonify(products)    

    #POST
    @app.route('/products', methods=['POST'])
    def addProduct():
    
        new_Prod = {
            "id":request.json['id'],
            "name":request.json['name'],
            "price": request.json['price'],
            "quantity": request.json['quantity']
    }
        products.append(new_Prod)
        return jsonify({'msg:':'Success', 'products':products})

    #PUT
    @app.route('/products/<string:idProduct>', methods=['PUT'])
    def editProduct(idProduct):
        producto = [ p for p in products if p['id']==int(idProduct)][0]
        producto['name'] = request.json['name']
        producto['price'] = request.json['price']
        producto['quantity'] = request.json['quantity']
        return producto



    #GET BY ID
    @app.route('/products/<string:idProduct>', methods=['GET'])
    def getProduct(idProduct):
        productFound = [p for p in products if p['id']==int(idProduct)][0]
        return jsonify(productFound)