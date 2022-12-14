/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProductPimage from './ProductPimage';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @param pimage {module:model/ProductPimage} 
     * @param ptitle {String} 
     */
    constructor(pimage, ptitle) { 
        
        Product.initialize(this, pimage, ptitle);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pimage, ptitle) { 
        obj['pimage'] = pimage;
        obj['ptitle'] = ptitle;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('pimage')) {
                obj['pimage'] = ProductPimage.constructFromObject(data['pimage']);
            }
            if (data.hasOwnProperty('ptitle')) {
                obj['ptitle'] = ApiClient.convertToType(data['ptitle'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Product.prototype['_id'] = undefined;

/**
 * @member {module:model/ProductPimage} pimage
 */
Product.prototype['pimage'] = undefined;

/**
 * @member {String} ptitle
 */
Product.prototype['ptitle'] = undefined;






export default Product;

