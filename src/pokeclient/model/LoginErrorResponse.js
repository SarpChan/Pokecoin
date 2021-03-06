/**
 * Pokecoin
 * The Pokecoin documentation
 *
 * The version of the OpenAPI document: 1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LoginErrorResponse model module.
 * @module model/LoginErrorResponse
 * @version 1.4.0
 */
class LoginErrorResponse {
    /**
     * Constructs a new <code>LoginErrorResponse</code>.
     * The error schema if login failed
     * @alias module:model/LoginErrorResponse
     */
    constructor() { 
        
        LoginErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginErrorResponse} obj Optional instance to populate.
     * @return {module:model/LoginErrorResponse} The populated <code>LoginErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginErrorResponse();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LoginErrorResponse.CodeEnum} code
 */
LoginErrorResponse.prototype['code'] = undefined;

/**
 * @member {String} message
 */
LoginErrorResponse.prototype['message'] = undefined;

/**
 * @member {String} username
 */
LoginErrorResponse.prototype['username'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
LoginErrorResponse['CodeEnum'] = {

    /**
     * value: "UserNotFoundError"
     * @const
     */
    "UserNotFoundError": "UserNotFoundError",

    /**
     * value: "PasswordIncorrectError"
     * @const
     */
    "PasswordIncorrectError": "PasswordIncorrectError"
};



export default LoginErrorResponse;

