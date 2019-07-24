const { models: { Item } } = require('item-data')
const { errors: { LogicError} } = require('item-utils')
const { validate } = require('item-utils')


const logic = {

    //STRINGS
    reverseString(string) {

        validate.arguments([
            { name: 'string', value: string, type: String, notEmpty: true },
        ])

        return string.split("").reverse().join("")
    },

    //ITEMS
    addItem(username, password, isAdmin ) {

        validate.arguments([
            { name: 'username', value: username, type: String, notEmpty: true },
            { name: 'password', value: password, type: String, notEmpty: true },
            { name: 'isAdmin', value: isAdmin, type: Boolean, notEmpty: true }
        ])

        return (async () => {

            await Item.create({ username, password, isAdmin })

        })()
    },

    retrieveAllItems() {

        return (async () => {

            const items = await Item.find({}).lean()
            return items

        })()
    }

}

module.exports = logic

